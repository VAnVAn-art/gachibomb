gdjs.SubmitScoreCode = {};
gdjs.SubmitScoreCode.localVariables = [];
gdjs.SubmitScoreCode.idToCallbackMap = new Map();
gdjs.SubmitScoreCode.GDScoreTextObjects1= [];
gdjs.SubmitScoreCode.GDScoreTextObjects2= [];
gdjs.SubmitScoreCode.GDScoreTextObjects3= [];
gdjs.SubmitScoreCode.GDScoreTextObjects4= [];
gdjs.SubmitScoreCode.GDSubmitted_9595TextObjects1= [];
gdjs.SubmitScoreCode.GDSubmitted_9595TextObjects2= [];
gdjs.SubmitScoreCode.GDSubmitted_9595TextObjects3= [];
gdjs.SubmitScoreCode.GDSubmitted_9595TextObjects4= [];
gdjs.SubmitScoreCode.GDRestart_9595TextObjects1= [];
gdjs.SubmitScoreCode.GDRestart_9595TextObjects2= [];
gdjs.SubmitScoreCode.GDRestart_9595TextObjects3= [];
gdjs.SubmitScoreCode.GDRestart_9595TextObjects4= [];
gdjs.SubmitScoreCode.GDPlayerNameInputObjects1= [];
gdjs.SubmitScoreCode.GDPlayerNameInputObjects2= [];
gdjs.SubmitScoreCode.GDPlayerNameInputObjects3= [];
gdjs.SubmitScoreCode.GDPlayerNameInputObjects4= [];
gdjs.SubmitScoreCode.GDSubmitButtonObjects1= [];
gdjs.SubmitScoreCode.GDSubmitButtonObjects2= [];
gdjs.SubmitScoreCode.GDSubmitButtonObjects3= [];
gdjs.SubmitScoreCode.GDSubmitButtonObjects4= [];
gdjs.SubmitScoreCode.GDSubmitLoaderObjects1= [];
gdjs.SubmitScoreCode.GDSubmitLoaderObjects2= [];
gdjs.SubmitScoreCode.GDSubmitLoaderObjects3= [];
gdjs.SubmitScoreCode.GDSubmitLoaderObjects4= [];
gdjs.SubmitScoreCode.GDScoreBoxObjects1= [];
gdjs.SubmitScoreCode.GDScoreBoxObjects2= [];
gdjs.SubmitScoreCode.GDScoreBoxObjects3= [];
gdjs.SubmitScoreCode.GDScoreBoxObjects4= [];
gdjs.SubmitScoreCode.GDRestartButtonObjects1= [];
gdjs.SubmitScoreCode.GDRestartButtonObjects2= [];
gdjs.SubmitScoreCode.GDRestartButtonObjects3= [];
gdjs.SubmitScoreCode.GDRestartButtonObjects4= [];
gdjs.SubmitScoreCode.GDNewSpriteObjects1= [];
gdjs.SubmitScoreCode.GDNewSpriteObjects2= [];
gdjs.SubmitScoreCode.GDNewSpriteObjects3= [];
gdjs.SubmitScoreCode.GDNewSpriteObjects4= [];


