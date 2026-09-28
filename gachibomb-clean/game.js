/**
 * GACHI BOMB — 1:1 AUTHENTIC HTML5 REWRITE
 * Exact match with author's screenshots (Locker background, Yellow circular buttons,
 * Character card with multiplier pill, SourGummy HUD, and authentic GDevelop speed physics).
 */

(() => {
  'use strict';

  const CANVAS_W = 720;
  const CANVAS_H = 1280;

  // GDevelop Cloud Leaderboard configuration
  const GDEVELOP_CONFIG = {
    gameUuid: '0570755b-5661-4b01-b798-87c92dcd0117',
    leaderboardId: '6672be4e-e92d-41b8-a4bc-0abfd9567165',
    apiUrl: 'https://api.gdevelop.io/play',
    iframeUrl: 'https://gd.games/games/0570755b-5661-4b01-b798-87c92dcd0117/leaderboard/6672be4e-e92d-41b8-a4bc-0abfd9567165?inGameEmbedded=true'
  };

  // 10 Authentic Characters from GDevelop project (Purely cosmetic skins with original prices)
  const CHARACTERS = [
    { id: 'billy', name: 'Billy', price: 0, sprite: 'player_billy', photo: 'pers_billy' },
    { id: 'ricardo', name: 'Рикардо Милос', price: 500, sprite: 'player_ricardo', photo: 'pers_ricardo' },
    { id: 'bogdan', name: 'Дядя Богдан', price: 650, sprite: 'player_bogdan', photo: 'pers_bogdan' },
    { id: 'van', name: 'Van Darkholme', price: 200, sprite: 'player_van', photo: 'pers_van' },
    { id: 'svetlolikiy', name: 'Светлоликий', price: 750, sprite: 'player_svetlolikiy', photo: 'pers_svetlolikiy' },
    { id: 'rock', name: 'Скала (The Rock)', price: 500, sprite: 'player_rock', photo: 'pers_rock' },
    { id: 'mark', name: 'Mark Wolf', price: 300, sprite: 'player_mark', photo: 'pers_mark' },
    { id: 'smaev', name: 'Дед Смай', price: 800, sprite: 'player_smaev', photo: 'pers_smaev' },
    { id: 'steve_harley', name: 'Стив Харли', price: 700, sprite: 'player_steve', photo: 'pers_steve' },
    { id: 'steve_rambo', name: 'Стив Рембо', price: 1100, sprite: 'player_steve', photo: 'pers_steve' }
  ];

  // 5 Authentic Martial Steel Katana & Gym Blades with Distinct Visuals & Gameplay Perks
  const NINJA_BLADES = [
    {
      id: 'katana_steel',
      name: 'Classic Steel Katana',
      price: 0,
      perkName: 'BALANCED STEEL',
      perkDesc: 'Balanced Hamon cutting',
      bladeColor: '#dbe2ea',
      edgeColor: '#ffffff',
      accentColor: '#fde82d',
      tsubaColor: '#1b1d22',
      habakiColor: '#e6b845',
      trailStroke: 'rgba(240, 246, 255, 0.95)',
      trailGlow: 'rgba(180, 215, 255, 0.7)',
      coreColor: '#ffffff',
      particleColor: '#e8f4fc',
      trailWidth: 8,
      slicePitch: 800,
      desc: 'HONED HIGH-CARBON STEEL'
    },
    {
      id: 'katana_iron',
      name: 'Gym Cast-Iron Saber',
      price: 250,
      perkName: 'HEAVY REACH',
      perkDesc: '+20px slice radius',
      bladeColor: '#6f7682',
      edgeColor: '#ff9800',
      accentColor: '#ff6d00',
      tsubaColor: '#14161a',
      habakiColor: '#ff8f00',
      trailStroke: 'rgba(255, 120, 20, 0.95)',
      trailGlow: 'rgba(255, 80, 0, 0.85)',
      coreColor: '#ffe0b2',
      particleColor: '#ff6d00',
      trailWidth: 14,
      slicePitch: 420,
      reachBonus: 20,
      desc: 'HEAVY FORGED CAST IRON'
    },
    {
      id: 'katana_gold',
      name: 'Ceremonial Golden Katana',
      price: 450,
      perkName: 'MIDAS TOUCH',
      perkDesc: '50% coin drop rate',
      bladeColor: '#ffd700',
      edgeColor: '#fff9c4',
      accentColor: '#ffffff',
      tsubaColor: '#2b2308',
      habakiColor: '#ffe07a',
      trailStroke: 'rgba(255, 220, 40, 0.98)',
      trailGlow: 'rgba(255, 190, 0, 0.9)',
      coreColor: '#ffffff',
      particleColor: '#ffd700',
      trailWidth: 10,
      slicePitch: 1050,
      coinDropRate: 0.50,
      desc: 'POLISHED CEREMONIAL GOLD'
    },
    {
      id: 'katana_damascus',
      name: 'Damascus Folded Katana',
      price: 700,
      perkName: 'TWIN COMBO',
      perkDesc: '2-slice combo chains',
      bladeColor: '#00e5ff',
      edgeColor: '#e0f7fa',
      accentColor: '#00b0ff',
      tsubaColor: '#1e2126',
      habakiColor: '#00e5ff',
      trailStroke: 'rgba(0, 229, 255, 0.95)',
      trailGlow: 'rgba(0, 180, 255, 0.85)',
      coreColor: '#ffffff',
      particleColor: '#00e5ff',
      trailWidth: 9,
      slicePitch: 1200,
      comboThreshold: 2,
      desc: 'FOLDED DAMASCUS STEEL'
    },
    {
      id: 'katana_dungeon',
      name: 'Dungeon Combat Katana',
      price: 1000,
      perkName: 'BOMB DEFLECTOR',
      perkDesc: 'Deflects 1 bomb hit',
      bladeColor: '#282a30',
      edgeColor: '#ff1744',
      accentColor: '#d50000',
      tsubaColor: '#101114',
      habakiColor: '#ff1744',
      trailStroke: 'rgba(255, 23, 68, 0.95)',
      trailGlow: 'rgba(213, 0, 0, 0.85)',
      coreColor: '#ffffff',
      particleColor: '#ff1744',
      trailWidth: 12,
      slicePitch: 580,
      bombShield: true,
      desc: 'MATTE BLACK COMBAT STEEL'
    }
  ];

  // Multiplier upgrades (matching GDevelop index 32)
  const MULTIPLIER_UPGRADES = {
    1: { next: 2, cost: 200 },
    2: { next: 3, cost: 500 },
    3: { next: 4, cost: 1100 },
    4: { next: 5, cost: 5000 }
  };

  // Authentic Falling Supplements
  const SUPPLEMENT_TYPES = [
    { type: 'protein', sprite: 'supp_protein', basePoints: 1, color: '#00e5ff', radius: 46 },
    { type: 'creatine', sprite: 'supp_creatine', basePoints: 1, color: '#9d4edd', radius: 48 },
    { type: 'trenbolone', sprite: 'supp_trenbolone', basePoints: 1, color: '#ffd700', radius: 48 },
    { type: 'gainer', sprite: 'supp_gainer', basePoints: 1, color: '#ff9e00', radius: 50 }
  ];

  // ============================================================
  // AUDIO CONTROLLER (BULLETPROOF ICECAST 2.4 LIVE STREAMING)
  // ============================================================
  class AudioController {
    constructor() {
      this.ctx = null;
      this.musicGain = null;
      this.sfxGain = null;
      this.radioAudio = null;
      this.currentBgm = null;
      this.bgmVolume = 0.7;
      this.sfxVolume = 0.8;
      this.isMuted = false;
      this.isConnecting = false;

      // Primary live background music stream: Gachi Radio
      this.radioUrl = 'https://gachiradio.com/play';
      this.isPlayingRadio = false;

      this.bgmTracks = [
        'assets/audio/bgm_rinat.mp3',
        'assets/audio/bgm_kazhdyj_raz.mp3',
        'assets/audio/bgm_barbie_girl.mp3',
        'assets/audio/bgm_kids.mp3'
      ];
      this.currentTrackIdx = 0;
      this.sfxBuffers = {};

      this.reconnectTimer = null;
      this.stalledTimer = null;
      this.lastPosition = -1;
      this.stuckChecks = 0;

      // Continuous heartbeat monitor: checks live Icecast stream health every 3s
      setInterval(() => this.monitorStreamHealth(), 3000);
    }

    init() {
      if (this.ctx) return;
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      this.ctx = new AudioCtx();
      this.musicGain = this.ctx.createGain();
      this.sfxGain = this.ctx.createGain();

      this.musicGain.gain.setValueAtTime(this.bgmVolume, this.ctx.currentTime);
      this.sfxGain.gain.setValueAtTime(this.sfxVolume, this.ctx.currentTime);

      this.musicGain.connect(this.ctx.destination);
      this.sfxGain.connect(this.ctx.destination);

      this.loadSfx('boy', 'assets/audio/boy.mp3');
      this.loadSfx('ahhhhhhh', 'assets/audio/ahhhhhhh.mp3');
      this.loadSfx('amazing', 'assets/audio/thats-amazing.mp3');
      this.loadSfx('click', 'assets/audio/sfx_click.mp3');
      this.loadSfx('explosion', 'assets/audio/sfx_explosion.mp3');
      this.loadSfx('woo', 'assets/audio/sfx_woo.mp3');
      this.loadSfx('ne_nado', 'assets/audio/sfx_ne_nado.mp3');
      this.loadSfx('skala', 'assets/audio/sfx_skala.mp3');
      this.loadSfx('sorry', 'assets/audio/sfx_sorry.mp3');
    }

    async loadSfx(id, url) {
      try {
        const res = await fetch(url);
        const buf = await res.arrayBuffer();
        if (this.ctx) {
          this.sfxBuffers[id] = await this.ctx.decodeAudioData(buf);
        }
      } catch (e) {}
    }

    unlock() {
      this.init();
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
    }

    playSfx(id) {
      if (this.isMuted || !this.ctx || !this.sfxBuffers[id]) return;
      try {
        const src = this.ctx.createBufferSource();
        src.buffer = this.sfxBuffers[id];
        src.connect(this.sfxGain);
        src.start(0);
      } catch (e) {}
    }

    // Synthesized Katana whoosh tailored to equipped blade's acoustic profile
    playSliceWhoosh(pitch = 750, duration = 0.09, oscType = 'triangle') {
      if (this.isMuted || !this.ctx) return;
      try {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = oscType;
        const now = this.ctx.currentTime;
        osc.frequency.setValueAtTime(pitch, now);
        osc.frequency.exponentialRampToValueAtTime(Math.max(60, pitch * 0.18), now + duration);
        gain.gain.setValueAtTime(this.sfxVolume * 0.5, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + duration);
        osc.connect(gain);
        gain.connect(this.sfxGain);
        osc.start(now);
        osc.stop(now + duration + 0.01);
      } catch (e) {}
    }

    monitorStreamHealth() {
      if (this.isMuted || this.bgmVolume <= 0) return;
      if (!this.radioAudio) return;

      if (!this.radioAudio.paused) {
        if (this.radioAudio.currentTime === this.lastPosition && this.radioAudio.readyState >= 2) {
          this.stuckChecks++;
          if (this.stuckChecks >= 2) {
            console.warn('[AudioController] Stream buffer frozen, reconnecting fresh live stream');
            this.stuckChecks = 0;
            this.connectRadioStream();
          }
        } else {
          this.stuckChecks = 0;
          this.lastPosition = this.radioAudio.currentTime;
        }
      } else if (!this.isConnecting) {
        this.connectRadioStream();
      }
    }

    connectRadioStream() {
      if (this.isMuted || this.bgmVolume <= 0) return;
      this.unlock();
      this.isConnecting = true;

      // Tear down old stream cleanly to close old TCP socket
      if (this.radioAudio) {
        try {
          this.radioAudio.pause();
          this.radioAudio.removeAttribute('src');
          this.radioAudio.load();
        } catch (e) {}
        this.radioAudio = null;
      }

      try {
        const audio = new Audio();
        audio.crossOrigin = 'anonymous';
        audio.preload = 'none';
        // Cache buster ensures Icecast creates a new live TCP pipe instead of caching dead packets
        audio.src = `${this.radioUrl}?t=${Date.now()}`;
        audio.volume = this.bgmVolume;

        audio.addEventListener('error', (err) => {
          console.warn('[AudioController] Radio error, retrying in 2s:', err);
          this.scheduleReconnect(2000);
        });

        audio.addEventListener('stalled', () => {
          if (this.stalledTimer) clearTimeout(this.stalledTimer);
          this.stalledTimer = setTimeout(() => {
            if (this.radioAudio === audio && (audio.paused || audio.readyState < 3)) {
              console.warn('[AudioController] Radio stalled for >3s, reconnecting...');
              this.connectRadioStream();
            }
          }, 3500);
        });

        audio.addEventListener('playing', () => {
          this.isConnecting = false;
          this.isPlayingRadio = true;
          if (this.stalledTimer) clearTimeout(this.stalledTimer);
        });

        audio.addEventListener('ended', () => {
          console.warn('[AudioController] Live stream ended, reconnecting...');
          this.connectRadioStream();
        });

        this.radioAudio = audio;
        this.currentBgm = audio;

        const p = audio.play();
        if (p !== undefined) {
          p.then(() => {
            this.isConnecting = false;
            this.isPlayingRadio = true;
          }).catch(err => {
            this.isConnecting = false;
            console.log('[AudioController] Autoplay deferred until user click:', err);
          });
        }
      } catch (err) {
        this.isConnecting = false;
        this.scheduleReconnect(2500);
      }
    }

    scheduleReconnect(delay = 2000) {
      if (this.reconnectTimer) clearTimeout(this.reconnectTimer);
      this.reconnectTimer = setTimeout(() => {
        if (!this.isMuted && this.bgmVolume > 0) {
          this.connectRadioStream();
        }
      }, delay);
    }

    startBgm() {
      if (this.isMuted || this.bgmVolume <= 0) return;
      if (this.radioAudio && !this.radioAudio.paused && this.radioAudio.readyState >= 2) {
        return; // healthy stream already active
      }
      this.connectRadioStream();
    }

    ensureBgmPlaying() {
      if (this.isMuted || this.bgmVolume <= 0) return;
      if (!this.radioAudio || this.radioAudio.paused || this.radioAudio.readyState < 2) {
        this.connectRadioStream();
      }
    }

    pauseBgm() {
      // Keep live radio rolling unless explicitly muted to avoid socket teardown
      if (this.isMuted && this.radioAudio) {
        this.radioAudio.pause();
      }
    }

    resumeBgm() {
      this.ensureBgmPlaying();
    }

    setMusicVolume(v) {
      this.bgmVolume = Math.max(0, Math.min(1, v));
      if (this.radioAudio) this.radioAudio.volume = this.bgmVolume;
      if (this.bgmVolume > 0) {
        this.isMuted = false;
        this.ensureBgmPlaying();
      } else {
        this.isMuted = true;
        if (this.radioAudio) this.radioAudio.pause();
      }
      if (this.musicGain && this.ctx) {
        this.musicGain.gain.setValueAtTime(this.bgmVolume, this.ctx.currentTime);
      }
    }

    setSfxVolume(v) {
      this.sfxVolume = Math.max(0, Math.min(1, v));
      if (this.sfxGain && this.ctx) {
        this.sfxGain.gain.setValueAtTime(this.sfxVolume, this.ctx.currentTime);
      }
    }
  }

  // ============================================================
  // PARTICLES & EFFECTS
  // ============================================================
  class ParticleSystem {
    constructor() {
      this.particles = [];
      this.floatingTexts = [];
    }

    createBurst(x, y, color = '#ffe600', count = 16) {
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const spd = Math.random() * 3.8 + 1.2;
        this.particles.push({
          x, y,
          vx: Math.cos(angle) * spd,
          vy: Math.sin(angle) * spd - 0.8,
          color,
          radius: Math.random() * 4.5 + 2.5,
          alpha: 1,
          decay: Math.random() * 0.012 + 0.008, // lingers pleasantly for ~1.4s
          friction: 0.96,
          gravity: 0.08
        });
      }
    }

    createExplosion(x, y) {
      for (let i = 0; i < 28; i++) {
        const angle = Math.random() * Math.PI * 2;
        const spd = Math.random() * 6 + 2;
        this.particles.push({
          x, y,
          vx: Math.cos(angle) * spd,
          vy: Math.sin(angle) * spd,
          color: Math.random() < 0.6 ? '#ff0033' : '#ffaa00',
          radius: Math.random() * 6 + 3.5,
          alpha: 1,
          decay: Math.random() * 0.015 + 0.010,
          friction: 0.96,
          gravity: 0.1
        });
      }
    }

    addFloatingText(x, y, text, color = '#ffe600', fontSize = 34) {
      this.floatingTexts.push({
        x,
        y,
        text,
        color,
        fontSize,
        alpha: 1,
        lifetime: 1.4,
        age: 0
      });
    }

    update(dt) {
      const step = Math.min(dt * 60, 2.5);

      for (let i = this.particles.length - 1; i >= 0; i--) {
        const p = this.particles[i];
        p.x += p.vx * step;
        p.y += p.vy * step;
        p.vx *= Math.pow(p.friction || 0.96, step);
        p.vy = p.vy * Math.pow(p.friction || 0.96, step) + (p.gravity || 0) * step;
        p.alpha -= p.decay * step;
        if (p.alpha <= 0) this.particles.splice(i, 1);
      }

      for (let i = this.floatingTexts.length - 1; i >= 0; i--) {
        const t = this.floatingTexts[i];
        t.age += dt;
        // Calm, readable upward drift: gentle initial pop, then smooth glide
        const floatSpeed = t.age < 0.28 ? 26 : 11;
        t.y -= floatSpeed * dt;

        // Stay 100% solid and crystal clear for 0.65s, then gracefully fade out
        if (t.age < 0.65) {
          t.alpha = 1.0;
        } else {
          t.alpha = Math.max(0, 1.0 - (t.age - 0.65) / (t.lifetime - 0.65));
        }

        if (t.age >= t.lifetime) this.floatingTexts.splice(i, 1);
      }
    }

    render(ctx) {
      for (const p of this.particles) {
        ctx.save();
        ctx.globalAlpha = Math.max(0, p.alpha);
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      for (const t of this.floatingTexts) {
        ctx.save();
        ctx.globalAlpha = Math.max(0, t.alpha);
        ctx.font = `900 italic ${t.fontSize || 34}px "SourGummy", sans-serif`;
        ctx.fillStyle = t.color;
        ctx.textAlign = 'center';
        ctx.shadowColor = '#000000';
        ctx.shadowBlur = 10;
        ctx.lineWidth = 4;
        ctx.strokeStyle = '#000000';
        ctx.strokeText(t.text, t.x, t.y);
        ctx.fillText(t.text, t.x, t.y);
        ctx.restore();
      }
    }
  }

  // ============================================================
  // ANTI-CHEAT & OFFICIAL LEADERBOARD SUBMISSION
  // ============================================================
  class AntiCheatLeaderboard {
    constructor() {
      this.gameId = GDEVELOP_CONFIG.gameUuid;
      this.boardId = GDEVELOP_CONFIG.leaderboardId;
    }

    async submitScoreToOfficial(name, score) {
      const trimmedName = (name || 'ANONYMOUS').trim().slice(0, 15);
      const scoreNum = Math.floor(Number(score)) || 0;

      if (scoreNum <= 0) {
        return { success: false, message: 'Score must be greater than 0!' };
      }

      const payload = JSON.stringify({
        leaderboardId: this.boardId,
        playerName: trimmedName,
        score: scoreNum
      });

      try {
        const encoder = new TextEncoder();
        const data = encoder.encode(payload);
        const hashBuf = await crypto.subtle.digest('SHA-256', data);
        const hashBase64 = btoa(String.fromCharCode(...new Uint8Array(hashBuf)));

        const endpoint = `${GDEVELOP_CONFIG.apiUrl}/game/${this.gameId}/leaderboard/${this.boardId}/entry`;
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
            'digest': `SHA-256=${hashBase64}`
          },
          body: payload
        });

        if (res.ok) {
          const json = await res.json();
          this.saveLocalScore(trimmedName, scoreNum, 'CLASSIC');
          return {
            success: true,
            message: `Submitted! Rank: #${json.rank || 1} Score: ${json.score || scoreNum}`
          };
        } else {
          return { success: false, message: `Submission error: HTTP ${res.status}` };
        }
      } catch (err) {
        return { success: false, message: `Network error: ${err.message}` };
      }
    }

    getLocalScores() {
      try {
        const stored = localStorage.getItem('gachi_local_scores');
        return stored ? JSON.parse(stored) : [];
      } catch (e) {
        return [];
      }
    }

    saveLocalScore(name, score, mode) {
      try {
        const scores = this.getLocalScores();
        scores.push({
          name: name.slice(0, 15),
          score: Math.floor(score),
          mode: mode,
          date: new Date().toLocaleDateString()
        });
        scores.sort((a, b) => b.score - a.score);
        localStorage.setItem('gachi_local_scores', JSON.stringify(scores.slice(0, 20)));
      } catch (e) {}
    }
  }

  // ============================================================
  // MAIN GAME ENGINE
  // ============================================================
  class GachiBombGame {
    constructor() {
      this.canvas = document.getElementById('gameCanvas');
      this.ctx = this.canvas.getContext('2d');

      this.audio = new AudioController();
      this.particles = new ParticleSystem();
      this.antiCheat = new AntiCheatLeaderboard();

      this.state = 'MENU'; // 'MENU' | 'SHOP' | 'PLAYING' | 'PAUSED' | 'GAMEOVER'
      this.mode = 'CLASSIC'; // 'CLASSIC' | 'NINJA'

      // EXACT ORIGINAL GDEVELOP SPEED CURVE:
      // Base: 100 px/sec, Bombs: 150 px/sec, Acceleration: +7 px/sec per second
      this.gameSpeed = 100;
      this.baseSpeed = 100;
      this.speedAcceleration = 7;
      this.elapsedGameTime = 0;

      // Spawning timers (Exact GDevelop parameters)
      this.supplementTimer = 0;
      this.supplementInterval = 1.3;
      this.shieldTimer = 0;
      this.shieldInterval = 38;
      this.bombTimer = 0;
      this.bombInterval = 4.8;

      this.canvasHeight = 1280;
      this.canvasWidth = 720;
      this.arenaWidth = 720;
      this.arenaLeft = 0;
      this.arenaRight = 720;

      // Player parameters
      this.player = {
        x: (720 - 237) / 2,
        y: 1030,
        w: 237,
        h: 234,
        targetX: (720 - 237) / 2,
        maxSpeed: 750, // original TopDownMovement max speed
        invincibleTime: 0
      };

      this.score = 0;
      this.lives = 3;
      this.combo = 0;
      this.comboTimer = 0;

      this.equippedCharIndex = Number(localStorage.getItem('gachi_equipped_char_idx') || 0);
      this.selectedCharIndex = this.equippedCharIndex;
      this.selectedBg = localStorage.getItem('gachi_bg') || 'bg_12_main';
      this.dropColor = localStorage.getItem('gachi_drop_color') || '#ffffff';
      this.bombColor = localStorage.getItem('gachi_bomb_color') || '#ff0000';
      this.previewItemIndex = 0;

      // Dynamic Persisted Economy (no screenshot hardcoding)
      this.goldCoins = Number(localStorage.getItem('gachi_gold_coins') || 300);
      this.cyanDiamonds = Number(localStorage.getItem('gachi_cyan_diamonds') || 50);
      try {
        this.ownedChars = JSON.parse(localStorage.getItem('gachi_owned_chars') || '["billy"]');
      } catch (e) {
        this.ownedChars = ['billy'];
      }
      this.multiplierLvl = Number(localStorage.getItem('gachi_mult_lvl') || 1);
      this.earnedCoinsThisRun = 0;
      this.activeShopTab = 'character';
      this.armoryMode = 'CHARS'; // 'CHARS' | 'BLADES'
      this.ninjaBlades = NINJA_BLADES;
      this.equippedBladeIndex = Number(localStorage.getItem('gachi_equipped_blade_idx') || 0);
      this.selectedBladeIndex = this.equippedBladeIndex;
      try {
        this.ownedBlades = JSON.parse(localStorage.getItem('gachi_owned_blades') || '["katana_steel"]');
      } catch (e) {
        this.ownedBlades = ['katana_steel'];
      }
      if (this.ownedBlades.includes('katana_classic') && !this.ownedBlades.includes('katana_steel')) {
        this.ownedBlades.push('katana_steel');
      }
      this.boardMsgHandler = null;

      this.items = [];
      this.splitPieces = [];
      this.pointerPoints = [];
      this.isSwiping = false;
      this.currentSwipeCutCount = 0;
      this.ninjaStrikes = 0;
      this.ninjaWaveTimer = 0;
      this.ninjaNextWaveDelay = 0.8;
      this.slashFlashes = [];
      this.screenFlash = 0;
      this.keys = {};

      // Gamepad controller tracking
      this.lastGamepadStart = false;
      this.lastGamepadA = false;

      this.shakeDuration = 0;
      this.shakeIntensity = 0;

      this.images = {};
      this.init();
    }

    async init() {
      this.updateScreenParameters();
      window.addEventListener('resize', () => this.updateScreenParameters());
      window.addEventListener('orientationchange', () => setTimeout(() => this.updateScreenParameters(), 100));

      const onFsChange = () => {
        setTimeout(() => this.updateScreenParameters(), 50);
        this.updateFsButtonIcons();
      };
      document.addEventListener('fullscreenchange', onFsChange);
      document.addEventListener('webkitfullscreenchange', onFsChange);
      document.addEventListener('mozfullscreenchange', onFsChange);
      document.addEventListener('MSFullscreenChange', onFsChange);

      this.setupDOM();
      this.setupInput();
      await this.preloadAssets();
      this.loadSettings();
      this.renderCharacterCard();
      this.updateEffectsPreview();
      this.updateCurrencyDisplay();
      this.updateFsButtonIcons();
      this.startLoop();
    }

    async preloadAssets() {
      const assetList = {
        // 13 Authentic Backgrounds from original GDevelop
        bg_12_main: 'assets/sprites/bg_12_main.png',
        bg_9_beach: 'assets/sprites/bg_9_beach.png',
        bg_1_smaev: 'assets/sprites/bg_1_smaev.png',
        bg_2_jungle: 'assets/sprites/bg_2_jungle.png',
        bg_3_road: 'assets/sprites/bg_3_road.png',
        bg_4_new1: 'assets/sprites/bg_4_new1.png',
        bg_5_new2: 'assets/sprites/bg_5_new2.png',
        bg_6_new4: 'assets/sprites/bg_6_new4.png',
        bg_7_new5: 'assets/sprites/bg_7_new5.png',
        bg_8_new3: 'assets/sprites/bg_8_new3.png',
        bg_10_new6: 'assets/sprites/bg_10_new6.png',
        bg_11_svetlolikiy: 'assets/sprites/bg_11_svetlolikiy.png',
        bg_0_custom: 'assets/sprites/bg_0_custom.png',
        bg_main: 'assets/sprites/bg_12_main.png',
        bg_gym: 'assets/sprites/bg_1_smaev.png',

        // UI & Buttons from Author's Screenshots
        title_logo: 'assets/sprites/title_logo.png',
        decor_bean: 'assets/sprites/decor_bean.png',
        btn_gear: 'assets/sprites/btn_gear.png',
        btn_chart: 'assets/sprites/btn_chart.png',
        btn_play: 'assets/sprites/btn_play.png',
        btn_basket: 'assets/sprites/btn_basket.png',
        btn_refresh: 'assets/sprites/btn_refresh.png',
        btn_pause_yellow: 'assets/sprites/btn_pause_yellow.png',
        btn_cases: 'assets/sprites/btn_cases.png',
        btn_male_plus: 'assets/sprites/btn_male_plus.png',
        btn_gallery: 'assets/sprites/btn_gallery.png',
        btn_star_drop: 'assets/sprites/btn_star_drop.png',
        btn_submit: 'assets/sprites/btn_submit.png',
        life_3: 'assets/sprites/life-3.png',
        life_0: 'assets/sprites/life-0.png',
        heart_yellow: 'assets/sprites/heart_yellow.png',
        heart_empty: 'assets/sprites/heart_empty.png',
        coin_gold: 'assets/sprites/coin_gold.png',
        coin_cyan: 'assets/sprites/coin_cyan.png',
        crate_box: 'assets/sprites/crate_box.png',
        crate_coins: 'assets/sprites/crate_coins.png',

        // Falling Items
        bomb: 'assets/sprites/bomb.png',
        bomb_skull: 'assets/sprites/bomb_skull.png',
        supp_protein: 'assets/sprites/supp_protein.png',
        supp_creatine: 'assets/sprites/supp_creatine.png',
        supp_trenbolone: 'assets/sprites/supp_trenbolone.png',
        supp_gainer: 'assets/sprites/supp_gainer.png',
        supp_shield: 'assets/sprites/supp_shield.png',

        // Fighters (Player in-game & Card photo cutout)
        player_billy: 'assets/sprites/player_billy.png',
        player_ricardo: 'assets/sprites/player_ricardo.png',
        player_bogdan: 'assets/sprites/player_bogdan.png',
        player_van: 'assets/sprites/player_van.png',
        player_svetlolikiy: 'assets/sprites/player_svetlolikiy.png',
        player_rock: 'assets/sprites/player_rock.png',
        player_mark: 'assets/sprites/player_mark.png',
        player_smaev: 'assets/sprites/player_smaev.png',
        player_steve: 'assets/sprites/player_steve.png',

        pers_billy: 'assets/sprites/pers_billy.png',
        pers_ricardo: 'assets/sprites/pers_ricardo.png',
        pers_bogdan: 'assets/sprites/pers_bogdan.png',
        pers_van: 'assets/sprites/pers_van.png',
        pers_svetlolikiy: 'assets/sprites/pers_svetlolikiy.png',
        pers_rock: 'assets/sprites/pers_rock.png',
        pers_mark: 'assets/sprites/pers_mark.png',
        pers_smaev: 'assets/sprites/pers_smaev.png',
        pers_steve: 'assets/sprites/pers_steve.png'
      };

      const promises = Object.entries(assetList).map(([k, url]) => {
        return new Promise(resolve => {
          const img = new Image();
          img.src = url;
          img.onload = () => {
            this.images[k] = img;
            resolve();
          };
          img.onerror = () => {
            console.warn('Asset missing:', url);
            resolve();
          };
        });
      });

      await Promise.all(promises);
    }

    updateScreenParameters() {
      const container = document.getElementById('game-container');
      if (!container || !this.canvas) return;
      const rect = container.getBoundingClientRect();
      const w = rect.width || window.innerWidth;
      const h = rect.height || window.innerHeight;
      if (!w || !h) return;

      // Maintain uniform virtual height of 1280 (matching authentic GDevelop vertical coordinate space)
      // and adapt canvas width to match the screen's EXACT aspect ratio.
      // This completely eliminates any stretching, letterboxing, or pillarbox black crops on any device.
      const designH = 1280;
      const aspect = w / h;
      this.canvasHeight = designH;
      this.canvasWidth = Math.round(designH * aspect);
      this.canvas.width = this.canvasWidth;
      this.canvas.height = this.canvasHeight;

      // Calculate arena boundaries for gameplay
      if (this.canvasWidth <= 760) {
        // Mobile / portrait phones and tablets: full screen width
        this.arenaWidth = this.canvasWidth;
        this.arenaLeft = 0;
        this.arenaRight = this.canvasWidth;
      } else {
        // Desktop / widescreen PC / laptop: centered ergonomic gym court
        this.arenaWidth = Math.min(this.canvasWidth, Math.max(720, Math.min(1050, this.canvasHeight * 0.85)));
        this.arenaLeft = Math.round((this.canvasWidth - this.arenaWidth) / 2);
        this.arenaRight = this.arenaLeft + this.arenaWidth;
      }

      // Adjust player ground position dynamically
      if (this.player) {
        this.player.y = this.canvasHeight - 250;
        this.player.x = Math.max(this.arenaLeft, Math.min(this.arenaRight - this.player.w, this.player.x));
        this.player.targetX = Math.max(this.arenaLeft, Math.min(this.arenaRight - this.player.w, this.player.targetX));
      }
    }

    toggleFullscreen() {
      const doc = window.document;
      const docEl = doc.documentElement;

      const requestFs = docEl.requestFullscreen || docEl.webkitRequestFullScreen || docEl.mozRequestFullScreen || docEl.msRequestFullscreen;
      const cancelFs = doc.exitFullscreen || doc.webkitExitFullscreen || doc.mozCancelFullScreen || doc.msExitFullscreen;

      const isFs = doc.fullscreenElement || doc.webkitFullscreenElement || doc.mozFullScreenElement || doc.msFullscreenElement;

      if (!isFs) {
        if (requestFs) {
          requestFs.call(docEl).catch(err => console.warn('Fullscreen err:', err));
        }
      } else {
        if (cancelFs) {
          cancelFs.call(doc);
        }
      }
    }

    updateFsButtonIcons() {
      const isFs = !!(document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement);
      const btnSettingsFs = document.getElementById('btn-settings-fs');
      if (btnSettingsFs) btnSettingsFs.textContent = isFs ? 'EXIT FULLSCREEN (F)' : 'TOGGLE FULLSCREEN (F)';
    }

    loadSettings() {
      const savedChar = localStorage.getItem('gachi_char_idx');
      if (savedChar !== null) {
        this.selectedCharIndex = Math.max(0, Math.min(CHARACTERS.length - 1, Number(savedChar)));
      }
      const savedBlade = localStorage.getItem('gachi_equipped_blade_idx');
      if (savedBlade !== null) {
        this.equippedBladeIndex = Math.max(0, Math.min(this.ninjaBlades.length - 1, Number(savedBlade)));
        this.selectedBladeIndex = this.equippedBladeIndex;
      }
      const savedBg = localStorage.getItem('gachi_bg');
      if (savedBg && this.images[savedBg]) {
        this.selectedBg = savedBg;
      }
      const savedName = localStorage.getItem('gachi_player_name');
      if (savedName) {
        document.getElementById('player-name-input').value = savedName;
      }
      this.updateCurrencyDisplay();
    }

    getCurrentMultiplier() {
      return this.multiplierLvl;
    }

    saveEconomy() {
      localStorage.setItem('gachi_gold_coins', this.goldCoins);
      localStorage.setItem('gachi_cyan_diamonds', this.cyanDiamonds);
      localStorage.setItem('gachi_owned_chars', JSON.stringify(this.ownedChars));
      localStorage.setItem('gachi_equipped_char_idx', this.equippedCharIndex);
      localStorage.setItem('gachi_char_idx', this.equippedCharIndex);
      localStorage.setItem('gachi_equipped_blade_idx', this.equippedBladeIndex);
      localStorage.setItem('gachi_owned_blades', JSON.stringify(this.ownedBlades));
      localStorage.setItem('gachi_mult_lvl', this.multiplierLvl);
      localStorage.setItem('gachi_bg', this.selectedBg);
      localStorage.setItem('gachi_drop_color', this.dropColor);
      localStorage.setItem('gachi_bomb_color', this.bombColor);
      this.updateCurrencyDisplay();
    }

    updateCurrencyDisplay() {
      const g1 = document.getElementById('curr-gold');
      const c1 = document.getElementById('curr-cyan');
      const g2 = document.getElementById('shop-curr-gold');
      const c2 = document.getElementById('shop-curr-cyan');
      if (g1) g1.textContent = this.goldCoins;
      if (c1) c1.textContent = this.cyanDiamonds;
      if (g2) g2.textContent = this.goldCoins;
      if (c2) c2.textContent = this.cyanDiamonds;
    }

    renderCharacterCard() {
      const isBlades = (this.armoryMode === 'BLADES');
      const btnArmoryChars = document.getElementById('btn-armory-chars');
      const btnArmoryBlades = document.getElementById('btn-armory-blades');
      if (btnArmoryChars) btnArmoryChars.classList.toggle('active', !isBlades);
      if (btnArmoryBlades) btnArmoryBlades.classList.toggle('active', isBlades);

      const nameEl = document.getElementById('card-char-name');
      const multEl = document.getElementById('card-char-mult');
      const photoEl = document.getElementById('card-char-photo');
      const bladePreviewEl = document.getElementById('card-blade-preview');
      const statusEl = document.getElementById('card-char-status');
      const priceValEl = document.getElementById('card-char-price-val');
      const basketBtn = document.getElementById('btn-char-basket');

      if (multEl) multEl.textContent = `X${this.multiplierLvl}`;

      if (!isBlades) {
        if (multEl) {
          multEl.classList.remove('hidden');
          multEl.textContent = `X${this.multiplierLvl}`;
        }
        // FIGHTERS / CHARACTERS ARMORY
        if (photoEl) photoEl.classList.remove('hidden');
        if (bladePreviewEl) bladePreviewEl.classList.add('hidden');

        const char = CHARACTERS[this.selectedCharIndex] || CHARACTERS[0];
        if (nameEl) nameEl.textContent = char.name;
        if (photoEl) photoEl.src = `assets/sprites/${char.photo}.png`;
        if (priceValEl) priceValEl.textContent = char.price;

        const isOwned = this.ownedChars.includes(char.id) || char.price === 0;
        const isEquipped = this.selectedCharIndex === this.equippedCharIndex;

        if (statusEl) {
          statusEl.className = 'card-char-status-badge';
          if (!isOwned) {
            statusEl.textContent = `BUY: ${char.price} COINS`;
            statusEl.classList.add('locked');
          } else if (isEquipped) {
            statusEl.textContent = 'EQUIPPED';
            statusEl.classList.add('equipped');
          } else {
            statusEl.textContent = 'UNLOCKED (CLICK TO EQUIP)';
          }
        }

        if (basketBtn) {
          basketBtn.title = !isOwned ? `Buy ${char.name} for ${char.price} Coins` : (isEquipped ? 'Currently Equipped' : 'Equip Character');
        }
      } else {
        // NINJA MARTIAL BLADE ARMORY (Realistic Steel & Gym Forged Iron)
        if (multEl) multEl.classList.add('hidden');
        if (photoEl) photoEl.classList.add('hidden');
        if (bladePreviewEl) bladePreviewEl.classList.remove('hidden');

        const blade = this.ninjaBlades[this.selectedBladeIndex] || this.ninjaBlades[0];
        if (nameEl) nameEl.textContent = blade.name;
        if (priceValEl) priceValEl.textContent = blade.price;

        // Dynamic styling of Katana SVG: authentic metallic finishes (no neon cyberpunk)
        const stopMid = document.getElementById('blade-stop-mid');
        const stopBack = document.getElementById('blade-stop-back');
        const stopEdge = document.getElementById('blade-stop-edge');
        if (stopMid) stopMid.setAttribute('stop-color', blade.bladeColor);
        if (stopBack) stopBack.setAttribute('stop-color', blade.accentColor || '#7a8291');
        if (stopEdge) stopEdge.setAttribute('stop-color', blade.edgeColor || '#ffffff');

        const bladePath = document.getElementById('blade-path');
        if (bladePath) bladePath.setAttribute('stroke', blade.accentColor || '#667080');

        const bladeTsuba = document.getElementById('blade-tsuba');
        if (bladeTsuba) bladeTsuba.setAttribute('fill', blade.tsubaColor || '#1b1d22');

        const bladeHabaki = document.getElementById('blade-habaki');
        if (bladeHabaki) bladeHabaki.setAttribute('fill', blade.habakiColor || '#e6b845');

        ['blade-wrap-1', 'blade-wrap-2', 'blade-wrap-3', 'blade-wrap-4'].forEach(id => {
          const wrap = document.getElementById(id);
          if (wrap) wrap.setAttribute('fill', blade.accentColor || '#fde82d');
        });

        const descBadge = document.getElementById('blade-desc-badge');
        if (descBadge) {
          descBadge.textContent = blade.desc;
          descBadge.style.borderColor = 'rgba(255, 255, 255, 0.25)';
          descBadge.style.color = '#cbd5e1';
        }

        const perkBadge = document.getElementById('blade-perk-badge');
        if (perkBadge) {
          perkBadge.textContent = `PERK: ${blade.perkName} (${blade.perkDesc.toUpperCase()})`;
          perkBadge.style.borderColor = blade.particleColor || 'rgba(255, 230, 0, 0.5)';
          perkBadge.style.color = blade.particleColor || '#ffe600';
        }

        const bladeSvg = document.getElementById('blade-svg');
        if (bladeSvg) {
          bladeSvg.style.filter = `drop-shadow(0 8px 18px rgba(0, 0, 0, 0.85)) drop-shadow(0 0 10px ${blade.trailGlow || 'rgba(255,255,255,0.2)'})`;
        }

        const isOwned = this.ownedBlades.includes(blade.id) || blade.price === 0;
        const isEquipped = this.selectedBladeIndex === this.equippedBladeIndex;

        if (statusEl) {
          statusEl.className = 'card-char-status-badge';
          if (!isOwned) {
            statusEl.textContent = `BUY: ${blade.price} COINS`;
            statusEl.classList.add('locked');
          } else if (isEquipped) {
            statusEl.textContent = 'EQUIPPED';
            statusEl.classList.add('equipped');
          } else {
            statusEl.textContent = 'UNLOCKED (CLICK TO EQUIP)';
          }
        }

        if (basketBtn) {
          basketBtn.title = !isOwned ? `Buy ${blade.name} for ${blade.price} Coins` : (isEquipped ? 'Currently Equipped' : 'Equip Blade');
        }
      }
    }

    updateEffectsPreview() {
      const previewItems = ['supp_trenbolone', 'supp_creatine', 'supp_protein', 'supp_gainer'];
      const itemKey = previewItems[this.previewItemIndex || 0];
      const previewImg = document.getElementById('effects-item-preview');
      if (previewImg) {
        previewImg.src = `assets/sprites/${itemKey}.png`;
        previewImg.style.filter = `drop-shadow(0 0 12px ${this.dropColor}) drop-shadow(0 4px 12px rgba(0,0,0,0.8))`;
      }
    }

    setupDOM() {
      // Main Menu buttons (Screenshot 1)
      document.getElementById('btn-main-play').onclick = () => this.startGame();
      document.getElementById('btn-open-shop').onclick = () => this.openShopScreen();
      document.getElementById('btn-open-settings').onclick = () => this.openSettingsModal();
      document.getElementById('btn-open-leaderboard').onclick = () => this.openLeaderboardModal();

      // Main Menu Game Mode Switcher: Classic Catch vs Gachi Ninja
      const btnModeClassic = document.getElementById('btn-mode-classic');
      const btnModeNinja = document.getElementById('btn-mode-ninja');
      const settingsModeSelect = document.getElementById('settings-mode-select');

      const setGameMode = (m) => {
        this.mode = m;
        if (m === 'CLASSIC') {
          btnModeClassic?.classList.add('active');
          btnModeNinja?.classList.remove('active');
        } else {
          btnModeNinja?.classList.add('active');
          btnModeClassic?.classList.remove('active');
        }
        if (settingsModeSelect) settingsModeSelect.value = m;
        this.audio.playSfx('click');
      };

      if (btnModeClassic) btnModeClassic.onclick = () => setGameMode('CLASSIC');
      if (btnModeNinja) btnModeNinja.onclick = () => setGameMode('NINJA');
      if (settingsModeSelect) settingsModeSelect.onchange = (e) => setGameMode(e.target.value);

      // Back buttons across all shop tabs (Authentic GDevelop StartButton4)
      const backAction = () => this.openMainMenu();
      ['btn-shop-back', 'btn-char-back', 'btn-cases-back', 'btn-gallery-back', 'btn-effects-back'].forEach(id => {
        const btn = document.getElementById(id);
        if (btn) btn.onclick = backAction;
      });

      // Character Card Screen buttons
      document.getElementById('btn-char-prev').onclick = () => this.cycleCharacter(-1);
      document.getElementById('btn-char-next').onclick = () => this.cycleCharacter(1);

      const basketBtn = document.getElementById('btn-char-basket');
      if (basketBtn) basketBtn.onclick = () => this.handleBasketClick();

      const statusBadge = document.getElementById('card-char-status');
      if (statusBadge) statusBadge.onclick = () => this.handleBasketClick();

      const charPhoto = document.getElementById('card-char-photo');
      if (charPhoto) charPhoto.onclick = () => this.handleBasketClick();

      const bladePreview = document.getElementById('card-blade-preview');
      if (bladePreview) bladePreview.onclick = () => this.handleBasketClick();

      // Multiplier pill opens upgrade modal
      const multPill = document.getElementById('card-char-mult');
      if (multPill) multPill.onclick = () => this.openUpgradeModal();

      // Shop Bottom 4 Yellow Toolbar buttons
      document.getElementById('btn-tool-upgrade').onclick = () => this.switchShopTab('character');
      document.getElementById('btn-tool-crate').onclick = () => this.switchShopTab('cases');
      document.getElementById('btn-tool-gallery').onclick = () => this.switchShopTab('gallery');
      document.getElementById('btn-tool-drop').onclick = () => this.switchShopTab('drops');

      // Mystery Crate Open button
      const openCrateBtn = document.getElementById('btn-open-crate');
      if (openCrateBtn) openCrateBtn.onclick = () => this.openMysteryCrate();

      // Arena Selector (13 Backgrounds)
      document.querySelectorAll('.arena-picker-grid .arena-item').forEach(item => {
        item.classList.toggle('active', item.dataset.bg === this.selectedBg);
        item.onclick = () => {
          document.querySelectorAll('.arena-picker-grid .arena-item').forEach(i => i.classList.remove('active'));
          item.classList.add('active');
          this.selectedBg = item.dataset.bg;
          localStorage.setItem('gachi_bg', this.selectedBg);
          this.audio.playSfx('click');
        };
      });
      const equipArenaBtn = document.getElementById('btn-equip-arena');
      if (equipArenaBtn) {
        equipArenaBtn.onclick = () => {
          localStorage.setItem('gachi_bg', this.selectedBg);
          this.audio.playSfx('woo');
        };
      }

      // Effects Palette & Controls (1:1 with media_1790607375096.png)
      document.querySelectorAll('#drop-palette .color-tile').forEach(tile => {
        tile.classList.toggle('active', tile.dataset.color.toLowerCase() === (this.dropColor || '#ffffff').toLowerCase());
        tile.onclick = () => {
          this.dropColor = tile.dataset.color;
          document.querySelectorAll('#drop-palette .color-tile').forEach(t => t.classList.toggle('active', t === tile));
          this.updateEffectsPreview();
          this.saveEconomy();
          this.audio.playSfx('click');
        };
      });

      document.querySelectorAll('#bomb-palette .color-tile').forEach(tile => {
        tile.classList.toggle('active', tile.dataset.color.toLowerCase() === (this.bombColor || '#ff0000').toLowerCase());
        tile.onclick = () => {
          this.bombColor = tile.dataset.color;
          document.querySelectorAll('#bomb-palette .color-tile').forEach(t => t.classList.toggle('active', t === tile));
          this.saveEconomy();
          this.audio.playSfx('click');
        };
      });

      const previewItems = ['supp_trenbolone', 'supp_creatine', 'supp_protein', 'supp_gainer'];
      const btnEffPrev = document.getElementById('btn-effects-prev');
      if (btnEffPrev) {
        btnEffPrev.onclick = () => {
          this.previewItemIndex = (this.previewItemIndex - 1 + previewItems.length) % previewItems.length;
          this.updateEffectsPreview();
          this.audio.playSfx('click');
        };
      }
      const btnEffNext = document.getElementById('btn-effects-next');
      if (btnEffNext) {
        btnEffNext.onclick = () => {
          this.previewItemIndex = (this.previewItemIndex + 1) % previewItems.length;
          this.updateEffectsPreview();
          this.audio.playSfx('click');
        };
      }
      const btnEffSave = document.getElementById('btn-effects-save');
      if (btnEffSave) {
        btnEffSave.onclick = () => {
          this.saveEconomy();
          this.audio.playSfx('amazing');
        };
      }

      // Armory Mode Sub-Tabs (Fighters vs Ninja Blades)
      const btnArmoryChars = document.getElementById('btn-armory-chars');
      const btnArmoryBlades = document.getElementById('btn-armory-blades');
      if (btnArmoryChars) {
        btnArmoryChars.onclick = () => {
          this.armoryMode = 'CHARS';
          this.renderCharacterCard();
          this.audio.playSfx('click');
        };
      }
      if (btnArmoryBlades) {
        btnArmoryBlades.onclick = () => {
          this.armoryMode = 'BLADES';
          this.renderCharacterCard();
          this.audio.playSfx('click');
        };
      }

      // Multiplier Upgrade Modal buttons
      const doUpgradeBtn = document.getElementById('btn-do-upgrade');
      if (doUpgradeBtn) doUpgradeBtn.onclick = () => this.doUpgradeMultiplier();
      const closeUpgradeBtn = document.getElementById('btn-close-upgrade');
      if (closeUpgradeBtn) closeUpgradeBtn.onclick = () => this.closeUpgradeModal();

      // In-Game HUD buttons (Screenshot 3)
      document.getElementById('btn-hud-pause').onclick = () => this.pauseGame();

      // Pause Menu buttons
      document.getElementById('btn-pause-resume').onclick = () => this.resumeGame();
      document.getElementById('btn-pause-restart').onclick = () => this.restartGame();
      document.getElementById('btn-pause-menu').onclick = () => this.openMainMenu();

      // Game Over buttons
      document.getElementById('btn-gameover-replay').onclick = () => this.restartGame();
      document.getElementById('btn-gameover-board').onclick = () => this.openLeaderboardModal();
      document.getElementById('btn-gameover-menu').onclick = () => this.openMainMenu();
      document.getElementById('btn-submit-score').onclick = () => this.submitScore();

      // Leaderboard modal close
      document.getElementById('btn-close-board').onclick = () => this.closeLeaderboardModal();

      // Fullscreen buttons
      const btnToggleFs = document.getElementById('btn-toggle-fs');
      if (btnToggleFs) btnToggleFs.onclick = () => this.toggleFullscreen();
      const btnSettingsFs = document.getElementById('btn-settings-fs');
      if (btnSettingsFs) btnSettingsFs.onclick = () => this.toggleFullscreen();

      // Settings modal
      document.getElementById('btn-close-settings').onclick = () => this.closeSettingsModal();
      document.getElementById('btn-save-settings').onclick = () => this.closeSettingsModal();

      // Settings inputs
      document.getElementById('settings-music').oninput = e => {
        this.audio.setMusicVolume(Number(e.target.value));
      };
      document.getElementById('settings-sfx').oninput = e => {
        this.audio.setSfxVolume(Number(e.target.value));
      };
      document.getElementById('settings-mode-select').onchange = e => {
        this.mode = e.target.value;
      };
      document.getElementById('settings-bg-select').onchange = e => {
        this.selectedBg = e.target.value;
        localStorage.setItem('gachi_bg', this.selectedBg);
      };
    }

    handleBasketClick() {
      const statusEl = document.getElementById('card-char-status');

      if (this.armoryMode === 'CHARS') {
        const char = CHARACTERS[this.selectedCharIndex] || CHARACTERS[0];
        const isOwned = this.ownedChars.includes(char.id) || char.price === 0;

        if (!isOwned) {
          if (this.goldCoins >= char.price) {
            this.goldCoins -= char.price;
            this.ownedChars.push(char.id);
            this.equippedCharIndex = this.selectedCharIndex;
            this.saveEconomy();
            this.renderCharacterCard();
            this.audio.playSfx('amazing');
          } else {
            this.audio.playSfx('ne_nado');
            if (statusEl) {
              statusEl.textContent = `NEED ${char.price - this.goldCoins} MORE COINS!`;
              statusEl.classList.add('locked');
              setTimeout(() => this.renderCharacterCard(), 1400);
            }
          }
        } else {
          this.equippedCharIndex = this.selectedCharIndex;
          this.saveEconomy();
          this.renderCharacterCard();
          this.audio.playSfx('woo');
        }
      } else {
        // Ninja Martial Blade Armory Buy / Equip
        const blade = this.ninjaBlades[this.selectedBladeIndex] || this.ninjaBlades[0];
        const isOwned = this.ownedBlades.includes(blade.id) || blade.price === 0;

        if (!isOwned) {
          if (this.goldCoins >= blade.price) {
            this.goldCoins -= blade.price;
            this.ownedBlades.push(blade.id);
            this.equippedBladeIndex = this.selectedBladeIndex;
            this.saveEconomy();
            this.renderCharacterCard();
            this.audio.playSfx('amazing');
          } else {
            this.audio.playSfx('ne_nado');
            if (statusEl) {
              statusEl.textContent = `NEED ${blade.price - this.goldCoins} MORE COINS!`;
              statusEl.classList.add('locked');
              setTimeout(() => this.renderCharacterCard(), 1400);
            }
          }
        } else {
          this.equippedBladeIndex = this.selectedBladeIndex;
          this.saveEconomy();
          this.renderCharacterCard();
          this.audio.playSfx('woo');
        }
      }
    }

    switchShopTab(tab) {
      this.activeShopTab = tab;
      const tabs = ['character', 'cases', 'gallery', 'drops'];
      tabs.forEach(t => {
        const view = document.getElementById(`tab-view-${t}`);
        if (view) view.classList.toggle('hidden', t !== tab);
      });

      document.getElementById('btn-tool-upgrade').classList.toggle('active', tab === 'character');
      document.getElementById('btn-tool-crate').classList.toggle('active', tab === 'cases');
      document.getElementById('btn-tool-gallery').classList.toggle('active', tab === 'gallery');
      document.getElementById('btn-tool-drop').classList.toggle('active', tab === 'drops');

      this.audio.playSfx('click');
    }

    openMysteryCrate() {
      if (this.goldCoins < 100) {
        this.audio.playSfx('ne_nado');
        const banner = document.getElementById('case-reward-display');
        if (banner) {
          banner.textContent = 'NOT ENOUGH COINS! (COSTS 100 COINS)';
          banner.style.color = '#ff3355';
        }
        return;
      }

      this.goldCoins -= 100;
      this.saveEconomy();
      this.audio.playSfx('woo');

      const boxWrap = document.querySelector('.case-box-wrap');
      if (boxWrap) boxWrap.classList.add('opening');

      const banner = document.getElementById('case-reward-display');
      if (banner) {
        banner.textContent = 'OPENING CRATE...';
        banner.style.color = '#ffe600';
      }

      setTimeout(() => {
        if (boxWrap) boxWrap.classList.remove('opening');

        const roll = Math.random();
        // Authentic balanced casino odds:
        // 45% Loss (20-50 coins), 30% Modest (75-125 coins), 18% Diamonds (3-10 diamonds), 7% Rare Jackpot
        if (roll < 0.45) {
          const win = 20 + Math.floor(Math.random() * 31);
          this.goldCoins += win;
          this.audio.playSfx('click');
          this.particles.createBurst(this.canvasWidth / 2, 450, '#ffe600', 16);
          if (banner) {
            banner.textContent = `UNLUCKY... RETRIEVED ${win} COINS`;
            banner.style.color = '#ff9966';
          }
        } else if (roll < 0.75) {
          const win = 75 + Math.floor(Math.random() * 51);
          this.goldCoins += win;
          this.audio.playSfx('amazing');
          this.particles.createBurst(this.canvasWidth / 2, 450, '#ffe600', 25);
          if (banner) {
            banner.textContent = `NICE! +${win} GOLD COINS!`;
            banner.style.color = '#ffe600';
          }
        } else if (roll < 0.93) {
          const win = 3 + Math.floor(Math.random() * 8);
          this.cyanDiamonds += win;
          this.audio.playSfx('amazing');
          this.particles.createBurst(this.canvasWidth / 2, 450, '#00e5ff', 30);
          if (banner) {
            banner.textContent = `RARE DROP! +${win} CYAN DIAMONDS!`;
            banner.style.color = '#00e5ff';
          }
        } else {
          // 7% Rare Jackpot
          const lockedChars = CHARACTERS.filter(c => !this.ownedChars.includes(c.id));
          const lockedBlades = this.ninjaBlades.filter(b => !this.ownedBlades.includes(b.id) && b.price > 0);

          if (lockedChars.length > 0 && Math.random() < 0.6) {
            const wonChar = lockedChars[Math.floor(Math.random() * lockedChars.length)];
            this.ownedChars.push(wonChar.id);
            this.audio.playSfx('amazing');
            this.particles.createBurst(this.canvasWidth / 2, 450, '#b4f53c', 45);
            if (banner) {
              banner.textContent = `JACKPOT! UNLOCKED ${wonChar.name.toUpperCase()}!`;
              banner.style.color = '#b4f53c';
            }
          } else if (lockedBlades.length > 0) {
            const wonBlade = lockedBlades[Math.floor(Math.random() * lockedBlades.length)];
            this.ownedBlades.push(wonBlade.id);
            this.audio.playSfx('amazing');
            this.particles.createBurst(this.canvasWidth / 2, 450, wonBlade.edgeColor || '#ffffff', 45);
            if (banner) {
              banner.textContent = `JACKPOT! UNLOCKED ${wonBlade.name.toUpperCase()}!`;
              banner.style.color = wonBlade.edgeColor || '#ffffff';
            }
          } else {
            const win = 300;
            this.goldCoins += win;
            this.audio.playSfx('amazing');
            this.particles.createBurst(this.canvasWidth / 2, 450, '#ffe600', 40);
            if (banner) {
              banner.textContent = `JACKPOT! +${win} GOLD COINS!`;
              banner.style.color = '#ffe600';
            }
          }
        }
        this.saveEconomy();
      }, 700);
    }

    equipSelectedArena() {
      const activeEl = document.querySelector('.arena-item[data-bg].active');
      if (activeEl) {
        const bg = activeEl.getAttribute('data-bg');
        this.selectedBg = bg;
        this.saveEconomy();
        this.audio.playSfx('amazing');
      }
    }

    equipSelectedTrail() {
      const activeEl = document.querySelector('.arena-item[data-trail].active');
      if (activeEl) {
        const trail = activeEl.getAttribute('data-trail');
        this.selectedTrail = trail;
        this.saveEconomy();
        this.audio.playSfx('amazing');
      }
    }

    openUpgradeModal() {
      const modal = document.getElementById('upgrade-modal');
      const currLvlEl = document.getElementById('upgrade-curr-lvl');
      const nextLvlEl = document.getElementById('upgrade-next-lvl');
      const costEl = document.getElementById('upgrade-cost-amount');
      const msgEl = document.getElementById('upgrade-feedback-msg');

      const tier = MULTIPLIER_UPGRADES[this.multiplierLvl];
      if (currLvlEl) currLvlEl.textContent = `X${this.multiplierLvl}`;
      if (nextLvlEl) nextLvlEl.textContent = tier ? `X${tier.next}` : 'MAX';
      if (costEl) costEl.textContent = tier ? tier.cost : 'MAX';
      if (msgEl) msgEl.textContent = '';

      if (modal) modal.classList.remove('hidden');
      this.audio.playSfx('click');
    }

    closeUpgradeModal() {
      const modal = document.getElementById('upgrade-modal');
      if (modal) modal.classList.add('hidden');
    }

    doUpgradeMultiplier() {
      const tier = MULTIPLIER_UPGRADES[this.multiplierLvl];
      const msgEl = document.getElementById('upgrade-feedback-msg');

      if (!tier) {
        if (msgEl) {
          msgEl.textContent = 'ALREADY AT MAX MULTIPLIER!';
          msgEl.style.color = '#ff3355';
        }
        return;
      }

      if (this.cyanDiamonds >= tier.cost) {
        this.cyanDiamonds -= tier.cost;
        this.multiplierLvl = tier.next;
        this.saveEconomy();
        this.renderCharacterCard();
        this.openUpgradeModal();
        this.audio.playSfx('amazing');
        if (msgEl) {
          msgEl.textContent = `UPGRADED TO X${this.multiplierLvl}!`;
          msgEl.style.color = '#00ff88';
        }
      } else {
        this.audio.playSfx('ne_nado');
        if (msgEl) {
          msgEl.textContent = `NEED ${tier.cost - this.cyanDiamonds} MORE DIAMONDS!`;
          msgEl.style.color = '#ff3355';
        }
      }
    }

    setupInput() {
      window.addEventListener('keydown', e => {
        this.keys[e.code] = true;
        if (e.code === 'KeyP' || e.code === 'Escape') {
          if (this.state === 'PLAYING') this.pauseGame();
          else if (this.state === 'PAUSED') this.resumeGame();
        }
        if ((e.code === 'KeyF' || e.code === 'F11') && !e.ctrlKey && !e.metaKey && e.target.tagName !== 'INPUT') {
          e.preventDefault();
          this.toggleFullscreen();
        }
      });

      window.addEventListener('keyup', e => {
        this.keys[e.code] = false;
      });

      // Global first interaction unlocks AudioContext and starts Gachi Radio stream
      const onFirstInteraction = () => {
        this.audio.unlock();
        this.audio.startBgm();
        window.removeEventListener('pointerdown', onFirstInteraction);
        window.removeEventListener('keydown', onFirstInteraction);
      };
      window.addEventListener('pointerdown', onFirstInteraction);
      window.addEventListener('keydown', onFirstInteraction);

      const getPos = e => {
        const rect = this.canvas.getBoundingClientRect();
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;
        const scaleX = this.canvas.width / rect.width;
        const scaleY = this.canvas.height / rect.height;
        return {
          x: (clientX - rect.left) * scaleX,
          y: (clientY - rect.top) * scaleY
        };
      };

      const onPointerDown = e => {
        this.audio.unlock();
        this.audio.ensureBgmPlaying();
        if (this.state !== 'PLAYING') return;
        this.isSwiping = true;
        this.currentSwipeCutCount = 0;
        const pos = getPos(e);
        this.pointerPoints = [{ x: pos.x, y: pos.y, time: performance.now() }];

        if (this.mode === 'CLASSIC') {
          this.player.targetX = Math.max(this.arenaLeft, Math.min(this.arenaRight - this.player.w, pos.x - this.player.w / 2));
        }
      };

      const onPointerMove = e => {
        if (this.state !== 'PLAYING') return;
        const pos = getPos(e);

        if (this.mode === 'CLASSIC') {
          this.player.targetX = Math.max(this.arenaLeft, Math.min(this.arenaRight - this.player.w, pos.x - this.player.w / 2));
        } else if (this.mode === 'NINJA') {
          if (this.isSwiping) {
            const now = performance.now();
            this.pointerPoints.push({ x: pos.x, y: pos.y, time: now });
            // Retain recent trailing points for smooth Katana blade interpolation
            this.pointerPoints = this.pointerPoints.filter(pt => now - pt.time < 160);
            this.checkNinjaSwipeCollisions();
          }
        }
      };

      const onPointerUp = () => {
        if (this.mode === 'NINJA' && this.isSwiping) {
          this.checkNinjaCombo();
        }
        this.isSwiping = false;
        this.pointerPoints = [];
      };

      this.canvas.addEventListener('mousedown', onPointerDown);
      window.addEventListener('mousemove', onPointerMove);
      window.addEventListener('mouseup', onPointerUp);

      this.canvas.addEventListener('touchstart', onPointerDown, { passive: false });
      window.addEventListener('touchmove', onPointerMove, { passive: false });
      window.addEventListener('touchend', onPointerUp, { passive: false });
    }

    cycleCharacter(dir) {
      if (this.armoryMode === 'CHARS') {
        this.selectedCharIndex = (this.selectedCharIndex + dir + CHARACTERS.length) % CHARACTERS.length;
      } else {
        this.selectedBladeIndex = (this.selectedBladeIndex + dir + this.ninjaBlades.length) % this.ninjaBlades.length;
      }
      this.renderCharacterCard();
      this.audio.playSfx('click');
    }

    // ============================================================
    // SCREEN STATE CONTROLLERS
    // ============================================================
    openMainMenu() {
      this.state = 'MENU';
      this.shakeDuration = 0;
      this.shakeIntensity = 0;
      this.particles.particles = [];
      this.particles.floatingTexts = [];
      document.getElementById('menu-overlay').classList.remove('hidden');
      document.getElementById('shop-overlay').classList.add('hidden');
      document.getElementById('pause-overlay').classList.add('hidden');
      document.getElementById('gameover-overlay').classList.add('hidden');
      document.getElementById('hud').classList.add('hidden');
      this.audio.ensureBgmPlaying();
    }

    openShopScreen() {
      this.state = 'SHOP';
      this.shakeDuration = 0;
      this.shakeIntensity = 0;
      this.particles.particles = [];
      this.particles.floatingTexts = [];
      // Change store armory mode based on active game mode
      this.armoryMode = (this.mode === 'NINJA') ? 'BLADES' : 'CHARS';
      this.renderCharacterCard();
      this.updateEffectsPreview();
      document.getElementById('shop-overlay').classList.remove('hidden');
      document.getElementById('menu-overlay').classList.add('hidden');
      document.getElementById('hud').classList.add('hidden');
      this.audio.ensureBgmPlaying();
      this.audio.playSfx('click');
    }

    startGame() {
      this.score = 0;
      this.lives = 3;
      this.ninjaStrikes = 0;
      this.ninjaWaveTimer = 0;
      this.ninjaNextWaveDelay = 0.8;
      this.currentSwipeCutCount = 0;
      this.isSwiping = false;
      this.pointerPoints = [];
      this.screenFlash = 0;
      this.slashFlashes = [];
      this.combo = 0;
      this.items = [];
      this.splitPieces = [];
      this.shakeDuration = 0;
      this.shakeIntensity = 0;

      // EXACT 1:1 GDEVELOP INITIAL SPEED & ACCELERATION
      this.gameSpeed = 100; // 100 px/sec base
      this.elapsedGameTime = 0;
      this.supplementTimer = 0;
      this.shieldTimer = 0;
      this.bombTimer = 0;
      this.lastDifficultyTier = 0;
      this.player.maxSpeed = 750;

      if (this.mode === 'CLASSIC') {
        this.player.x = this.arenaLeft + (this.arenaWidth - this.player.w) / 2;
        this.player.targetX = this.player.x;
        this.player.invincibleTime = 0;
        this.player.visible = true;
      } else {
        this.player.visible = false;
      }

      // Update HUD multiplier with global multiplier level
      document.getElementById('hud-mult').textContent = `x${this.multiplierLvl}`;

      document.getElementById('menu-overlay').classList.add('hidden');
      document.getElementById('shop-overlay').classList.add('hidden');
      document.getElementById('pause-overlay').classList.add('hidden');
      document.getElementById('gameover-overlay').classList.add('hidden');
      document.getElementById('hud').classList.remove('hidden');

      this.bombShieldUsed = false;
      this.earnedCoinsThisRun = 0;

      this.updateHud();
      this.state = 'PLAYING';

      if (this.mode === 'NINJA') {
        const blade = this.ninjaBlades[this.equippedBladeIndex] || this.ninjaBlades[0];
        this.particles.addFloatingText(this.canvasWidth / 2, this.canvasHeight * 0.42, blade.name.toUpperCase(), blade.particleColor || '#ffe600', 36);
        this.particles.addFloatingText(this.canvasWidth / 2, this.canvasHeight * 0.42 + 45, `PERK: ${blade.perkDesc.toUpperCase()}`, '#ffffff', 22);
      }

      this.audio.ensureBgmPlaying();
      this.audio.playSfx('click');
    }

    pauseGame() {
      if (this.state !== 'PLAYING') return;
      this.state = 'PAUSED';
      this.shakeDuration = 0;
      this.shakeIntensity = 0;
      document.getElementById('pause-score-display').textContent = this.score;
      document.getElementById('pause-overlay').classList.remove('hidden');
      // Live radio stream continues smoothly in background without disconnecting
    }

    resumeGame() {
      if (this.state !== 'PAUSED') return;
      this.state = 'PLAYING';
      document.getElementById('pause-overlay').classList.add('hidden');
      this.audio.ensureBgmPlaying();
    }

    restartGame() {
      this.startGame();
    }

    triggerGameOver() {
      this.state = 'GAMEOVER';
      this.shakeDuration = 0;
      this.shakeIntensity = 0;
      this.audio.playSfx('explosion');
      this.audio.playSfx('amazing');
      this.audio.ensureBgmPlaying();

      const char = CHARACTERS[this.equippedCharIndex] || CHARACTERS[0];
      const avatarImg = document.getElementById('gameover-avatar');
      if (avatarImg) avatarImg.src = `assets/sprites/${char.photo}.png`;

      const currentBest = this.antiCheat.getLocalScores().length > 0 ? this.antiCheat.getLocalScores()[0].score : 0;
      document.getElementById('final-score').textContent = this.score;
      document.getElementById('final-best').textContent = Math.max(this.score, currentBest);
      const earnedCoinsEl = document.getElementById('final-earned-coins');
      if (earnedCoinsEl) earnedCoinsEl.textContent = this.earnedCoinsThisRun;
      document.getElementById('submit-status').textContent = '';
      this.updateCurrencyDisplay();

      document.getElementById('gameover-overlay').classList.remove('hidden');
      document.getElementById('hud').classList.add('hidden');

      const name = (document.getElementById('player-name-input').value.trim() || 'ANONYMOUS');
      this.antiCheat.saveLocalScore(name, this.score, this.mode);
    }

    async submitScore() {
      const nameInput = document.getElementById('player-name-input');
      const name = nameInput.value.trim() || 'ANONYMOUS';
      localStorage.setItem('gachi_player_name', name);

      const statusEl = document.getElementById('submit-status');
      statusEl.textContent = 'Submitting to Official Leaderboard...';
      statusEl.style.color = '#ffe600';

      const res = await this.antiCheat.submitScoreToOfficial(name, this.score);
      if (res.success) {
        statusEl.textContent = '[OK] ' + res.message;
        statusEl.style.color = '#00ff88';
        this.audio.playSfx('amazing');
      } else {
        statusEl.textContent = '[X] ' + res.message;
        statusEl.style.color = '#ff3355';
      }
    }

    updateHud() {
      const scoreEl = document.getElementById('hud-score');
      if (scoreEl) scoreEl.textContent = this.score;

      const multEl = document.getElementById('hud-mult');
      if (multEl) multEl.textContent = `x${this.getCurrentMultiplier()}`;

      const heartsBox = document.getElementById('hud-hearts-box');
      const strikesBox = document.getElementById('ninja-strikes-capsule');
      const bladeBadge = document.getElementById('ninja-blade-badge');

      if (this.mode === 'CLASSIC') {
        if (heartsBox) heartsBox.classList.remove('hidden');
        if (strikesBox) strikesBox.classList.add('hidden');
        if (bladeBadge) bladeBadge.classList.add('hidden');
        for (let i = 0; i < 3; i++) {
          const hImg = document.getElementById(`heart-${i}`);
          if (hImg) {
            if (i < this.lives) {
              hImg.src = 'assets/sprites/heart_yellow.png';
              hImg.classList.remove('lost');
            } else {
              hImg.src = 'assets/sprites/heart_empty.png';
              hImg.classList.add('lost');
            }
          }
        }
      } else {
        // Ninja Mode 3-strikes indicators & Equipped Katana Badge
        if (heartsBox) heartsBox.classList.add('hidden');
        if (strikesBox) strikesBox.classList.remove('hidden');
        if (bladeBadge) {
          bladeBadge.classList.remove('hidden');
          const blade = this.ninjaBlades[this.equippedBladeIndex] || this.ninjaBlades[0];
          const titleEl = document.getElementById('hud-blade-title');
          const perkEl = document.getElementById('hud-blade-perk');
          if (titleEl) titleEl.textContent = blade.name.toUpperCase();
          if (perkEl) {
            if (blade.bombShield && this.bombShieldUsed) {
              perkEl.textContent = 'SHIELD DEPLETED';
              perkEl.style.color = '#888888';
            } else {
              perkEl.textContent = blade.perkName.toUpperCase();
              perkEl.style.color = blade.particleColor || '#ffe600';
            }
          }
          bladeBadge.style.borderColor = (blade.bombShield && this.bombShieldUsed) ? '#555555' : (blade.particleColor || '#ffe600');
        }
        for (let i = 0; i < 3; i++) {
          const sEl = document.getElementById(`strike-${i}`);
          if (sEl) {
            if (i < this.ninjaStrikes) {
              sEl.classList.add('active');
            } else {
              sEl.classList.remove('active');
            }
          }
        }
      }
    }

    shakeCamera(duration = 10, intensity = 10) {
      this.shakeDuration = duration;
      this.shakeIntensity = intensity;
    }

    // ============================================================
    // MODALS: SETTINGS & LEADERBOARD
    // ============================================================
    openLeaderboardModal() {
      const overlay = document.getElementById('leaderboard-overlay');
      const iframe = document.getElementById('leaderboard-iframe');
      if (iframe) {
        iframe.src = GDEVELOP_CONFIG.iframeUrl;
      }
      if (overlay) {
        overlay.classList.remove('hidden');
      }

      // Authentic GDevelop postMessage handler for purple (X) button inside the leaderboard
      if (this.boardMsgHandler) {
        window.removeEventListener('message', this.boardMsgHandler);
      }
      this.boardMsgHandler = e => {
        if (e.data === 'closeLeaderboardView' || e.data?.id === 'closeLeaderboardView') {
          this.closeLeaderboardModal();
        }
      };
      window.addEventListener('message', this.boardMsgHandler);
    }

    closeLeaderboardModal() {
      const overlay = document.getElementById('leaderboard-overlay');
      const iframe = document.getElementById('leaderboard-iframe');
      if (overlay) overlay.classList.add('hidden');
      if (iframe) iframe.src = '';
      if (this.boardMsgHandler) {
        window.removeEventListener('message', this.boardMsgHandler);
        this.boardMsgHandler = null;
      }
    }

    switchBoardTab(tab) {
      const tabOnline = document.getElementById('tab-online');
      const tabLocal = document.getElementById('tab-local');
      const viewOnline = document.getElementById('board-online-view');
      const viewLocal = document.getElementById('board-local-view');

      if (tab === 'online') {
        tabOnline.classList.add('active');
        tabLocal.classList.remove('active');
        viewOnline.classList.remove('hidden');
        viewLocal.classList.add('hidden');
      } else {
        tabLocal.classList.add('active');
        tabOnline.classList.remove('active');
        viewLocal.classList.remove('hidden');
        viewOnline.classList.add('hidden');

        const tbody = document.getElementById('local-board-body');
        tbody.innerHTML = '';
        const scores = this.antiCheat.getLocalScores();
        if (scores.length === 0) {
          tbody.innerHTML = '<tr><td colspan="4" style="text-align:center;padding:20px;color:#aaa;">No local records yet!</td></tr>';
        } else {
          scores.forEach((s, i) => {
            const tr = document.createElement('tr');
            tr.innerHTML = `<td>#${i + 1}</td><td><strong>${s.name}</strong></td><td style="color:#ffe600;font-weight:900;">${s.score}</td><td>${s.mode}</td>`;
            tbody.appendChild(tr);
          });
        }
      }
    }

    openSettingsModal() {
      document.getElementById('settings-bg-select').value = this.selectedBg;
      document.getElementById('settings-mode-select').value = this.mode;
      document.getElementById('settings-overlay').classList.remove('hidden');
    }

    closeSettingsModal() {
      document.getElementById('settings-overlay').classList.add('hidden');
    }

    // ============================================================
    // NINJA SWIPING & REBALANCED COMBO SYSTEM
    // ============================================================
    checkNinjaSwipeCollisions() {
      if (this.pointerPoints.length < 2) return;
      const p1 = this.pointerPoints[this.pointerPoints.length - 2];
      const p2 = this.pointerPoints[this.pointerPoints.length - 1];
      const blade = this.ninjaBlades[this.equippedBladeIndex] || this.ninjaBlades[0];

      // Spawn glowing blade sparks at knife tip using equipped blade palette (lingering gracefully)
      this.particles.particles.push({
        x: p2.x + (Math.random() - 0.5) * 8,
        y: p2.y + (Math.random() - 0.5) * 8,
        vx: (Math.random() - 0.5) * 4,
        vy: (Math.random() - 0.5) * 4 - 0.5,
        color: Math.random() < 0.6 ? (blade.particleColor || '#ffffff') : (blade.coreColor || '#ffffff'),
        radius: Math.random() * 2.5 + 2,
        alpha: 1,
        decay: 0.012,
        friction: 0.95
      });

      for (let i = this.items.length - 1; i >= 0; i--) {
        const it = this.items[i];
        // Blade Reach Perk: Cast-Iron Saber has +20px reach radius
        const reach = it.radius + (blade.reachBonus || 0);

        if (this.distToSegment(it.x, it.y, p1.x, p1.y, p2.x, p2.y) <= reach) {
          if (it.isBomb) {
            this.items.splice(i, 1);

            // Dungeon Katana Bomb Deflector Perk: deflects 1 accidental bomb hit per game!
            if (blade.bombShield && !this.bombShieldUsed) {
              this.bombShieldUsed = true;
              this.screenFlash = 0.5;
              this.particles.createBurst(it.x, it.y, '#00ff88', 35);
              this.shakeCamera(12, 8);
              this.audio.playSfx('amazing');
              this.particles.addFloatingText(it.x, it.y, 'BOMB DEFLECTED! (KATANA SHIELD)', '#00ff88', 32);
              this.updateHud();
              continue;
            }

            this.screenFlash = 1.0;
            this.particles.createExplosion(it.x, it.y);
            this.shakeCamera(24, 18);
            this.audio.playSfx('explosion');
            this.audio.playSfx('ahhhhhhh');
            this.ninjaStrikes++;
            this.updateHud();
            this.particles.addFloatingText(it.x, it.y, 'BOMB! -1 STRIKE', '#ff0055', 34);
            if (this.ninjaStrikes >= 3) {
              this.triggerGameOver();
              return;
            }
          } else if (it.isShield) {
            this.items.splice(i, 1);
            if (this.ninjaStrikes > 0) this.ninjaStrikes--;
            this.particles.createBurst(it.x, it.y, '#ffd700', 30);
            this.particles.addFloatingText(it.x, it.y, 'STRIKE HEALED!', '#ffd700', 32);
            this.audio.playSfx('amazing');
            this.updateHud();
          } else {
            const cutAngle = Math.atan2(p2.y - p1.y, p2.x - p1.x);
            this.splitItem(it, cutAngle);
            this.items.splice(i, 1);

            // Customized Blade Whoosh Audio: pitch & waveform unique to equipped blade
            this.audio.playSliceWhoosh(blade.slicePitch || 800, 0.15, blade.oscType || 'triangle');
            this.audio.playSfx('boy');
            this.currentSwipeCutCount++;

            // Transient slash streak along swipe line using equipped blade glow & colors
            this.slashFlashes.push({
              x1: p1.x, y1: p1.y,
              x2: p2.x, y2: p2.y,
              color: blade.trailStroke,
              glowColor: blade.trailGlow,
              lineWidth: (blade.trailWidth || 10) * 0.75,
              life: 1.0
            });

            const pts = it.basePoints * this.getCurrentMultiplier();
            this.score += pts;

            // Rebalanced Ninja Economy + Ceremonial Golden Katana 50% Coin Drop Perk
            const coinRate = blade.coinDropRate || 0.25;
            if (Math.random() < coinRate) {
              const coinsEarned = 1 * this.multiplierLvl;
              this.goldCoins += coinsEarned;
              this.earnedCoinsThisRun += coinsEarned;
              this.saveEconomy();
              this.particles.addFloatingText(it.x + (Math.random() - 0.5) * 16, it.y - 28, `+${coinsEarned} COIN`, '#ffe600', 26);
            }

            const burstColor = this.dropColor || it.color;
            this.particles.createBurst(it.x, it.y, burstColor, 16);
            this.particles.addFloatingText(it.x, it.y, `+${pts}`, burstColor, 32);
            this.updateHud();
          }
        }
      }
    }

    checkNinjaCombo() {
      const blade = this.ninjaBlades[this.equippedBladeIndex] || this.ninjaBlades[0];
      // Damascus Katana Perk: activates combos starting at 2 sliced items!
      const threshold = blade.comboThreshold || 3;

      if (this.currentSwipeCutCount >= threshold) {
        let bonusPts = 0;
        let bonusCoins = 0;
        let bannerText = '';

        if (this.currentSwipeCutCount === 2) {
          bonusPts = 6 * this.getCurrentMultiplier();
          bonusCoins = 1 * this.multiplierLvl;
          bannerText = '2x TWIN COMBO!';
        } else if (this.currentSwipeCutCount === 3) {
          bonusPts = 12 * this.getCurrentMultiplier();
          bonusCoins = 1 * this.multiplierLvl;
          bannerText = '3x TRIPLE COMBO!';
        } else if (this.currentSwipeCutCount === 4) {
          bonusPts = 25 * this.getCurrentMultiplier();
          bonusCoins = 2 * this.multiplierLvl;
          bannerText = '4x QUAD COMBO!';
        } else if (this.currentSwipeCutCount === 5) {
          bonusPts = 45 * this.getCurrentMultiplier();
          bonusCoins = 3 * this.multiplierLvl;
          bannerText = '5x ULTRA COMBO!';
        } else {
          bonusPts = 70 * this.getCurrentMultiplier();
          bonusCoins = 4 * this.multiplierLvl;
          bannerText = `${this.currentSwipeCutCount}x GODLIKE COMBO!`;
        }

        this.score += bonusPts;
        this.goldCoins += bonusCoins;
        this.earnedCoinsThisRun += bonusCoins;
        this.particles.createBurst(this.canvasWidth / 2, 420, blade.particleColor || '#ffd700', 35);
        this.particles.addFloatingText(this.canvasWidth / 2, 420, `${bannerText} +${bonusPts} (+${bonusCoins} COINS)`, blade.particleColor || '#ffd700', 38);
        this.audio.playSfx('amazing');
        this.saveEconomy();
        this.updateHud();
      }
      this.currentSwipeCutCount = 0;
    }

    distToSegment(px, py, x1, y1, x2, y2) {
      const l2 = (x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1);
      if (l2 === 0) return Math.hypot(px - x1, py - y1);
      let t = ((px - x1) * (x2 - x1) + (py - y1) * (y2 - y1)) / l2;
      t = Math.max(0, Math.min(1, t));
      return Math.hypot(px - (x1 + t * (x2 - x1)), py - (y1 + t * (y2 - y1)));
    }

    splitItem(item, cutAngle) {
      const norm = cutAngle + Math.PI / 2;
      const speed = 6.0;
      const img = this.images[item.sprite];
      const aspect = (img && img.naturalWidth && img.naturalHeight) ? (img.naturalWidth / img.naturalHeight) : 1.0;
      const h = item.radius * 2.1;
      const w = h * aspect;

      // Local cut angle relative to the item's orientation so the cut surface rotates with the piece
      const itemAngle = item.angle || 0;
      const localCutAngle = cutAngle - itemAngle;

      // Gentle, realistic tumbling rotation rate (radians per second, not per frame!)
      const tumbleRate = 1.3 + Math.random() * 0.7;

      // Top half (pushes outwards in -norm direction)
      this.splitPieces.push({
        img: img,
        x: item.x,
        y: item.y,
        w: w,
        h: h,
        vx: (item.vx || 0) * 0.35 - Math.cos(norm) * speed,
        vy: (item.vy || 0) * 0.35 - Math.sin(norm) * speed - 2.0,
        angle: itemAngle,
        vRot: -tumbleRate,
        half: 'top',
        localCutAngle: localCutAngle,
        alpha: 1
      });

      // Bottom half (pushes outwards in +norm direction)
      this.splitPieces.push({
        img: img,
        x: item.x,
        y: item.y,
        w: w,
        h: h,
        vx: (item.vx || 0) * 0.35 + Math.cos(norm) * speed,
        vy: (item.vy || 0) * 0.35 + Math.sin(norm) * speed - 2.0,
        angle: itemAngle,
        vRot: tumbleRate,
        half: 'bottom',
        localCutAngle: localCutAngle,
        alpha: 1
      });
    }

    // ============================================================
    // MAIN LOOP (EXACT 1:1 GDEVELOP TIMING & SPEED)
    // ============================================================
    startLoop() {
      let lastTime = performance.now();
      const loop = now => {
        const dt = Math.min((now - lastTime) / 1000, 0.1);
        lastTime = now;

        this.update(dt);
        this.render();

        requestAnimationFrame(loop);
      };
      requestAnimationFrame(loop);
    }

    pollGamepadInput(dt) {
      const gamepads = navigator.getGamepads ? navigator.getGamepads() : [];
      if (!gamepads) return;
      for (const gp of gamepads) {
        if (!gp) continue;
        const axisX = gp.axes[0] || 0;
        const dpadLeft = gp.buttons[14]?.pressed;
        const dpadRight = gp.buttons[15]?.pressed;
        const btnA = gp.buttons[0]?.pressed;
        const btnStart = gp.buttons[9]?.pressed;

        if (this.state === 'PLAYING' && this.mode === 'CLASSIC') {
          if (Math.abs(axisX) > 0.18) {
            this.player.targetX += axisX * this.player.maxSpeed * dt;
          } else if (dpadLeft) {
            this.player.targetX -= this.player.maxSpeed * dt;
          } else if (dpadRight) {
            this.player.targetX += this.player.maxSpeed * dt;
          }
          this.player.targetX = Math.max(this.arenaLeft, Math.min(this.arenaRight - this.player.w, this.player.targetX));
        }

        if (btnStart && !this.lastGamepadStart) {
          if (this.state === 'PLAYING') this.pauseGame();
          else if (this.state === 'PAUSED') this.resumeGame();
        }
        this.lastGamepadStart = btnStart;

        if (btnA && !this.lastGamepadA) {
          if (this.state === 'MENU') this.startGame();
          else if (this.state === 'GAMEOVER') this.restartGame();
          else if (this.state === 'PAUSED') this.resumeGame();
        }
        this.lastGamepadA = btnA;
      }
    }

    update(dt) {
      if (this.state !== 'PLAYING') {
        this.shakeDuration = 0;
        this.shakeIntensity = 0;
        return;
      }

      this.pollGamepadInput(dt);

      // Exact GDevelop formula: gameSpeed += 7 * dt
      this.elapsedGameTime += dt;
      this.gameSpeed += this.speedAcceleration * dt;

      if (this.shakeDuration > 0) this.shakeDuration--;

      if (this.player.invincibleTime > 0) {
        this.player.invincibleTime -= dt;
      }

      // Difficulty progression milestone notifications
      const currentTier = (this.mode === 'CLASSIC') ? this.getClassicDifficulty() : this.getNinjaDifficulty();
      if (this.lastDifficultyTier !== undefined && currentTier > this.lastDifficultyTier) {
        if (this.mode === 'CLASSIC') {
          if (currentTier === 3) {
            this.particles.addFloatingText(this.canvasWidth / 2, 380, 'TEMPO UP!', '#ffd700', 36);
          } else if (currentTier === 6) {
            this.particles.addFloatingText(this.canvasWidth / 2, 380, 'SPEED UP!', '#ff8800', 38);
          } else if (currentTier === 9) {
            this.particles.addFloatingText(this.canvasWidth / 2, 380, 'INTENSE HAZARD!', '#ff0055', 40);
          }
        } else if (this.mode === 'NINJA') {
          if (currentTier === 2) {
            this.particles.addFloatingText(this.canvasWidth / 2, 380, 'TEMPO UP!', '#ffd700', 36);
          } else if (currentTier === 4) {
            this.particles.addFloatingText(this.canvasWidth / 2, 380, 'SPEED UP!', '#ff8800', 38);
          }
        }
      }
      this.lastDifficultyTier = currentTier;

      // Player Movement (Dynamic responsive speed scaling with game speed in Classic)
      if (this.mode === 'CLASSIC') {
        this.player.maxSpeed = Math.min(1150, 750 + (this.gameSpeed - 100) * 0.28);
      }
      const moveSpeed = this.player.maxSpeed * dt;
      if (this.keys['KeyA'] || this.keys['ArrowLeft']) {
        this.player.targetX -= moveSpeed;
      }
      if (this.keys['KeyD'] || this.keys['ArrowRight']) {
        this.player.targetX += moveSpeed;
      }
      this.player.targetX = Math.max(this.arenaLeft, Math.min(this.arenaRight - this.player.w, this.player.targetX));

      const dx = this.player.targetX - this.player.x;
      if (Math.abs(dx) <= moveSpeed) {
        this.player.x = this.player.targetX;
      } else {
        this.player.x += Math.sign(dx) * moveSpeed;
      }

      // Spawning with Progressive Difficulty
      if (this.mode === 'CLASSIC') {
        const tier = this.getClassicDifficulty();

        this.supplementTimer += dt;
        const currentSupplementInterval = Math.max(0.38, 1.25 - tier * 0.06);
        if (this.supplementTimer >= currentSupplementInterval) {
          this.supplementTimer = 0;
          this.spawnClassicSupplement();
        }

        this.shieldTimer += dt;
        const currentShieldInterval = (this.score < 60) ? 35 : ((this.score < 180) ? 55 : 75);
        if (this.shieldTimer >= currentShieldInterval) {
          this.shieldTimer = 0;
          this.spawnClassicShield();
        }

        this.bombTimer += dt;
        const currentBombInterval = Math.max(0.85, 4.2 - tier * 0.25);
        if (this.bombTimer >= currentBombInterval) {
          this.bombTimer = 0;
          this.spawnClassicBomb();
        }
      } else if (this.mode === 'NINJA') {
        this.ninjaWaveTimer += dt;
        if (this.ninjaWaveTimer >= this.ninjaNextWaveDelay) {
          this.ninjaWaveTimer = 0;
          this.spawnNinjaWave();
        }
      }

      // Update Items
      for (let i = this.items.length - 1; i >= 0; i--) {
        const it = this.items[i];

        if (this.mode === 'CLASSIC') {
          // Exact GDevelop velocity: supplement at gameSpeed * dt, bomb at 1.5 * gameSpeed * dt
          it.y += it.speed * dt;
          it.angle += it.vRot * dt;

          // Catch box
          const pLeft = this.player.x + 35;
          const pRight = this.player.x + this.player.w - 35;
          const pTop = this.player.y + 20;
          const pBottom = this.player.y + this.player.h - 20;

          let isHit = false;
          if (it.isBomb) {
            // Authentic narrower bomb hitbox matching its 55x94 sprite (half-width 22, half-height 40)
            const bLeft = it.x - 22;
            const bRight = it.x + 22;
            const bTop = it.y - 38;
            const bBottom = it.y + 38;
            isHit = (bRight >= pLeft && bLeft <= pRight && bBottom >= pTop && bTop <= pBottom);
          } else {
            isHit = (it.x >= pLeft && it.x <= pRight && it.y >= pTop && it.y <= pBottom);
          }

          if (isHit) {
            this.items.splice(i, 1);

            if (it.isBomb) {
              if (this.player.invincibleTime <= 0) {
                this.particles.createExplosion(it.x, it.y);
                this.shakeCamera(16, 12);
                this.audio.playSfx('explosion');
                this.audio.playSfx('ahhhhhhh');
                this.lives--;
                this.player.invincibleTime = 0.8;
                this.updateHud();
                if (this.lives <= 0) {
                  this.triggerGameOver();
                  return;
                }
              }
            } else if (it.isShield) {
              this.lives = 3;
              this.updateHud();
              this.particles.createBurst(it.x, it.y, '#ffd700', 25);
              this.particles.addFloatingText(it.x, it.y, 'HEALED +3 HP!', '#ffd700');
              this.audio.playSfx('amazing');
            } else {
              const char = CHARACTERS[this.selectedCharIndex];
              const mult = this.getCurrentMultiplier();
              const earned = it.basePoints * mult;
              this.score += earned;

              // Earn gold coins dynamically
              const coinsEarned = 1 * this.multiplierLvl;
              this.goldCoins += coinsEarned;
              this.earnedCoinsThisRun += coinsEarned;
              this.saveEconomy();

              this.particles.createBurst(it.x, it.y, it.color, 12);
              this.particles.addFloatingText(it.x, it.y, `+${earned}`, it.color);
              this.audio.playSfx('boy');
              this.updateHud();
            }
            continue;
          }

          // Offscreen bottom check
          if (it.y > this.canvasHeight + 80) {
            this.items.splice(i, 1);
            continue;
          }

        } else if (this.mode === 'NINJA') {
          it.x += it.vx * dt * 60;
          it.y += it.vy * dt * 60;
          it.vy += 0.38 * dt * 60; // Authentic Fruit Ninja parabolic gravity
          it.angle += it.vRot * dt;

          if (it.y > this.canvasHeight + 90 && it.vy > 0) {
            this.items.splice(i, 1);
            // In Fruit Ninja, an un-sliced falling fruit costs 1 strike!
            if (!it.isBomb && !it.isShield) {
              this.ninjaStrikes++;
              this.audio.playSfx('ne_nado');
              const missX = Math.max(this.arenaLeft + 70, Math.min(this.arenaRight - 70, it.x));
              this.particles.addFloatingText(missX, this.canvasHeight - 50, 'MISS', '#ff0055', 36);
              this.updateHud();
              if (this.ninjaStrikes >= 3) {
                this.triggerGameOver();
                return;
              }
            }
          }
        }
      }

      // Update Split Pieces (normalized delta-time decay so slices linger gracefully)
      for (let i = this.splitPieces.length - 1; i >= 0; i--) {
        const sp = this.splitPieces[i];
        sp.x += sp.vx * dt * 60;
        sp.y += sp.vy * dt * 60;
        sp.vy += 0.45 * dt * 60;
        sp.angle += sp.vRot * dt;
        sp.alpha -= 0.010 * Math.min(dt * 60, 2.5);
        if (sp.alpha <= 0 || sp.y > this.canvasHeight + 100) {
          this.splitPieces.splice(i, 1);
        }
      }

      // Update Slash Flashes
      for (let i = this.slashFlashes.length - 1; i >= 0; i--) {
        const f = this.slashFlashes[i];
        f.life -= dt * 4.5;
        if (f.life <= 0) this.slashFlashes.splice(i, 1);
      }

      // Decrement Screen Flash
      if (this.screenFlash > 0) {
        this.screenFlash -= dt * 3.5;
      }

      this.particles.update(dt);
    }

    getClassicDifficulty() {
      // Progressive difficulty tier based on score and survival time
      const tier = Math.floor(this.score / 25) + Math.floor(this.elapsedGameTime / 30);
      return Math.min(15, tier);
    }

    getNinjaDifficulty() {
      // Smooth, gradual progression tuned specifically for Ninja mode combo pacing
      const tier = Math.floor(this.score / 80) + Math.floor(this.elapsedGameTime / 50);
      return Math.min(6, tier);
    }

    spawnClassicSupplement() {
      const minX = this.arenaLeft + 80;
      const maxX = this.arenaRight - 80;
      const span = Math.max(10, maxX - minX);

      const spawnOne = (yOffset = 0) => {
        const type = SUPPLEMENT_TYPES[Math.floor(Math.random() * SUPPLEMENT_TYPES.length)];
        this.items.push({
          x: minX + Math.random() * span,
          y: -90 + yOffset,
          speed: this.gameSpeed,
          radius: type.radius,
          sprite: type.sprite,
          basePoints: type.basePoints,
          color: type.color,
          isBomb: false,
          isShield: false,
          angle: Math.random() * Math.PI * 2,
          vRot: (Math.random() - 0.5) * 1.5,
          scale: 0.95 + Math.random() * 0.35
        });
      };

      spawnOne(0);
      // At higher tiers (score >= 100), occasional bonus supplement drop to reward fast movement
      const tier = this.getClassicDifficulty();
      if (tier >= 4 && Math.random() < 0.25) {
        spawnOne(-70);
      }
    }

    spawnClassicShield() {
      const minX = this.arenaLeft + 80;
      const maxX = this.arenaRight - 80;
      this.items.push({
        x: minX + Math.random() * Math.max(10, maxX - minX),
        y: -90,
        speed: this.gameSpeed,
        radius: 46,
        sprite: 'supp_shield',
        basePoints: 0,
        color: '#ffd700',
        isBomb: false,
        isShield: true,
        angle: 0,
        vRot: 0,
        scale: 1.1
      });
    }

    spawnClassicBomb() {
      const tier = this.getClassicDifficulty();
      const minX = this.arenaLeft + 80;
      const maxX = this.arenaRight - 80;
      const arenaW = Math.max(100, maxX - minX);

      const createBomb = (x, yOffset = 0) => {
        return {
          x: Math.max(this.arenaLeft + 50, Math.min(this.arenaRight - 50, x)),
          y: -90 + yOffset,
          speed: 1.5 * this.gameSpeed,
          radius: 44,
          sprite: Math.random() < 0.5 ? 'bomb' : 'bomb_skull',
          basePoints: 0,
          color: '#ff0055',
          isBomb: true,
          isShield: false,
          angle: 0,
          vRot: (Math.random() - 0.5) * 0.8,
          scale: 1.0
        };
      };

      // Determine hazard pattern based on progressive difficulty tier
      let pattern = 'single';
      const roll = Math.random();

      if (tier >= 8) {
        // High/Master tier: 45% single, 35% staggered twin, 20% pincer
        if (roll < 0.35) pattern = 'staggered_twin';
        else if (roll < 0.55) pattern = 'pincer';
      } else if (tier >= 4) {
        // Mid tier: 65% single, 25% staggered twin, 10% pincer
        if (roll < 0.25) pattern = 'staggered_twin';
        else if (roll < 0.35) pattern = 'pincer';
      } else if (tier >= 2) {
        // Early-mid tier: 80% single, 20% staggered twin
        if (roll < 0.20) pattern = 'staggered_twin';
      }

      if (pattern === 'pincer') {
        // Pincer: one bomb near left edge, one bomb near right edge, leaving middle wide open
        const leftX = this.arenaLeft + 80 + Math.random() * 60;
        const rightX = this.arenaRight - 80 - Math.random() * 60;
        this.items.push(createBomb(leftX, 0));
        this.items.push(createBomb(rightX, -35));
      } else if (pattern === 'staggered_twin') {
        // Staggered twin: 2 bombs separated horizontally with staggered Y fall
        const firstIsLeft = Math.random() < 0.5;
        const halfW = arenaW / 2;
        const x1 = firstIsLeft ? (minX + Math.random() * (halfW - 60)) : (this.arenaRight - 80 - Math.random() * (halfW - 60));
        const x2 = firstIsLeft ? (this.arenaRight - 80 - Math.random() * (halfW - 60)) : (minX + Math.random() * (halfW - 60));
        const staggerY = -75 - Math.random() * 85;
        this.items.push(createBomb(x1, 0));
        this.items.push(createBomb(x2, staggerY));
      } else {
        // Standard single bomb
        this.items.push(createBomb(minX + Math.random() * arenaW, 0));
      }
    }

    spawnNinjaWave() {
      const tier = this.getNinjaDifficulty();

      // Smooth, gradual wave delay progression:
      // Tier 0: 1.85 - 2.40s
      // Tier 1: 1.60 - 2.05s
      // Tier 2-3: 1.35 - 1.75s
      // Tier 4+: 1.15 - 1.50s
      let baseDelayMin = 1.85;
      let baseDelayRange = 0.55;
      if (tier >= 4) {
        baseDelayMin = 1.15;
        baseDelayRange = 0.35;
      } else if (tier >= 2) {
        baseDelayMin = 1.35;
        baseDelayRange = 0.40;
      } else if (tier >= 1) {
        baseDelayMin = 1.60;
        baseDelayRange = 0.45;
      }

      this.ninjaNextWaveDelay = baseDelayMin + Math.random() * baseDelayRange;

      // Volley Item Count based on Tier:
      let count = 1;
      const rCount = Math.random();
      if (tier >= 4) {
        // Late tier: 3 to 4 items (rare 5)
        count = rCount < 0.35 ? 3 : (rCount < 0.85 ? 4 : 5);
      } else if (tier >= 2) {
        // Mid tier: 2 to 4 items
        count = rCount < 0.30 ? 2 : (rCount < 0.75 ? 3 : 4);
      } else if (tier >= 1) {
        // Early tier: 2 to 3 items
        count = rCount < 0.45 ? 2 : (rCount < 0.88 ? 3 : 4);
      } else {
        // Warmup tier: 1 to 2 items (rare 3)
        count = rCount < 0.45 ? 1 : (rCount < 0.85 ? 2 : 3);
      }

      // Bomb chance scales gently:
      // Tier 0: 10% (only if count >= 2)
      // Tier 1: 18% (if count >= 2)
      // Tier 2-3: 25%
      // Tier 4+: 32%
      let bombChance = 0.10;
      if (tier >= 4) bombChance = 0.32;
      else if (tier >= 2) bombChance = 0.25;
      else if (tier >= 1) bombChance = 0.18;

      let bombCount = 0;
      if (count >= 2 && Math.random() < bombChance) {
        bombCount = 1;
      }

      // Always ensure at least 1 item is NOT a bomb
      if (bombCount >= count) {
        bombCount = count - 1;
      }

      // Pick bomb index randomly
      const bombIndex = (bombCount > 0) ? Math.floor(Math.random() * count) : -1;

      // Shield chance (heals 1 strike)
      const shieldChance = (tier >= 3) ? 0.045 : 0.06;

      const minX = this.arenaLeft + 70;
      const maxX = this.arenaRight - 70;
      const span = Math.max(100, maxX - minX);

      for (let c = 0; c < count; c++) {
        const isBomb = (c === bombIndex);
        const isShield = (!isBomb && Math.random() < shieldChance);
        const type = isBomb ? null : (isShield ? null : SUPPLEMENT_TYPES[Math.floor(Math.random() * SUPPLEMENT_TYPES.length)]);

        // Spread spawn coordinates across arena width with gentle jitter
        const segmentW = span / count;
        const spawnX = minX + segmentW * c + Math.random() * (segmentW * 0.75);
        const spawnY = this.canvasHeight + 50;

        // Generous apex height (Y: 280 to 460) giving pleasant, floaty hang-time
        const apexY = 280 + Math.random() * 180;
        const deltaY = spawnY - apexY;
        const gravity = 0.38;
        const vy = -Math.sqrt(2 * gravity * deltaY) * (0.95 + Math.random() * 0.10);

        // Inward trajectory toward arena center for satisfying combo clusters
        const centerX = this.arenaLeft + this.arenaWidth / 2;
        const drift = (Math.random() - 0.5) * (3.0 + tier * 0.3);
        const vx = ((centerX - spawnX) / (40 + Math.random() * 20)) + drift;

        let sprite = 'bomb';
        let radius = 44;
        let basePts = 0;
        let color = '#ff0055';

        if (isBomb) {
          sprite = Math.random() < 0.5 ? 'bomb' : 'bomb_skull';
          radius = 44;
          color = '#ff0055';
        } else if (isShield) {
          sprite = 'supp_shield';
          radius = 46;
          color = '#ffd700';
        } else {
          sprite = type.sprite;
          radius = type.radius;
          basePts = type.basePoints;
          color = type.color;
        }

        // Gentle spinning rotation
        const spinSpeed = 3.0 + tier * 0.35;

        this.items.push({
          x: spawnX,
          y: spawnY,
          vx: vx,
          vy: vy,
          radius: radius,
          sprite: sprite,
          basePoints: basePts,
          color: color,
          isBomb: isBomb,
          isShield: isShield,
          angle: Math.random() * Math.PI * 2,
          vRot: (Math.random() - 0.5) * spinSpeed,
          scale: 1.0
        });
      }
    }

    // ============================================================
    // RENDERING
    // ============================================================
    drawBackgroundCover(ctx, img, targetW, targetH) {
      if (!img) return;
      const imgW = img.naturalWidth || img.width;
      const imgH = img.naturalHeight || img.height;
      if (!imgW || !imgH) {
        ctx.drawImage(img, 0, 0, targetW, targetH);
        return;
      }
      const imgRatio = imgW / imgH;
      const targetRatio = targetW / targetH;
      let renderW, renderH, offsetX, offsetY;

      if (targetRatio > imgRatio) {
        renderW = targetW;
        renderH = targetW / imgRatio;
        offsetX = 0;
        offsetY = (targetH - renderH) / 2;
      } else {
        renderH = targetH;
        renderW = targetH * imgRatio;
        offsetX = (targetW - renderW) / 2;
        offsetY = 0;
      }

      ctx.drawImage(img, offsetX, offsetY, renderW, renderH);
    }

    render() {
      this.ctx.save();

      if (this.state === 'PLAYING' && this.shakeDuration > 0) {
        const dx = (Math.random() - 0.5) * this.shakeIntensity;
        const dy = (Math.random() - 0.5) * this.shakeIntensity;
        this.ctx.translate(dx, dy);
      }

      // Background (Locker room by default or any of the 13 authentic backgrounds covering full screen)
      const bgImg = this.images[this.selectedBg] || this.images.bg_12_main || this.images.bg_main;
      if (bgImg) {
        this.drawBackgroundCover(this.ctx, bgImg, this.canvasWidth, this.canvasHeight);
      } else {
        this.ctx.fillStyle = '#0a0c14';
        this.ctx.fillRect(0, 0, this.canvasWidth, this.canvasHeight);
      }

      // Render Player during gameplay or pause (Classic mode only)
      if ((this.state === 'PLAYING' || this.state === 'PAUSED') && this.mode === 'CLASSIC') {
        this.renderPlayer();
      }

      // Render Items with authentic colored glow effects (drop_color & bomb_color)
      for (const it of this.items) {
        const img = this.images[it.sprite];
        if (img) {
          this.ctx.save();
          this.ctx.translate(it.x, it.y);
          this.ctx.rotate(it.angle);

          // Authentic GDevelop glowing aura
          if (it.isBomb) {
            this.ctx.shadowColor = this.bombColor || '#ff0055';
            this.ctx.shadowBlur = 14;
          } else {
            this.ctx.shadowColor = this.dropColor || '#ffffff';
            this.ctx.shadowBlur = 12;
          }

          const s = it.scale || 1.0;
          const aspect = (img.naturalWidth && img.naturalHeight) ? (img.naturalWidth / img.naturalHeight) : 1.0;
          const h = it.radius * 2 * s;
          const w = h * aspect;
          this.ctx.drawImage(img, -w / 2, -h / 2, w, h);
          this.ctx.restore();
        }
      }

      // Render Split Pieces (Ninja mode)
      for (const sp of this.splitPieces) {
        if (!sp.img) continue;
        this.ctx.save();
        this.ctx.globalAlpha = Math.max(0, sp.alpha);
        this.ctx.translate(sp.x, sp.y);
        this.ctx.rotate(sp.angle);

        // Align with local cut line so cut surface and texture rotate as one solid object
        this.ctx.rotate(sp.localCutAngle);
        const maxDim = Math.max(sp.w, sp.h) * 2;
        this.ctx.beginPath();
        if (sp.half === 'top') {
          this.ctx.rect(-maxDim, -maxDim, maxDim * 2, maxDim);
        } else {
          this.ctx.rect(-maxDim, 0, maxDim * 2, maxDim);
        }
        this.ctx.clip();

        // Draw image in piece coordinate space
        this.ctx.rotate(-sp.localCutAngle);
        this.ctx.drawImage(sp.img, -sp.w / 2, -sp.h / 2, sp.w, sp.h);
        this.ctx.restore();
      }

      // Render Transient Slash Streak Flashes (Ninja Mode)
      for (const f of this.slashFlashes) {
        this.ctx.save();
        this.ctx.globalAlpha = Math.max(0, f.life);
        this.ctx.beginPath();
        this.ctx.moveTo(f.x1, f.y1);
        this.ctx.lineTo(f.x2, f.y2);
        this.ctx.strokeStyle = f.color || '#ffffff';
        this.ctx.lineWidth = (f.lineWidth || 7) * f.life;
        this.ctx.shadowColor = f.glowColor || '#ffffff';
        this.ctx.shadowBlur = 10;
        this.ctx.lineCap = 'round';
        this.ctx.stroke();
        this.ctx.restore();
      }

      // Render Authentic Martial Katana Blade Trail (Sharp Steel Arc)
      if (this.mode === 'NINJA' && this.pointerPoints.length >= 2) {
        const pts = this.pointerPoints;
        const n = pts.length;
        const blade = this.ninjaBlades[this.equippedBladeIndex] || this.ninjaBlades[0];
        const maxW = blade.trailWidth || 10;

        this.ctx.save();
        this.ctx.lineCap = 'round';
        this.ctx.lineJoin = 'round';

        // Outer vibrant blade glow and cutting arc
        this.ctx.shadowColor = blade.trailGlow || 'rgba(180, 200, 225, 0.4)';
        this.ctx.shadowBlur = 10;

        for (let i = 1; i < n; i++) {
          const pPrev = pts[i - 1];
          const pCurr = pts[i];
          const t = i / n;
          this.ctx.beginPath();
          this.ctx.moveTo(pPrev.x, pPrev.y);
          this.ctx.lineTo(pCurr.x, pCurr.y);
          this.ctx.strokeStyle = blade.trailStroke || 'rgba(240, 246, 255, 0.95)';
          this.ctx.globalAlpha = 0.25 + t * 0.75;
          this.ctx.lineWidth = Math.max(2, maxW * t);
          this.ctx.stroke();
        }

        // Inner razor cutting core (colored uniquely for each Katana)
        this.ctx.shadowBlur = 4;
        this.ctx.shadowColor = blade.coreColor || '#ffffff';
        for (let i = 1; i < n; i++) {
          const pPrev = pts[i - 1];
          const pCurr = pts[i];
          const t = i / n;
          this.ctx.beginPath();
          this.ctx.moveTo(pPrev.x, pPrev.y);
          this.ctx.lineTo(pCurr.x, pCurr.y);
          this.ctx.strokeStyle = blade.coreColor || '#ffffff';
          this.ctx.globalAlpha = 0.55 + t * 0.45;
          this.ctx.lineWidth = Math.max(1, (maxW * 0.42) * t);
          this.ctx.stroke();
        }
        this.ctx.restore();
      }

      // Render Particles and Floating Text (In-game / Game Over only)
      if (this.state === 'PLAYING' || this.state === 'GAMEOVER' || this.state === 'PAUSED') {
        this.particles.render(this.ctx);
      }

      // Render Screen Flash (Bomb explosion)
      if (this.screenFlash > 0) {
        this.ctx.save();
        this.ctx.fillStyle = `rgba(255, 30, 70, ${Math.min(0.45, this.screenFlash * 0.45)})`;
        this.ctx.fillRect(0, 0, this.canvasWidth, this.canvasHeight);
        this.ctx.fillStyle = `rgba(255, 255, 255, ${Math.min(0.55, this.screenFlash * 0.55)})`;
        this.ctx.fillRect(0, 0, this.canvasWidth, this.canvasHeight);
        this.ctx.restore();
      }

      this.ctx.restore();
    }

    renderPlayer() {
      const char = CHARACTERS[this.equippedCharIndex] || CHARACTERS[0];
      const playerImg = this.images[char.sprite] || this.images.player_billy;

      if (!playerImg) return;

      this.ctx.save();
      if (this.player.invincibleTime > 0) {
        const flash = Math.floor(this.player.invincibleTime * 15) % 2 === 0;
        this.ctx.globalAlpha = flash ? 0.35 : 0.85;
      }

      this.ctx.drawImage(playerImg, this.player.x, this.player.y, this.player.w, this.player.h);
      this.ctx.restore();
    }
  }

  window.addEventListener('DOMContentLoaded', () => {
    window.game = new GachiBombGame();
  });
})();
