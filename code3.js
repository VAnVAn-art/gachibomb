gdjs.LeaderboardBackgroundCode = {};
gdjs.LeaderboardBackgroundCode.localVariables = [];
gdjs.LeaderboardBackgroundCode.idToCallbackMap = new Map();
gdjs.LeaderboardBackgroundCode.GDNewTextObjects1= [];
gdjs.LeaderboardBackgroundCode.GDNewTextObjects2= [];
gdjs.LeaderboardBackgroundCode.GDNewResourceBarObjects1= [];
gdjs.LeaderboardBackgroundCode.GDNewResourceBarObjects2= [];


gdjs.LeaderboardBackgroundCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewResourceBar"), gdjs.LeaderboardBackgroundCode.GDNewResourceBarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LeaderboardBackgroundCode.GDNewResourceBarObjects1.length;i<l;++i) {
    if ( gdjs.LeaderboardBackgroundCode.GDNewResourceBarObjects1[i].IsFull(null) ) {
        isConditionTrue_0 = true;
        gdjs.LeaderboardBackgroundCode.GDNewResourceBarObjects1[k] = gdjs.LeaderboardBackgroundCode.GDNewResourceBarObjects1[i];
        ++k;
    }
}
gdjs.LeaderboardBackgroundCode.GDNewResourceBarObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "SubmitScore");
}
}

}


};gdjs.LeaderboardBackgroundCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.prioritizeLoadingOfScene(runtimeScene, "SubmitScore");
}

{ //Subevents
gdjs.LeaderboardBackgroundCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewResourceBar"), gdjs.LeaderboardBackgroundCode.GDNewResourceBarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LeaderboardBackgroundCode.GDNewResourceBarObjects1.length;i<l;++i) {
    if ( gdjs.LeaderboardBackgroundCode.GDNewResourceBarObjects1[i].Value(null) != gdjs.evtTools.runtimeScene.getSceneLoadingProgress(runtimeScene, "SubmitScore") ) {
        isConditionTrue_0 = true;
        gdjs.LeaderboardBackgroundCode.GDNewResourceBarObjects1[k] = gdjs.LeaderboardBackgroundCode.GDNewResourceBarObjects1[i];
        ++k;
    }
}
gdjs.LeaderboardBackgroundCode.GDNewResourceBarObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.LeaderboardBackgroundCode.GDNewResourceBarObjects1 */
{for(var i = 0, len = gdjs.LeaderboardBackgroundCode.GDNewResourceBarObjects1.length ;i < len;++i) {
    gdjs.LeaderboardBackgroundCode.GDNewResourceBarObjects1[i].SetValue(gdjs.evtTools.runtimeScene.getSceneLoadingProgress(runtimeScene, "SubmitScore"), null);
}
}
}

}


};

gdjs.LeaderboardBackgroundCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LeaderboardBackgroundCode.GDNewTextObjects1.length = 0;
gdjs.LeaderboardBackgroundCode.GDNewTextObjects2.length = 0;
gdjs.LeaderboardBackgroundCode.GDNewResourceBarObjects1.length = 0;
gdjs.LeaderboardBackgroundCode.GDNewResourceBarObjects2.length = 0;

gdjs.LeaderboardBackgroundCode.eventsList1(runtimeScene);
gdjs.LeaderboardBackgroundCode.GDNewTextObjects1.length = 0;
gdjs.LeaderboardBackgroundCode.GDNewTextObjects2.length = 0;
gdjs.LeaderboardBackgroundCode.GDNewResourceBarObjects1.length = 0;
gdjs.LeaderboardBackgroundCode.GDNewResourceBarObjects2.length = 0;


return;

}

gdjs['LeaderboardBackgroundCode'] = gdjs.LeaderboardBackgroundCode;