gdjs.SubmitScoreCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("SubmitLoader"), gdjs.SubmitScoreCode.GDSubmitLoaderObjects2);
gdjs.copyArray(runtimeScene.getObjects("Submitted_Text"), gdjs.SubmitScoreCode.GDSubmitted_9595TextObjects2);
{for(var i = 0, len = gdjs.SubmitScoreCode.GDSubmitted_9595TextObjects2.length ;i < len;++i) {
    gdjs.SubmitScoreCode.GDSubmitted_9595TextObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.SubmitScoreCode.GDSubmitLoaderObjects2.length ;i < len;++i) {
    gdjs.SubmitScoreCode.GDSubmitLoaderObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.SubmitScoreCode.GDSubmitLoaderObjects2.length ;i < len;++i) {
    gdjs.SubmitScoreCode.GDSubmitLoaderObjects2[i].setScale(2);
}
}
}

}


};gdjs.SubmitScoreCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("ScoreText"), gdjs.SubmitScoreCode.GDScoreTextObjects2);
{for(var i = 0, len = gdjs.SubmitScoreCode.GDScoreTextObjects2.length ;i < len;++i) {
    gdjs.SubmitScoreCode.GDScoreTextObjects2[i].setString("Score:   " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(31))));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("GameMode")) == "Speedrun";
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ScoreText"), gdjs.SubmitScoreCode.GDScoreTextObjects1);
{for(var i = 0, len = gdjs.SubmitScoreCode.GDScoreTextObjects1.length ;i < len;++i) {
    gdjs.SubmitScoreCode.GDScoreTextObjects1[i].setString("Time:   " + gdjs.evtsExt__ExtendedMath__ToFixedString.func(runtimeScene, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("SpeedrunTime")), 2, null) + " seconds");
}
}
}

}


};gdjs.SubmitScoreCode.eventsList2 = function(runtimeScene) {

{


gdjs.SubmitScoreCode.eventsList0(runtimeScene);
}


{


gdjs.SubmitScoreCode.eventsList1(runtimeScene);
}


};gdjs.SubmitScoreCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "LeaderboardMusic.mp3", 1, true, 30, 1);
}
{gdjs.evtTools.storage.readNumberFromJSONFile("Save1", "lvl", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(31));
}

{ //Subevents
gdjs.SubmitScoreCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.SubmitScoreCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.playerAuthentication.isAuthenticated();
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PlayerNameInput"), gdjs.SubmitScoreCode.GDPlayerNameInputObjects2);
{for(var i = 0, len = gdjs.SubmitScoreCode.GDPlayerNameInputObjects2.length ;i < len;++i) {
    gdjs.SubmitScoreCode.GDPlayerNameInputObjects2[i].setText(gdjs.playerAuthentication.getUsername());
}
}
{for(var i = 0, len = gdjs.SubmitScoreCode.GDPlayerNameInputObjects2.length ;i < len;++i) {
    gdjs.SubmitScoreCode.GDPlayerNameInputObjects2[i].setDisabled(true);
}
}
{for(var i = 0, len = gdjs.SubmitScoreCode.GDPlayerNameInputObjects2.length ;i < len;++i) {
    gdjs.SubmitScoreCode.GDPlayerNameInputObjects2[i].setBorderOpacity(128);
}
}
{for(var i = 0, len = gdjs.SubmitScoreCode.GDPlayerNameInputObjects2.length ;i < len;++i) {
    gdjs.SubmitScoreCode.GDPlayerNameInputObjects2[i].setFillOpacity(128);
}
}
{for(var i = 0, len = gdjs.SubmitScoreCode.GDPlayerNameInputObjects2.length ;i < len;++i) {
    gdjs.SubmitScoreCode.GDPlayerNameInputObjects2[i].setOpacity(196);
}
}
}

}


};gdjs.SubmitScoreCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.playerAuthentication.displayAuthenticationBanner(runtimeScene);
}

