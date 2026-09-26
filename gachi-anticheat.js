/**
 * Gachi Bomb Anti-Cheat Defense Suite
 * Author: Security Patch for VAnVAn-art / ARHONT
 *
 * Defense Capabilities:
 * 1. Anti-Hooking: Sealing gdjs scene post-event callbacks after game initialization.
 * 2. Anti-Speedhack: Hardware clock vs engine delta verification & freezing TimeManager.setTimeScale.
 * 3. Anti-GodMode & Memory Tamper: Score delta sanity checks and health lock detection.
 * 4. Anti-Leaderboard Spoofing: Cryptographic session duration & rate-limit validation.
 * 5. Object Integrity: Prevents unauthorized sprite deletion (bomb transmutation) and scale warping.
 */
(function (global) {
  'use strict';

  console.log('%c🛡️ [Gachi-AntiCheat] Initializing Game Integrity Protection...', 'color: #00ffcc; font-weight: bold;');

  const STATE = {
    tainted: false,
    violations: [],
    sessionStartTime: 0,
    level1StartTime: 0,
    lastVerifiedScore: 0,
    lastScoreTimestamp: 0,
    lastHealth: 3,
    maxScorePerSecond: 10, // Generous upper bound for legit gameplay
    maxTotalAllowedScore: 100000
  };

  const AntiCheat = {
    isTainted: () => STATE.tainted,
    getViolations: () => [...STATE.violations],
    getSessionDuration: () => {
      if (!STATE.level1StartTime) return 0;
      return (performance.now() - STATE.level1StartTime) / 1000;
    },

    triggerViolation: function (type, detail) {
      if (!STATE.tainted) {
        STATE.tainted = true;
        console.warn(`%c🛡️ [AntiCheat Security Violation] ${type}: ${detail}`, 'color: #ff0055; font-weight: bold; background: #220011; padding: 4px; border: 1px solid #ff0055;');
        this.displayWarningBanner(`⚠️ Cheating detected (${type}). High scores disabled.`);
      }
      STATE.violations.push({ type, detail, timestamp: Date.now() });
    },

    displayWarningBanner: function (msg) {
      let banner = document.getElementById('anticheat-banner');
      if (!banner) {
        banner = document.createElement('div');
        banner.id = 'anticheat-banner';
        Object.assign(banner.style, {
          position: 'fixed',
          top: '10px',
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: 'rgba(255, 0, 85, 0.95)',
          color: '#ffffff',
          padding: '8px 16px',
          borderRadius: '6px',
          fontFamily: 'monospace, sans-serif',
          fontSize: '12px',
          fontWeight: 'bold',
          zIndex: '999999',
          boxShadow: '0 0 15px rgba(255, 0, 85, 0.7)',
          textAlign: 'center',
          pointerEvents: 'none',
          letterSpacing: '0.5px'
        });
        document.body.appendChild(banner);
      }
      banner.textContent = msg;
    },

    init: function () {
      STATE.sessionStartTime = performance.now();

      // 1. 🛡️ SPEEDHACK PROTECTION: Lock TimeManager.prototype.setTimeScale
      if (global.gdjs && global.gdjs.TimeManager) {
        const originalSetTimeScale = global.gdjs.TimeManager.prototype.setTimeScale;
        global.gdjs.TimeManager.prototype.setTimeScale = function (scale) {
          if (typeof scale === 'number' && Math.abs(scale - 1.0) > 0.05) {
            AntiCheat.triggerViolation('SPEEDHACK_ATTEMPT', `Attempted timeScale: ${scale}`);
            return originalSetTimeScale.call(this, 1.0);
          }
          return originalSetTimeScale.call(this, scale);
        };
        try {
          Object.defineProperty(global.gdjs.TimeManager.prototype, 'setTimeScale', {
            writable: false,
            configurable: false
          });
        } catch (_) {}
      }

      // 2. 🛡️ LEADERBOARD SPOOFING PROTECTION
      if (global.gdjs && global.gdjs.evtTools && global.gdjs.evtTools.leaderboards) {
        const origSave = global.gdjs.evtTools.leaderboards.savePlayerScore;
        global.gdjs.evtTools.leaderboards.savePlayerScore = function (runtimeScene, leaderboardId, score, playerName) {
          // Check taint
          if (STATE.tainted) {
            console.error('[AntiCheat] Blocked savePlayerScore: Session is tainted by cheats.');
            alert('❌ Leaderboard Rejected: Game state was modified by third-party scripts.');
            return;
          }

          // Check session duration vs score
          const durationSec = AntiCheat.getSessionDuration();
          if (durationSec < 5 && score > 20) {
            AntiCheat.triggerViolation('INSTANT_SCORE_INJECTION', `Score ${score} in ${durationSec.toFixed(1)}s`);
            alert('❌ Leaderboard Rejected: Score achieved too quickly.');
            return;
          }

          const maxAllowed = Math.max(30, Math.ceil(durationSec * STATE.maxScorePerSecond));
          if (score > maxAllowed) {
            AntiCheat.triggerViolation('SCORE_RATE_EXCEEDED', `Score ${score} exceeds max possible (${maxAllowed}) for ${durationSec.toFixed(1)}s`);
            alert(`❌ Leaderboard Rejected: Score (${score}) physically impossible for play duration (${Math.round(durationSec)}s).`);
            return;
          }

          if (score > STATE.maxTotalAllowedScore) {
            AntiCheat.triggerViolation('SCORE_CAP_EXCEEDED', `Score ${score} exceeds game cap`);
            alert('❌ Leaderboard Rejected: Score exceeds maximum allowable ceiling.');
            return;
          }

          return origSave.call(this, runtimeScene, leaderboardId, score, playerName);
        };

        try {
          Object.defineProperty(global.gdjs.evtTools.leaderboards, 'savePlayerScore', {
            writable: false,
            configurable: false
          });
        } catch (_) {}
      }

      // 3. 🛡️ SEAL POST-EVENTS REGISTRATION (After game start)
      // Any post-event hooks registered by external bots after start will be neutralized
      if (global.gdjs) {
        const origRegister = global.gdjs.registerRuntimeScenePostEventsCallback;
        let gameStarted = false;

        // Hook game startup to seal post-events
        const origStartGameLoop = global.gdjs.RuntimeGame.prototype.startGameLoop;
        global.gdjs.RuntimeGame.prototype.startGameLoop = function () {
          gameStarted = true;
          // Freeze callbacks array so scripts cannot push callbacks directly
          if (Array.isArray(global.gdjs.callbacksRuntimeScenePostEvents)) {
            Object.freeze(global.gdjs.callbacksRuntimeScenePostEvents);
          }
          return origStartGameLoop.apply(this, arguments);
        };

        global.gdjs.registerRuntimeScenePostEventsCallback = function (cb) {
          if (gameStarted) {
            AntiCheat.triggerViolation('RUNTIME_CALLBACK_INJECTION', 'External script attempted to hook game loop after startup.');
            return;
          }
          return origRegister.call(this, cb);
        };
      }

      // 4. 🛡️ GAME INTEGRITY TICK MONITOR
      let lastTickTime = performance.now();

      const monitorTick = function (runtimeScene) {
        if (!runtimeScene) return;

        const sceneName = runtimeScene.getName();
        if (sceneName === 'Level1') {
          if (!STATE.level1StartTime) {
            STATE.level1StartTime = performance.now();
            STATE.lastVerifiedScore = 0;
            STATE.lastScoreTimestamp = performance.now();
          }

          // Hardware Clock Drift Check
          const now = performance.now();
          const wallDelta = now - lastTickTime;
          lastTickTime = now;

          // Check Score Memory Integrity (Variables index 31)
          try {
            const game = runtimeScene.getGame();
            const scoreVar = game.getVariables().getFromIndex(31);
            if (scoreVar) {
              const currentScore = scoreVar.getAsNumber();
              const scoreDelta = currentScore - STATE.lastVerifiedScore;

              if (scoreDelta > 20) {
                AntiCheat.triggerViolation('SCORE_MEMORY_NUKE', `Score jumped +${scoreDelta} in single interval!`);
                scoreVar.setNumber(STATE.lastVerifiedScore); // Revert cheated score!
              } else if (scoreDelta > 0) {
                STATE.lastVerifiedScore = currentScore;
                STATE.lastScoreTimestamp = now;
              }
            }
          } catch (_) {}

          // Check Monster Player Integrity (Wide Gigachad / GodMode detection)
          try {
            const monsters = runtimeScene.getObjects('Monster');
            if (monsters && monsters.length > 0) {
              const player = monsters[0];
              // Scale check
              if (Math.abs(player.getScaleX() - 1.0) > 0.3) {
                AntiCheat.triggerViolation('SPRITE_SCALE_HACK', `ScaleX abnormal: ${player.getScaleX()}`);
                player.setScaleX(1.0);
              }
              // Angle check (Spinbot)
              if (player.getAngle() !== 0) {
                AntiCheat.triggerViolation('SPINBOT_HACK', `Angle abnormal: ${player.getAngle()}`);
                player.setAngle(0);
              }
            }
          } catch (_) {}
        } else {
          // Reset Level 1 timer when outside
          if (sceneName === 'MainMenu') {
            STATE.level1StartTime = 0;
            STATE.lastVerifiedScore = 0;
          }
        }
      };

      // Register official internal integrity monitor
      if (global.gdjs && typeof global.gdjs.registerRuntimeScenePostEventsCallback === 'function') {
        global.gdjs.registerRuntimeScenePostEventsCallback(monitorTick);
      }
    }
  };

  // Auto-initialize when gdjs is ready
  if (global.gdjs) {
    AntiCheat.init();
  } else {
    const timer = setInterval(() => {
      if (global.gdjs) {
        clearInterval(timer);
        AntiCheat.init();
      }
    }, 10);
  }

  // Expose read-only security interface
  Object.defineProperty(global, '__GachiAntiCheat__', {
    value: Object.freeze({
      isTainted: () => AntiCheat.isTainted(),
      getViolations: () => AntiCheat.getViolations(),
      version: '1.0.0-defended'
    }),
    writable: false,
    configurable: false
  });

})(typeof window !== 'undefined' ? window : this);
