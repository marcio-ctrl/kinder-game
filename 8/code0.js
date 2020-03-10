gdjs.Scene1Code = {};
gdjs.Scene1Code.GDNewObjectObjects1= [];
gdjs.Scene1Code.GDNewObjectObjects2= [];
gdjs.Scene1Code.GDSoloObjects1= [];
gdjs.Scene1Code.GDSoloObjects2= [];
gdjs.Scene1Code.GDDudeObjects1= [];
gdjs.Scene1Code.GDDudeObjects2= [];
gdjs.Scene1Code.GDGeleiaObjects1= [];
gdjs.Scene1Code.GDGeleiaObjects2= [];
gdjs.Scene1Code.GDLeftObjects1= [];
gdjs.Scene1Code.GDLeftObjects2= [];
gdjs.Scene1Code.GDRightObjects1= [];
gdjs.Scene1Code.GDRightObjects2= [];
gdjs.Scene1Code.GDcoinObjects1= [];
gdjs.Scene1Code.GDcoinObjects2= [];
gdjs.Scene1Code.GDCoinsObjects1= [];
gdjs.Scene1Code.GDCoinsObjects2= [];
gdjs.Scene1Code.GDDoorObjects1= [];
gdjs.Scene1Code.GDDoorObjects2= [];

gdjs.Scene1Code.conditionTrue_0 = {val:false};
gdjs.Scene1Code.condition0IsTrue_0 = {val:false};
gdjs.Scene1Code.condition1IsTrue_0 = {val:false};
gdjs.Scene1Code.condition2IsTrue_0 = {val:false};


gdjs.Scene1Code.mapOfGDgdjs_46Scene1Code_46GDGeleiaObjects1Objects = Hashtable.newFrom({"Geleia": gdjs.Scene1Code.GDGeleiaObjects1});gdjs.Scene1Code.mapOfGDgdjs_46Scene1Code_46GDLeftObjects1Objects = Hashtable.newFrom({"Left": gdjs.Scene1Code.GDLeftObjects1});gdjs.Scene1Code.mapOfGDgdjs_46Scene1Code_46GDDudeObjects1Objects = Hashtable.newFrom({"Dude": gdjs.Scene1Code.GDDudeObjects1});gdjs.Scene1Code.mapOfGDgdjs_46Scene1Code_46GDLeftObjects1Objects = Hashtable.newFrom({"Left": gdjs.Scene1Code.GDLeftObjects1});gdjs.Scene1Code.mapOfGDgdjs_46Scene1Code_46GDGeleiaObjects1Objects = Hashtable.newFrom({"Geleia": gdjs.Scene1Code.GDGeleiaObjects1});gdjs.Scene1Code.mapOfGDgdjs_46Scene1Code_46GDRightObjects1Objects = Hashtable.newFrom({"Right": gdjs.Scene1Code.GDRightObjects1});gdjs.Scene1Code.mapOfGDgdjs_46Scene1Code_46GDDudeObjects1Objects = Hashtable.newFrom({"Dude": gdjs.Scene1Code.GDDudeObjects1});gdjs.Scene1Code.mapOfGDgdjs_46Scene1Code_46GDRightObjects1Objects = Hashtable.newFrom({"Right": gdjs.Scene1Code.GDRightObjects1});gdjs.Scene1Code.mapOfGDgdjs_46Scene1Code_46GDDudeObjects1Objects = Hashtable.newFrom({"Dude": gdjs.Scene1Code.GDDudeObjects1});gdjs.Scene1Code.mapOfGDgdjs_46Scene1Code_46GDGeleiaObjects1Objects = Hashtable.newFrom({"Geleia": gdjs.Scene1Code.GDGeleiaObjects1});gdjs.Scene1Code.mapOfGDgdjs_46Scene1Code_46GDDudeObjects1Objects = Hashtable.newFrom({"Dude": gdjs.Scene1Code.GDDudeObjects1});gdjs.Scene1Code.mapOfGDgdjs_46Scene1Code_46GDcoinObjects1Objects = Hashtable.newFrom({"coin": gdjs.Scene1Code.GDcoinObjects1});gdjs.Scene1Code.mapOfGDgdjs_46Scene1Code_46GDDudeObjects1Objects = Hashtable.newFrom({"Dude": gdjs.Scene1Code.GDDudeObjects1});gdjs.Scene1Code.mapOfGDgdjs_46Scene1Code_46GDDoorObjects1Objects = Hashtable.newFrom({"Door": gdjs.Scene1Code.GDDoorObjects1});gdjs.Scene1Code.mapOfGDgdjs_46Scene1Code_46GDDudeObjects1Objects = Hashtable.newFrom({"Dude": gdjs.Scene1Code.GDDudeObjects1});gdjs.Scene1Code.mapOfGDgdjs_46Scene1Code_46GDGeleiaObjects1Objects = Hashtable.newFrom({"Geleia": gdjs.Scene1Code.GDGeleiaObjects1});gdjs.Scene1Code.eventsList0xb4be0 = function(runtimeScene) {

{


{
gdjs.Scene1Code.GDDudeObjects1.createFrom(runtimeScene.getObjects("Dude"));
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.Scene1Code.GDDudeObjects1.length !== 0 ? gdjs.Scene1Code.GDDudeObjects1[0] : null), true, "", 0);
}}

}