{ //Subevents
gdjs.SubmitScoreCode.eventsList4(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.playerAuthentication.hasLoggedIn();
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PlayerNameInput"), gdjs.SubmitScoreCode.GDPlayerNameInputObjects2);
{for(var i = 0, len = gdjs.SubmitScoreCode.GDPlayerNameInputObjects2.length ;i < len;++i) {
    gdjs.SubmitScoreCode.GDPlayerNameInputObjects2[i].setText(gdjs.playerAuthentication.getUsername());
}
}
{for(var i = 0, len = gdjs.SubmitScoreCode.GDPlayerNameInputObjects2.length ;i < len;++i) {
    gdjs.SubmitScoreCode.GDPlayerNameInputObjects2[i].setDisabled(true);
}
}
{for(var i = 0, len = gdjs.SubmitScoreCode.GDPlayerNameInputObjects2.length ;i < len;++i) {
    gdjs.SubmitScoreCode.GDPlayerNameInputObjects2[i].setBorderOpacity(128);
}
}
{for(var i = 0, len = gdjs.SubmitScoreCode.GDPlayerNameInputObjects2.length ;i < len;++i) {
    gdjs.SubmitScoreCode.GDPlayerNameInputObjects2[i].setFillOpacity(128);
}
}
{for(var i = 0, len = gdjs.SubmitScoreCode.GDPlayerNameInputObjects2.length ;i < len;++i) {
    gdjs.SubmitScoreCode.GDPlayerNameInputObjects2[i].setOpacity(196);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.playerAuthentication.isAuthenticated());
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(28221580);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PlayerNameInput"), gdjs.SubmitScoreCode.GDPlayerNameInputObjects1);
{for(var i = 0, len = gdjs.SubmitScoreCode.GDPlayerNameInputObjects1.length ;i < len;++i) {
    gdjs.SubmitScoreCode.GDPlayerNameInputObjects1[i].setText("PlayerName");
}
}
{for(var i = 0, len = gdjs.SubmitScoreCode.GDPlayerNameInputObjects1.length ;i < len;++i) {
    gdjs.SubmitScoreCode.GDPlayerNameInputObjects1[i].setDisabled(false);
}
}
{for(var i = 0, len = gdjs.SubmitScoreCode.GDPlayerNameInputObjects1.length ;i < len;++i) {
    gdjs.SubmitScoreCode.GDPlayerNameInputObjects1[i].setBorderOpacity(255);
}
}
{for(var i = 0, len = gdjs.SubmitScoreCode.GDPlayerNameInputObjects1.length ;i < len;++i) {
    gdjs.SubmitScoreCode.GDPlayerNameInputObjects1[i].setFillOpacity(255);
}
}
{for(var i = 0, len = gdjs.SubmitScoreCode.GDPlayerNameInputObjects1.length ;i < len;++i) {
    gdjs.SubmitScoreCode.GDPlayerNameInputObjects1[i].setOpacity(255);
}
}
}

}


};gdjs.SubmitScoreCode.mapOfGDgdjs_9546SubmitScoreCode_9546GDSubmitButtonObjects1Objects = Hashtable.newFrom({"SubmitButton": gdjs.SubmitScoreCode.GDSubmitButtonObjects1});
gdjs.SubmitScoreCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.storage.writeNumberInJSONFile("Save1", "true_account", runtimeScene.getGame().getVariables().getFromIndex(49).getAsNumber());
}
}

}


};gdjs.SubmitScoreCode.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{runtimeScene.getGame().getVariables().getFromIndex(49).setBoolean(true);
}

{ //Subevents
gdjs.SubmitScoreCode.eventsList6(runtimeScene);} //End of subevents
}

}


};gdjs.SubmitScoreCode.eventsList8 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("SubmitButton"), gdjs.SubmitScoreCode.GDSubmitButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SubmitScoreCode.GDSubmitButtonObjects1.length;i<l;++i) {
    if ( gdjs.SubmitScoreCode.GDSubmitButtonObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.SubmitScoreCode.GDSubmitButtonObjects1[k] = gdjs.SubmitScoreCode.GDSubmitButtonObjects1[i];
        ++k;
    }
}
gdjs.SubmitScoreCode.GDSubmitButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.SubmitScoreCode.mapOfGDgdjs_9546SubmitScoreCode_9546GDSubmitButtonObjects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PlayerNameInput"), gdjs.SubmitScoreCode.GDPlayerNameInputObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(0).setString((( gdjs.SubmitScoreCode.GDPlayerNameInputObjects1.length === 0 ) ? "" :gdjs.SubmitScoreCode.GDPlayerNameInputObjects1[0].getText()));
}
{for(var i = 0, len = gdjs.SubmitScoreCode.GDPlayerNameInputObjects1.length ;i < len;++i) {
    gdjs.SubmitScoreCode.GDPlayerNameInputObjects1[i].setDisabled(true);
}
}
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("ScoreSubmitted"), true);
}
{gdjs.evtTools.leaderboards.savePlayerScore(runtimeScene, "6672be4e-e92d-41b8-a4bc-0abfd9567165", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(31)), (( gdjs.SubmitScoreCode.GDPlayerNameInputObjects1.length === 0 ) ? "" :gdjs.SubmitScoreCode.GDPlayerNameInputObjects1[0].getText()));
}

