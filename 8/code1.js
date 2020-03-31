gdjs.Scene2Code = {};
gdjs.Scene2Code.GDEndGameObjects1= [];
gdjs.Scene2Code.GDEndGameObjects2= [];
gdjs.Scene2Code.GDNewObjectObjects1= [];
gdjs.Scene2Code.GDNewObjectObjects2= [];
gdjs.Scene2Code.GDEndTagObjects1= [];
gdjs.Scene2Code.GDEndTagObjects2= [];

gdjs.Scene2Code.conditionTrue_0 = {val:false};
gdjs.Scene2Code.condition0IsTrue_0 = {val:false};
gdjs.Scene2Code.condition1IsTrue_0 = {val:false};


gdjs.Scene2Code.eventsList0xb4be0 = function(runtimeScene) {

{


gdjs.Scene2Code.condition0IsTrue_0.val = false;
{
gdjs.Scene2Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Scene2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "top_gun2.mp3", 0, true, 100, 1);
}}

}


}; //End of gdjs.Scene2Code.eventsList0xb4be0


gdjs.Scene2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Scene2Code.GDEndGameObjects1.length = 0;
gdjs.Scene2Code.GDEndGameObjects2.length = 0;
gdjs.Scene2Code.GDNewObjectObjects1.length = 0;
gdjs.Scene2Code.GDNewObjectObjects2.length = 0;
gdjs.Scene2Code.GDEndTagObjects1.length = 0;
gdjs.Scene2Code.GDEndTagObjects2.length = 0;

gdjs.Scene2Code.eventsList0xb4be0(runtimeScene);
return;

}
gdjs['Scene2Code'] = gdjs.Scene2Code;