{


{
}

}


{

gdjs.Scene1Code.GDGeleiaObjects1.createFrom(runtimeScene.getObjects("Geleia"));
gdjs.Scene1Code.GDLeftObjects1.createFrom(runtimeScene.getObjects("Left"));

gdjs.Scene1Code.condition0IsTrue_0.val = false;
{
gdjs.Scene1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Scene1Code.mapOfGDgdjs_46Scene1Code_46GDGeleiaObjects1Objects, gdjs.Scene1Code.mapOfGDgdjs_46Scene1Code_46GDLeftObjects1Objects, false, runtimeScene, true);
}if (gdjs.Scene1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Scene1Code.GDGeleiaObjects1 */
{for(var i = 0, len = gdjs.Scene1Code.GDGeleiaObjects1.length ;i < len;++i) {
    gdjs.Scene1Code.GDGeleiaObjects1[i].returnVariable(gdjs.Scene1Code.GDGeleiaObjects1[i].getVariables().getFromIndex(0)).setString("Right");
}
}}

}


{

gdjs.Scene1Code.GDDudeObjects1.createFrom(runtimeScene.getObjects("Dude"));
gdjs.Scene1Code.GDLeftObjects1.createFrom(runtimeScene.getObjects("Left"));

gdjs.Scene1Code.condition0IsTrue_0.val = false;
{
gdjs.Scene1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Scene1Code.mapOfGDgdjs_46Scene1Code_46GDDudeObjects1Objects, gdjs.Scene1Code.mapOfGDgdjs_46Scene1Code_46GDLeftObjects1Objects, false, runtimeScene, true);
}if (gdjs.Scene1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Scene1Code.GDDudeObjects1 */
{for(var i = 0, len = gdjs.Scene1Code.GDDudeObjects1.length ;i < len;++i) {
    gdjs.Scene1Code.GDDudeObjects1[i].returnVariable(gdjs.Scene1Code.GDDudeObjects1[i].getVariables().getFromIndex(0)).setString("Right");
}
}}

}


{

gdjs.Scene1Code.GDGeleiaObjects1.createFrom(runtimeScene.getObjects("Geleia"));
gdjs.Scene1Code.GDRightObjects1.createFrom(runtimeScene.getObjects("Right"));

gdjs.Scene1Code.condition0IsTrue_0.val = false;
{
gdjs.Scene1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Scene1Code.mapOfGDgdjs_46Scene1Code_46GDGeleiaObjects1Objects, gdjs.Scene1Code.mapOfGDgdjs_46Scene1Code_46GDRightObjects1Objects, false, runtimeScene, true);
}if (gdjs.Scene1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Scene1Code.GDGeleiaObjects1 */
{for(var i = 0, len = gdjs.Scene1Code.GDGeleiaObjects1.length ;i < len;++i) {
    gdjs.Scene1Code.GDGeleiaObjects1[i].returnVariable(gdjs.Scene1Code.GDGeleiaObjects1[i].getVariables().getFromIndex(0)).setString("Left");
}
}}

}