{ //Subevents
gdjs.SubmitScoreCode.eventsList7(runtimeScene);} //End of subevents
}

}


};gdjs.SubmitScoreCode.eventsList9 = function(runtimeScene) {

{


gdjs.SubmitScoreCode.eventsList8(runtimeScene);
}


};gdjs.SubmitScoreCode.eventsList10 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {

{ //Subevents
gdjs.SubmitScoreCode.eventsList9(runtimeScene);} //End of subevents
}

}


};gdjs.SubmitScoreCode.asyncCallback26652188 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.SubmitScoreCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainMenu", false);
}
gdjs.SubmitScoreCode.localVariables.length = 0;
}
gdjs.SubmitScoreCode.idToCallbackMap.set(26652188, gdjs.SubmitScoreCode.asyncCallback26652188);
gdjs.SubmitScoreCode.eventsList11 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.SubmitScoreCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.25), (runtimeScene) => (gdjs.SubmitScoreCode.asyncCallback26652188(runtimeScene, asyncObjectsList)), 26652188, asyncObjectsList);
}
}

}


};gdjs.SubmitScoreCode.eventsList12 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("RestartButton"), gdjs.SubmitScoreCode.GDRestartButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SubmitScoreCode.GDRestartButtonObjects1.length;i<l;++i) {
    if ( gdjs.SubmitScoreCode.GDRestartButtonObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.SubmitScoreCode.GDRestartButtonObjects1[k] = gdjs.SubmitScoreCode.GDRestartButtonObjects1[i];
        ++k;
    }
}
gdjs.SubmitScoreCode.GDRestartButtonObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.SubmitScoreCode.eventsList11(runtimeScene);} //End of subevents
}

}


};gdjs.SubmitScoreCode.asyncCallback28240908 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.SubmitScoreCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainMenu", true);
}
gdjs.SubmitScoreCode.localVariables.length = 0;
}
gdjs.SubmitScoreCode.idToCallbackMap.set(28240908, gdjs.SubmitScoreCode.asyncCallback28240908);
gdjs.SubmitScoreCode.eventsList13 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.SubmitScoreCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.SubmitScoreCode.asyncCallback28240908(runtimeScene, asyncObjectsList)), 28240908, asyncObjectsList);
}
}

}


};gdjs.SubmitScoreCode.eventsList14 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.leaderboards.hasSavingErrored("6672be4e-e92d-41b8-a4bc-0abfd9567165");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PlayerNameInput"), gdjs.SubmitScoreCode.GDPlayerNameInputObjects3);
gdjs.copyArray(runtimeScene.getObjects("SubmitButton"), gdjs.SubmitScoreCode.GDSubmitButtonObjects3);
gdjs.copyArray(runtimeScene.getObjects("SubmitLoader"), gdjs.SubmitScoreCode.GDSubmitLoaderObjects3);
{for(var i = 0, len = gdjs.SubmitScoreCode.GDSubmitButtonObjects3.length ;i < len;++i) {
    gdjs.SubmitScoreCode.GDSubmitButtonObjects3[i].hide(false);
}
}
{for(var i = 0, len = gdjs.SubmitScoreCode.GDSubmitLoaderObjects3.length ;i < len;++i) {
    gdjs.SubmitScoreCode.GDSubmitLoaderObjects3[i].hide();
}
}
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("ScoreSubmitted"), false);
}
{for(var i = 0, len = gdjs.SubmitScoreCode.GDPlayerNameInputObjects3.length ;i < len;++i) {
    gdjs.SubmitScoreCode.GDPlayerNameInputObjects3[i].setDisabled(false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.leaderboards.hasBeenSaved("6672be4e-e92d-41b8-a4bc-0abfd9567165");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SubmitLoader"), gdjs.SubmitScoreCode.GDSubmitLoaderObjects2);
gdjs.copyArray(runtimeScene.getObjects("Submitted_Text"), gdjs.SubmitScoreCode.GDSubmitted_9595TextObjects2);
{gdjs.evtTools.leaderboards.displayLeaderboard(runtimeScene, "6672be4e-e92d-41b8-a4bc-0abfd9567165", true);
}
{for(var i = 0, len = gdjs.SubmitScoreCode.GDSubmitLoaderObjects2.length ;i < len;++i) {
    gdjs.SubmitScoreCode.GDSubmitLoaderObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.SubmitScoreCode.GDSubmitted_9595TextObjects2.length ;i < len;++i) {
    gdjs.SubmitScoreCode.GDSubmitted_9595TextObjects2[i].hide(false);
}
}

{ //Subevents
gdjs.SubmitScoreCode.eventsList13(runtimeScene);} //End of subevents
}

}


};gdjs.SubmitScoreCode.eventsList15 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.leaderboards.isSaving("6672be4e-e92d-41b8-a4bc-0abfd9567165");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(26655636);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SubmitButton"), gdjs.SubmitScoreCode.GDSubmitButtonObjects3);
gdjs.copyArray(runtimeScene.getObjects("SubmitLoader"), gdjs.SubmitScoreCode.GDSubmitLoaderObjects3);
gdjs.copyArray(runtimeScene.getObjects("Submitted_Text"), gdjs.SubmitScoreCode.GDSubmitted_9595TextObjects3);
{for(var i = 0, len = gdjs.SubmitScoreCode.GDSubmitLoaderObjects3.length ;i < len;++i) {
    gdjs.SubmitScoreCode.GDSubmitLoaderObjects3[i].hide(false);
}
}
{for(var i = 0, len = gdjs.SubmitScoreCode.GDSubmitButtonObjects3.length ;i < len;++i) {
    gdjs.SubmitScoreCode.GDSubmitButtonObjects3[i].hide();
}
}
{for(var i = 0, len = gdjs.SubmitScoreCode.GDSubmitted_9595TextObjects3.length ;i < len;++i) {
    gdjs.SubmitScoreCode.GDSubmitted_9595TextObjects3[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.leaderboards.isSaving("6672be4e-e92d-41b8-a4bc-0abfd9567165"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(26657332);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.SubmitScoreCode.eventsList14(runtimeScene);} //End of subevents
}

}


};gdjs.SubmitScoreCode.eventsList16 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.SubmitScoreCode.eventsList15(runtimeScene);} //End of subevents
}

}


};gdjs.SubmitScoreCode.asyncCallback28247804 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.SubmitScoreCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "PickGameMode", true);
}
gdjs.SubmitScoreCode.localVariables.length = 0;
}
gdjs.SubmitScoreCode.idToCallbackMap.set(28247804, gdjs.SubmitScoreCode.asyncCallback28247804);
gdjs.SubmitScoreCode.eventsList17 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.SubmitScoreCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.SubmitScoreCode.asyncCallback28247804(runtimeScene, asyncObjectsList)), 28247804, asyncObjectsList);
}
}

}


};gdjs.SubmitScoreCode.eventsList18 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.leaderboards.hasSavingErrored("6672be4e-e92d-41b8-a4bc-0abfd9567165");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PlayerNameInput"), gdjs.SubmitScoreCode.GDPlayerNameInputObjects2);
gdjs.copyArray(runtimeScene.getObjects("SubmitButton"), gdjs.SubmitScoreCode.GDSubmitButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("SubmitLoader"), gdjs.SubmitScoreCode.GDSubmitLoaderObjects2);
{for(var i = 0, len = gdjs.SubmitScoreCode.GDSubmitButtonObjects2.length ;i < len;++i) {
    gdjs.SubmitScoreCode.GDSubmitButtonObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.SubmitScoreCode.GDSubmitLoaderObjects2.length ;i < len;++i) {
    gdjs.SubmitScoreCode.GDSubmitLoaderObjects2[i].hide();
}
}
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("ScoreSubmitted"), false);
}
{for(var i = 0, len = gdjs.SubmitScoreCode.GDPlayerNameInputObjects2.length ;i < len;++i) {
    gdjs.SubmitScoreCode.GDPlayerNameInputObjects2[i].setDisabled(false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.leaderboards.hasBeenSaved("6672be4e-e92d-41b8-a4bc-0abfd9567165");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SubmitLoader"), gdjs.SubmitScoreCode.GDSubmitLoaderObjects1);
gdjs.copyArray(runtimeScene.getObjects("Submitted_Text"), gdjs.SubmitScoreCode.GDSubmitted_9595TextObjects1);
{gdjs.evtTools.leaderboards.displayLeaderboard(runtimeScene, "6672be4e-e92d-41b8-a4bc-0abfd9567165", true);
}
{for(var i = 0, len = gdjs.SubmitScoreCode.GDSubmitLoaderObjects1.length ;i < len;++i) {
    gdjs.SubmitScoreCode.GDSubmitLoaderObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.SubmitScoreCode.GDSubmitted_9595TextObjects1.length ;i < len;++i) {
    gdjs.SubmitScoreCode.GDSubmitted_9595TextObjects1[i].hide(false);
}
}

{ //Subevents
gdjs.SubmitScoreCode.eventsList17(runtimeScene);} //End of subevents
}

}


};gdjs.SubmitScoreCode.eventsList19 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.leaderboards.isSaving("6672be4e-e92d-41b8-a4bc-0abfd9567165");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(28243260);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SubmitButton"), gdjs.SubmitScoreCode.GDSubmitButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("SubmitLoader"), gdjs.SubmitScoreCode.GDSubmitLoaderObjects2);
gdjs.copyArray(runtimeScene.getObjects("Submitted_Text"), gdjs.SubmitScoreCode.GDSubmitted_9595TextObjects2);
{for(var i = 0, len = gdjs.SubmitScoreCode.GDSubmitLoaderObjects2.length ;i < len;++i) {
    gdjs.SubmitScoreCode.GDSubmitLoaderObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.SubmitScoreCode.GDSubmitButtonObjects2.length ;i < len;++i) {
    gdjs.SubmitScoreCode.GDSubmitButtonObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.SubmitScoreCode.GDSubmitted_9595TextObjects2.length ;i < len;++i) {
    gdjs.SubmitScoreCode.GDSubmitted_9595TextObjects2[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.leaderboards.isSaving("6672be4e-e92d-41b8-a4bc-0abfd9567165"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(28244780);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.SubmitScoreCode.eventsList18(runtimeScene);} //End of subevents
}

}


};gdjs.SubmitScoreCode.eventsList20 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("GameMode")) == "Speedrun";
if (isConditionTrue_0) {

{ //Subevents
gdjs.SubmitScoreCode.eventsList19(runtimeScene);} //End of subevents
}

}


};gdjs.SubmitScoreCode.eventsList21 = function(runtimeScene) {

{


gdjs.SubmitScoreCode.eventsList16(runtimeScene);
}


{


gdjs.SubmitScoreCode.eventsList20(runtimeScene);
}


};gdjs.SubmitScoreCode.eventsList22 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("ScoreSubmitted"), true);
if (isConditionTrue_0) {

{ //Subevents
gdjs.SubmitScoreCode.eventsList21(runtimeScene);} //End of subevents
}

}


};gdjs.SubmitScoreCode.eventsList23 = function(runtimeScene) {

{


gdjs.SubmitScoreCode.eventsList3(runtimeScene);
}


{


gdjs.SubmitScoreCode.eventsList5(runtimeScene);
}


{


gdjs.SubmitScoreCode.eventsList10(runtimeScene);
}


{


gdjs.SubmitScoreCode.eventsList12(runtimeScene);
}


{


gdjs.SubmitScoreCode.eventsList22(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("PlayerNameInput"), gdjs.SubmitScoreCode.GDPlayerNameInputObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SubmitScoreCode.GDPlayerNameInputObjects1.length;i<l;++i) {
    if ( gdjs.SubmitScoreCode.GDPlayerNameInputObjects1[i].getBehavior("Text").getText() != runtimeScene.getGame().getVariables().getFromIndex(50).getAsString() ) {
        isConditionTrue_0 = true;
        gdjs.SubmitScoreCode.GDPlayerNameInputObjects1[k] = gdjs.SubmitScoreCode.GDPlayerNameInputObjects1[i];
        ++k;
    }
}
gdjs.SubmitScoreCode.GDPlayerNameInputObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.SubmitScoreCode.GDPlayerNameInputObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(50).setString((( gdjs.SubmitScoreCode.GDPlayerNameInputObjects1.length === 0 ) ? "" :gdjs.SubmitScoreCode.GDPlayerNameInputObjects1[0].getPlaceholder()));
}
}

}


};

