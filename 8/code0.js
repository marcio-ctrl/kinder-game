gdjs.NewSceneCode = {};
gdjs.NewSceneCode.GDNewObjectObjects1= [];
gdjs.NewSceneCode.GDNewObjectObjects2= [];
gdjs.NewSceneCode.GDSoloObjects1= [];
gdjs.NewSceneCode.GDSoloObjects2= [];
gdjs.NewSceneCode.GDDudeObjects1= [];
gdjs.NewSceneCode.GDDudeObjects2= [];
gdjs.NewSceneCode.GDGeleiaObjects1= [];
gdjs.NewSceneCode.GDGeleiaObjects2= [];
gdjs.NewSceneCode.GDLeftObjects1= [];
gdjs.NewSceneCode.GDLeftObjects2= [];
gdjs.NewSceneCode.GDRightObjects1= [];
gdjs.NewSceneCode.GDRightObjects2= [];

gdjs.NewSceneCode.conditionTrue_0 = {val:false};
gdjs.NewSceneCode.condition0IsTrue_0 = {val:false};
gdjs.NewSceneCode.condition1IsTrue_0 = {val:false};


gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDGeleiaObjects1Objects = Hashtable.newFrom({"Geleia": gdjs.NewSceneCode.GDGeleiaObjects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDLeftObjects1Objects = Hashtable.newFrom({"Left": gdjs.NewSceneCode.GDLeftObjects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDGeleiaObjects1Objects = Hashtable.newFrom({"Geleia": gdjs.NewSceneCode.GDGeleiaObjects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDRightObjects1Objects = Hashtable.newFrom({"Right": gdjs.NewSceneCode.GDRightObjects1});gdjs.NewSceneCode.eventsList0xb4be0 = function(runtimeScene) {

{


{
gdjs.NewSceneCode.GDDudeObjects1.createFrom(runtimeScene.getObjects("Dude"));
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.NewSceneCode.GDDudeObjects1.length !== 0 ? gdjs.NewSceneCode.GDDudeObjects1[0] : null), true, "", 0);
}}

}


{


{
}

}


{


{
}

}


{

gdjs.NewSceneCode.GDGeleiaObjects1.createFrom(runtimeScene.getObjects("Geleia"));
gdjs.NewSceneCode.GDLeftObjects1.createFrom(runtimeScene.getObjects("Left"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDGeleiaObjects1Objects, gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDLeftObjects1Objects, false, runtimeScene, true);
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDGeleiaObjects1 */
{for(var i = 0, len = gdjs.NewSceneCode.GDGeleiaObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDGeleiaObjects1[i].returnVariable(gdjs.NewSceneCode.GDGeleiaObjects1[i].getVariables().getFromIndex(0)).setString("Right");
}
}}

}


{

gdjs.NewSceneCode.GDGeleiaObjects1.createFrom(runtimeScene.getObjects("Geleia"));
gdjs.NewSceneCode.GDRightObjects1.createFrom(runtimeScene.getObjects("Right"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDGeleiaObjects1Objects, gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDRightObjects1Objects, false, runtimeScene, true);
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDGeleiaObjects1 */
{for(var i = 0, len = gdjs.NewSceneCode.GDGeleiaObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDGeleiaObjects1[i].returnVariable(gdjs.NewSceneCode.GDGeleiaObjects1[i].getVariables().getFromIndex(0)).setString("Left");
}
}}

}


{

gdjs.NewSceneCode.GDGeleiaObjects1.createFrom(runtimeScene.getObjects("Geleia"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDGeleiaObjects1.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDGeleiaObjects1[i].getVariableString(gdjs.NewSceneCode.GDGeleiaObjects1[i].getVariables().getFromIndex(0)) == "Left" ) {
        gdjs.NewSceneCode.condition0IsTrue_0.val = true;
        gdjs.NewSceneCode.GDGeleiaObjects1[k] = gdjs.NewSceneCode.GDGeleiaObjects1[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDGeleiaObjects1.length = k;}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDGeleiaObjects1 */
{for(var i = 0, len = gdjs.NewSceneCode.GDGeleiaObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDGeleiaObjects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


{

gdjs.NewSceneCode.GDGeleiaObjects1.createFrom(runtimeScene.getObjects("Geleia"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDGeleiaObjects1.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDGeleiaObjects1[i].getVariableString(gdjs.NewSceneCode.GDGeleiaObjects1[i].getVariables().getFromIndex(0)) == "Right" ) {
        gdjs.NewSceneCode.condition0IsTrue_0.val = true;
        gdjs.NewSceneCode.GDGeleiaObjects1[k] = gdjs.NewSceneCode.GDGeleiaObjects1[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDGeleiaObjects1.length = k;}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDGeleiaObjects1 */
{for(var i = 0, len = gdjs.NewSceneCode.GDGeleiaObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDGeleiaObjects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
gdjs.NewSceneCode.GDLeftObjects1.createFrom(runtimeScene.getObjects("Left"));
gdjs.NewSceneCode.GDRightObjects1.createFrom(runtimeScene.getObjects("Right"));
{for(var i = 0, len = gdjs.NewSceneCode.GDLeftObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDLeftObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDRightObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDRightObjects1[i].hide();
}
}}

}


{


{
}

}


{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
gdjs.NewSceneCode.GDDudeObjects1.createFrom(runtimeScene.getObjects("Dude"));
{for(var i = 0, len = gdjs.NewSceneCode.GDDudeObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDDudeObjects1[i].flipX(true);
}
}}

}


{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
gdjs.NewSceneCode.GDDudeObjects1.createFrom(runtimeScene.getObjects("Dude"));
{for(var i = 0, len = gdjs.NewSceneCode.GDDudeObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDDudeObjects1[i].flipX(false);
}
}}

}


{

gdjs.NewSceneCode.GDDudeObjects1.createFrom(runtimeScene.getObjects("Dude"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDDudeObjects1.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDDudeObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.NewSceneCode.condition0IsTrue_0.val = true;
        gdjs.NewSceneCode.GDDudeObjects1[k] = gdjs.NewSceneCode.GDDudeObjects1[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDDudeObjects1.length = k;}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDDudeObjects1 */
{for(var i = 0, len = gdjs.NewSceneCode.GDDudeObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDDudeObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.NewSceneCode.GDDudeObjects1.createFrom(runtimeScene.getObjects("Dude"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDDudeObjects1.length;i<l;++i) {
    if ( !(gdjs.NewSceneCode.GDDudeObjects1[i].getBehavior("PlatformerObject").isJumping()) ) {
        gdjs.NewSceneCode.condition0IsTrue_0.val = true;
        gdjs.NewSceneCode.GDDudeObjects1[k] = gdjs.NewSceneCode.GDDudeObjects1[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDDudeObjects1.length = k;}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDDudeObjects1 */
{for(var i = 0, len = gdjs.NewSceneCode.GDDudeObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDDudeObjects1[i].setAnimation(0);
}
}}

}


}; //End of gdjs.NewSceneCode.eventsList0xb4be0


gdjs.NewSceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.NewSceneCode.GDNewObjectObjects1.length = 0;
gdjs.NewSceneCode.GDNewObjectObjects2.length = 0;
gdjs.NewSceneCode.GDSoloObjects1.length = 0;
gdjs.NewSceneCode.GDSoloObjects2.length = 0;
gdjs.NewSceneCode.GDDudeObjects1.length = 0;
gdjs.NewSceneCode.GDDudeObjects2.length = 0;
gdjs.NewSceneCode.GDGeleiaObjects1.length = 0;
gdjs.NewSceneCode.GDGeleiaObjects2.length = 0;
gdjs.NewSceneCode.GDLeftObjects1.length = 0;
gdjs.NewSceneCode.GDLeftObjects2.length = 0;
gdjs.NewSceneCode.GDRightObjects1.length = 0;
gdjs.NewSceneCode.GDRightObjects2.length = 0;

gdjs.NewSceneCode.eventsList0xb4be0(runtimeScene);
return;

}
gdjs['NewSceneCode'] = gdjs.NewSceneCode;