{

gdjs.Scene1Code.GDDudeObjects1.createFrom(runtimeScene.getObjects("Dude"));
gdjs.Scene1Code.GDRightObjects1.createFrom(runtimeScene.getObjects("Right"));

gdjs.Scene1Code.condition0IsTrue_0.val = false;
{
gdjs.Scene1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Scene1Code.mapOfGDgdjs_46Scene1Code_46GDDudeObjects1Objects, gdjs.Scene1Code.mapOfGDgdjs_46Scene1Code_46GDRightObjects1Objects, false, runtimeScene, true);
}if (gdjs.Scene1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Scene1Code.GDDudeObjects1 */
{for(var i = 0, len = gdjs.Scene1Code.GDDudeObjects1.length ;i < len;++i) {
    gdjs.Scene1Code.GDDudeObjects1[i].returnVariable(gdjs.Scene1Code.GDDudeObjects1[i].getVariables().getFromIndex(0)).setString("Left");
}
}}

}


{

gdjs.Scene1Code.GDGeleiaObjects1.createFrom(runtimeScene.getObjects("Geleia"));

gdjs.Scene1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Scene1Code.GDGeleiaObjects1.length;i<l;++i) {
    if ( gdjs.Scene1Code.GDGeleiaObjects1[i].getVariableString(gdjs.Scene1Code.GDGeleiaObjects1[i].getVariables().getFromIndex(0)) == "Left" ) {
        gdjs.Scene1Code.condition0IsTrue_0.val = true;
        gdjs.Scene1Code.GDGeleiaObjects1[k] = gdjs.Scene1Code.GDGeleiaObjects1[i];
        ++k;
    }
}
gdjs.Scene1Code.GDGeleiaObjects1.length = k;}if (gdjs.Scene1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Scene1Code.GDGeleiaObjects1 */
{for(var i = 0, len = gdjs.Scene1Code.GDGeleiaObjects1.length ;i < len;++i) {
    gdjs.Scene1Code.GDGeleiaObjects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


{

gdjs.Scene1Code.GDDudeObjects1.createFrom(runtimeScene.getObjects("Dude"));

gdjs.Scene1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Scene1Code.GDDudeObjects1.length;i<l;++i) {
    if ( gdjs.Scene1Code.GDDudeObjects1[i].getVariableString(gdjs.Scene1Code.GDDudeObjects1[i].getVariables().getFromIndex(0)) == "Left" ) {
        gdjs.Scene1Code.condition0IsTrue_0.val = true;
        gdjs.Scene1Code.GDDudeObjects1[k] = gdjs.Scene1Code.GDDudeObjects1[i];
        ++k;
    }
}
gdjs.Scene1Code.GDDudeObjects1.length = k;}if (gdjs.Scene1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Scene1Code.GDDudeObjects1 */
{for(var i = 0, len = gdjs.Scene1Code.GDDudeObjects1.length ;i < len;++i) {
    gdjs.Scene1Code.GDDudeObjects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


{

gdjs.Scene1Code.GDGeleiaObjects1.createFrom(runtimeScene.getObjects("Geleia"));

gdjs.Scene1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Scene1Code.GDGeleiaObjects1.length;i<l;++i) {
    if ( gdjs.Scene1Code.GDGeleiaObjects1[i].getVariableString(gdjs.Scene1Code.GDGeleiaObjects1[i].getVariables().getFromIndex(0)) == "Right" ) {
        gdjs.Scene1Code.condition0IsTrue_0.val = true;
        gdjs.Scene1Code.GDGeleiaObjects1[k] = gdjs.Scene1Code.GDGeleiaObjects1[i];
        ++k;
    }
}
gdjs.Scene1Code.GDGeleiaObjects1.length = k;}if (gdjs.Scene1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Scene1Code.GDGeleiaObjects1 */
{for(var i = 0, len = gdjs.Scene1Code.GDGeleiaObjects1.length ;i < len;++i) {
    gdjs.Scene1Code.GDGeleiaObjects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


{

gdjs.Scene1Code.GDDudeObjects1.createFrom(runtimeScene.getObjects("Dude"));

gdjs.Scene1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Scene1Code.GDDudeObjects1.length;i<l;++i) {
    if ( gdjs.Scene1Code.GDDudeObjects1[i].getVariableString(gdjs.Scene1Code.GDDudeObjects1[i].getVariables().getFromIndex(0)) == "Right" ) {
        gdjs.Scene1Code.condition0IsTrue_0.val = true;
        gdjs.Scene1Code.GDDudeObjects1[k] = gdjs.Scene1Code.GDDudeObjects1[i];
        ++k;
    }
}
gdjs.Scene1Code.GDDudeObjects1.length = k;}if (gdjs.Scene1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Scene1Code.GDDudeObjects1 */
{for(var i = 0, len = gdjs.Scene1Code.GDDudeObjects1.length ;i < len;++i) {
    gdjs.Scene1Code.GDDudeObjects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


{


gdjs.Scene1Code.condition0IsTrue_0.val = false;
{
gdjs.Scene1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Scene1Code.condition0IsTrue_0.val) {
gdjs.Scene1Code.GDLeftObjects1.createFrom(runtimeScene.getObjects("Left"));
gdjs.Scene1Code.GDRightObjects1.createFrom(runtimeScene.getObjects("Right"));
gdjs.Scene1Code.GDcoinObjects1.createFrom(runtimeScene.getObjects("coin"));
{for(var i = 0, len = gdjs.Scene1Code.GDLeftObjects1.length ;i < len;++i) {
    gdjs.Scene1Code.GDLeftObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Scene1Code.GDRightObjects1.length ;i < len;++i) {
    gdjs.Scene1Code.GDRightObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Scene1Code.GDcoinObjects1.length ;i < len;++i) {
    gdjs.Scene1Code.GDcoinObjects1[i].hide();
}
}}

}


{


{
}

}


{

gdjs.Scene1Code.GDDudeObjects1.createFrom(runtimeScene.getObjects("Dude"));

gdjs.Scene1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Scene1Code.GDDudeObjects1.length;i<l;++i) {
    if ( gdjs.Scene1Code.GDDudeObjects1[i].getVariableString(gdjs.Scene1Code.GDDudeObjects1[i].getVariables().getFromIndex(0)) == "Right" ) {
        gdjs.Scene1Code.condition0IsTrue_0.val = true;
        gdjs.Scene1Code.GDDudeObjects1[k] = gdjs.Scene1Code.GDDudeObjects1[i];
        ++k;
    }
}
gdjs.Scene1Code.GDDudeObjects1.length = k;}if (gdjs.Scene1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Scene1Code.GDDudeObjects1 */
{for(var i = 0, len = gdjs.Scene1Code.GDDudeObjects1.length ;i < len;++i) {
    gdjs.Scene1Code.GDDudeObjects1[i].flipX(true);
}
}}

}


{

gdjs.Scene1Code.GDDudeObjects1.createFrom(runtimeScene.getObjects("Dude"));

gdjs.Scene1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Scene1Code.GDDudeObjects1.length;i<l;++i) {
    if ( gdjs.Scene1Code.GDDudeObjects1[i].getVariableString(gdjs.Scene1Code.GDDudeObjects1[i].getVariables().getFromIndex(0)) == "Left" ) {
        gdjs.Scene1Code.condition0IsTrue_0.val = true;
        gdjs.Scene1Code.GDDudeObjects1[k] = gdjs.Scene1Code.GDDudeObjects1[i];
        ++k;
    }
}
gdjs.Scene1Code.GDDudeObjects1.length = k;}if (gdjs.Scene1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Scene1Code.GDDudeObjects1 */
{for(var i = 0, len = gdjs.Scene1Code.GDDudeObjects1.length ;i < len;++i) {
    gdjs.Scene1Code.GDDudeObjects1[i].flipX(false);
}
}}

}


{

gdjs.Scene1Code.GDDudeObjects1.createFrom(runtimeScene.getObjects("Dude"));

gdjs.Scene1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Scene1Code.GDDudeObjects1.length;i<l;++i) {
    if ( gdjs.Scene1Code.GDDudeObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.Scene1Code.condition0IsTrue_0.val = true;
        gdjs.Scene1Code.GDDudeObjects1[k] = gdjs.Scene1Code.GDDudeObjects1[i];
        ++k;
    }
}
gdjs.Scene1Code.GDDudeObjects1.length = k;}if (gdjs.Scene1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Scene1Code.GDDudeObjects1 */
{for(var i = 0, len = gdjs.Scene1Code.GDDudeObjects1.length ;i < len;++i) {
    gdjs.Scene1Code.GDDudeObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.Scene1Code.GDDudeObjects1.createFrom(runtimeScene.getObjects("Dude"));

gdjs.Scene1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Scene1Code.GDDudeObjects1.length;i<l;++i) {
    if ( !(gdjs.Scene1Code.GDDudeObjects1[i].getBehavior("PlatformerObject").isJumping()) ) {
        gdjs.Scene1Code.condition0IsTrue_0.val = true;
        gdjs.Scene1Code.GDDudeObjects1[k] = gdjs.Scene1Code.GDDudeObjects1[i];
        ++k;
    }
}
gdjs.Scene1Code.GDDudeObjects1.length = k;}if (gdjs.Scene1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Scene1Code.GDDudeObjects1 */
{for(var i = 0, len = gdjs.Scene1Code.GDDudeObjects1.length ;i < len;++i) {
    gdjs.Scene1Code.GDDudeObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.Scene1Code.GDDudeObjects1.createFrom(runtimeScene.getObjects("Dude"));
gdjs.Scene1Code.GDGeleiaObjects1.createFrom(runtimeScene.getObjects("Geleia"));

gdjs.Scene1Code.condition0IsTrue_0.val = false;
gdjs.Scene1Code.condition1IsTrue_0.val = false;
{
gdjs.Scene1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Scene1Code.mapOfGDgdjs_46Scene1Code_46GDDudeObjects1Objects, gdjs.Scene1Code.mapOfGDgdjs_46Scene1Code_46GDGeleiaObjects1Objects, false, runtimeScene, false);
}if ( gdjs.Scene1Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Scene1Code.GDDudeObjects1.length;i<l;++i) {
    if ( gdjs.Scene1Code.GDDudeObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.Scene1Code.condition1IsTrue_0.val = true;
        gdjs.Scene1Code.GDDudeObjects1[k] = gdjs.Scene1Code.GDDudeObjects1[i];
        ++k;
    }
}
gdjs.Scene1Code.GDDudeObjects1.length = k;}}
if (gdjs.Scene1Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Scene1Code.GDDudeObjects1 */
{for(var i = 0, len = gdjs.Scene1Code.GDDudeObjects1.length ;i < len;++i) {
    gdjs.Scene1Code.GDDudeObjects1[i].getBehavior("PlatformerObject").setCanJump();
}
}{for(var i = 0, len = gdjs.Scene1Code.GDDudeObjects1.length ;i < len;++i) {
    gdjs.Scene1Code.GDDudeObjects1[i].getBehavior("PlatformerObject").setJumpSpeed(gdjs.Scene1Code.GDDudeObjects1[i].getBehavior("PlatformerObject").getJumpSpeed() + (2));
}
}{for(var i = 0, len = gdjs.Scene1Code.GDDudeObjects1.length ;i < len;++i) {
    gdjs.Scene1Code.GDDudeObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{

gdjs.Scene1Code.GDDudeObjects1.createFrom(runtimeScene.getObjects("Dude"));
gdjs.Scene1Code.GDcoinObjects1.createFrom(runtimeScene.getObjects("coin"));

gdjs.Scene1Code.condition0IsTrue_0.val = false;
{
gdjs.Scene1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Scene1Code.mapOfGDgdjs_46Scene1Code_46GDDudeObjects1Objects, gdjs.Scene1Code.mapOfGDgdjs_46Scene1Code_46GDcoinObjects1Objects, false, runtimeScene, false);
}if (gdjs.Scene1Code.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}}

}


{


{
gdjs.Scene1Code.GDCoinsObjects1.createFrom(runtimeScene.getObjects("Coins"));
{for(var i = 0, len = gdjs.Scene1Code.GDCoinsObjects1.length ;i < len;++i) {
    gdjs.Scene1Code.GDCoinsObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}}

}


{

gdjs.Scene1Code.GDDoorObjects1.createFrom(runtimeScene.getObjects("Door"));
gdjs.Scene1Code.GDDudeObjects1.createFrom(runtimeScene.getObjects("Dude"));

gdjs.Scene1Code.condition0IsTrue_0.val = false;
gdjs.Scene1Code.condition1IsTrue_0.val = false;
{
gdjs.Scene1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Scene1Code.mapOfGDgdjs_46Scene1Code_46GDDudeObjects1Objects, gdjs.Scene1Code.mapOfGDgdjs_46Scene1Code_46GDDoorObjects1Objects, false, runtimeScene, false);
}if ( gdjs.Scene1Code.condition0IsTrue_0.val ) {
{
gdjs.Scene1Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) >= 100;
}}
if (gdjs.Scene1Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Scene2", false);
}}

}


{


gdjs.Scene1Code.condition0IsTrue_0.val = false;
{
gdjs.Scene1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) >= 100;
}if (gdjs.Scene1Code.condition0IsTrue_0.val) {
gdjs.Scene1Code.GDDoorObjects1.createFrom(runtimeScene.getObjects("Door"));
{for(var i = 0, len = gdjs.Scene1Code.GDDoorObjects1.length ;i < len;++i) {
    gdjs.Scene1Code.GDDoorObjects1[i].setAnimation(1);
}
}}

}


{


gdjs.Scene1Code.condition0IsTrue_0.val = false;
{
gdjs.Scene1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) < 100;
}if (gdjs.Scene1Code.condition0IsTrue_0.val) {
gdjs.Scene1Code.GDDoorObjects1.createFrom(runtimeScene.getObjects("Door"));
{for(var i = 0, len = gdjs.Scene1Code.GDDoorObjects1.length ;i < len;++i) {
    gdjs.Scene1Code.GDDoorObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.Scene1Code.GDDudeObjects1.createFrom(runtimeScene.getObjects("Dude"));
gdjs.Scene1Code.GDGeleiaObjects1.createFrom(runtimeScene.getObjects("Geleia"));

gdjs.Scene1Code.condition0IsTrue_0.val = false;
{
gdjs.Scene1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Scene1Code.mapOfGDgdjs_46Scene1Code_46GDDudeObjects1Objects, gdjs.Scene1Code.mapOfGDgdjs_46Scene1Code_46GDGeleiaObjects1Objects, false, runtimeScene, false);
}if (gdjs.Scene1Code.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).sub(1);
}}

}


}; //End of gdjs.Scene1Code.eventsList0xb4be0


gdjs.Scene1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Scene1Code.GDNewObjectObjects1.length = 0;
gdjs.Scene1Code.GDNewObjectObjects2.length = 0;
gdjs.Scene1Code.GDSoloObjects1.length = 0;
gdjs.Scene1Code.GDSoloObjects2.length = 0;
gdjs.Scene1Code.GDDudeObjects1.length = 0;
gdjs.Scene1Code.GDDudeObjects2.length = 0;
gdjs.Scene1Code.GDGeleiaObjects1.length = 0;
gdjs.Scene1Code.GDGeleiaObjects2.length = 0;
gdjs.Scene1Code.GDLeftObjects1.length = 0;
gdjs.Scene1Code.GDLeftObjects2.length = 0;
gdjs.Scene1Code.GDRightObjects1.length = 0;
gdjs.Scene1Code.GDRightObjects2.length = 0;
gdjs.Scene1Code.GDcoinObjects1.length = 0;
gdjs.Scene1Code.GDcoinObjects2.length = 0;
gdjs.Scene1Code.GDCoinsObjects1.length = 0;
gdjs.Scene1Code.GDCoinsObjects2.length = 0;
gdjs.Scene1Code.GDDoorObjects1.length = 0;
gdjs.Scene1Code.GDDoorObjects2.length = 0;

gdjs.Scene1Code.eventsList0xb4be0(runtimeScene);
return;

}
gdjs['Scene1Code'] = gdjs.Scene1Code;