gdjs.SubmitScoreCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.SubmitScoreCode.GDScoreTextObjects1.length = 0;
gdjs.SubmitScoreCode.GDScoreTextObjects2.length = 0;
gdjs.SubmitScoreCode.GDScoreTextObjects3.length = 0;
gdjs.SubmitScoreCode.GDScoreTextObjects4.length = 0;
gdjs.SubmitScoreCode.GDSubmitted_9595TextObjects1.length = 0;
gdjs.SubmitScoreCode.GDSubmitted_9595TextObjects2.length = 0;
gdjs.SubmitScoreCode.GDSubmitted_9595TextObjects3.length = 0;
gdjs.SubmitScoreCode.GDSubmitted_9595TextObjects4.length = 0;
gdjs.SubmitScoreCode.GDRestart_9595TextObjects1.length = 0;
gdjs.SubmitScoreCode.GDRestart_9595TextObjects2.length = 0;
gdjs.SubmitScoreCode.GDRestart_9595TextObjects3.length = 0;
gdjs.SubmitScoreCode.GDRestart_9595TextObjects4.length = 0;
gdjs.SubmitScoreCode.GDPlayerNameInputObjects1.length = 0;
gdjs.SubmitScoreCode.GDPlayerNameInputObjects2.length = 0;
gdjs.SubmitScoreCode.GDPlayerNameInputObjects3.length = 0;
gdjs.SubmitScoreCode.GDPlayerNameInputObjects4.length = 0;
gdjs.SubmitScoreCode.GDSubmitButtonObjects1.length = 0;
gdjs.SubmitScoreCode.GDSubmitButtonObjects2.length = 0;
gdjs.SubmitScoreCode.GDSubmitButtonObjects3.length = 0;
gdjs.SubmitScoreCode.GDSubmitButtonObjects4.length = 0;
gdjs.SubmitScoreCode.GDSubmitLoaderObjects1.length = 0;
gdjs.SubmitScoreCode.GDSubmitLoaderObjects2.length = 0;
gdjs.SubmitScoreCode.GDSubmitLoaderObjects3.length = 0;
gdjs.SubmitScoreCode.GDSubmitLoaderObjects4.length = 0;
gdjs.SubmitScoreCode.GDScoreBoxObjects1.length = 0;
gdjs.SubmitScoreCode.GDScoreBoxObjects2.length = 0;
gdjs.SubmitScoreCode.GDScoreBoxObjects3.length = 0;
gdjs.SubmitScoreCode.GDScoreBoxObjects4.length = 0;
gdjs.SubmitScoreCode.GDRestartButtonObjects1.length = 0;
gdjs.SubmitScoreCode.GDRestartButtonObjects2.length = 0;
gdjs.SubmitScoreCode.GDRestartButtonObjects3.length = 0;
gdjs.SubmitScoreCode.GDRestartButtonObjects4.length = 0;
gdjs.SubmitScoreCode.GDNewSpriteObjects1.length = 0;
gdjs.SubmitScoreCode.GDNewSpriteObjects2.length = 0;
gdjs.SubmitScoreCode.GDNewSpriteObjects3.length = 0;
gdjs.SubmitScoreCode.GDNewSpriteObjects4.length = 0;

gdjs.SubmitScoreCode.eventsList23(runtimeScene);
gdjs.SubmitScoreCode.GDScoreTextObjects1.length = 0;
gdjs.SubmitScoreCode.GDScoreTextObjects2.length = 0;
gdjs.SubmitScoreCode.GDScoreTextObjects3.length = 0;
gdjs.SubmitScoreCode.GDScoreTextObjects4.length = 0;
gdjs.SubmitScoreCode.GDSubmitted_9595TextObjects1.length = 0;
gdjs.SubmitScoreCode.GDSubmitted_9595TextObjects2.length = 0;
gdjs.SubmitScoreCode.GDSubmitted_9595TextObjects3.length = 0;
gdjs.SubmitScoreCode.GDSubmitted_9595TextObjects4.length = 0;
gdjs.SubmitScoreCode.GDRestart_9595TextObjects1.length = 0;
gdjs.SubmitScoreCode.GDRestart_9595TextObjects2.length = 0;
gdjs.SubmitScoreCode.GDRestart_9595TextObjects3.length = 0;
gdjs.SubmitScoreCode.GDRestart_9595TextObjects4.length = 0;
gdjs.SubmitScoreCode.GDPlayerNameInputObjects1.length = 0;
gdjs.SubmitScoreCode.GDPlayerNameInputObjects2.length = 0;
gdjs.SubmitScoreCode.GDPlayerNameInputObjects3.length = 0;
gdjs.SubmitScoreCode.GDPlayerNameInputObjects4.length = 0;
gdjs.SubmitScoreCode.GDSubmitButtonObjects1.length = 0;
gdjs.SubmitScoreCode.GDSubmitButtonObjects2.length = 0;
gdjs.SubmitScoreCode.GDSubmitButtonObjects3.length = 0;
gdjs.SubmitScoreCode.GDSubmitButtonObjects4.length = 0;
gdjs.SubmitScoreCode.GDSubmitLoaderObjects1.length = 0;
gdjs.SubmitScoreCode.GDSubmitLoaderObjects2.length = 0;
gdjs.SubmitScoreCode.GDSubmitLoaderObjects3.length = 0;
gdjs.SubmitScoreCode.GDSubmitLoaderObjects4.length = 0;
gdjs.SubmitScoreCode.GDScoreBoxObjects1.length = 0;
gdjs.SubmitScoreCode.GDScoreBoxObjects2.length = 0;
gdjs.SubmitScoreCode.GDScoreBoxObjects3.length = 0;
gdjs.SubmitScoreCode.GDScoreBoxObjects4.length = 0;
gdjs.SubmitScoreCode.GDRestartButtonObjects1.length = 0;
gdjs.SubmitScoreCode.GDRestartButtonObjects2.length = 0;
gdjs.SubmitScoreCode.GDRestartButtonObjects3.length = 0;
gdjs.SubmitScoreCode.GDRestartButtonObjects4.length = 0;
gdjs.SubmitScoreCode.GDNewSpriteObjects1.length = 0;
gdjs.SubmitScoreCode.GDNewSpriteObjects2.length = 0;
gdjs.SubmitScoreCode.GDNewSpriteObjects3.length = 0;
gdjs.SubmitScoreCode.GDNewSpriteObjects4.length = 0;


return;

}

gdjs['SubmitScoreCode'] = gdjs.SubmitScoreCode;
