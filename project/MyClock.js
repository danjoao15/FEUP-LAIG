/**
 * MyClock
 * @constructor
 */



function MyClock(scene, hours, minutes, secons) {
    CGFobject.call(this, scene);

    this.angleH = 0;
    this.angleM = 0;
    this.angleS = 0;

    hours = typeof hours !== 'undefined' ? hours : 0;
    minutes = typeof minutes !== 'undefined' ? minutes : 0;
    seconds = typeof seconds !== 'undefined' ? seconds : 0;

    this.setAngleH(hours);
    this.setAngleM(minutes);
    this.setAngleS(seconds);

    this.white = new CGFappearance(this.scene);
	this.white.setAmbient(0.3,0.3,0.3,1);
	this.white.setDiffuse(0.95,0.95,0.95,1);
	this.white.setSpecular(0.5,0.5,0.5,1);
	this.white.setShininess(120);

    this.scene = scene;
    this.sides = new MyClockCylinder(scene,12,5,0.2,0.6);
    this.top = new MyCircle(scene,12, 0.6);
    this.hours = new MyClockHand(scene,0.3,1);
    this.minutes = new MyClockHand(scene,0.45,0.5);
    this.seconds = new MyClockHand(scene,0.55,0.25);
    this.time = -1;

  this.clockAppearance = new CGFappearance(this.scene);
  this.clockAppearance.setTextureWrap("CLAMP_TO_EDGE","CLAMP_TO_EDGE");
	this.clockAppearance.setAmbient(0.3,0.3,0.3,1);
	this.clockAppearance.setDiffuse(0.7,0.7,0.7,1);
	this.clockAppearance.setSpecular(0.5,0.5,0.5,1);
	this.clockAppearance.setShininess(120);
	this.clockAppearance.loadTexture("../resources/images/clock.png");

  this.pointers = new CGFappearance(this.scene);
  this.pointers.setTextureWrap("CLAMP_TO_EDGE","CLAMP_TO_EDGE");
	this.pointers.setAmbient(0.3,0.3,0.3,1);
	this.pointers.setDiffuse(0.7,0.7,0.7,1);
	this.pointers.setSpecular(0.5,0.5,0.5,1);
	this.pointers.setShininess(120);
	this.pointers.loadTexture("../resources/images/darkwood.png");

}
;
MyClock.prototype = Object.create(CGFobject.prototype);
MyClock.prototype.constructor = MyClock;

MyClock.prototype.setAngleH = function(a) {
    this.angleH = a;
}
MyClock.prototype.setAngleM = function(a) {
    this.angleM = a;
}
MyClock.prototype.setAngleS = function(a) {
    this.angleS = a;
}

MyClock.prototype.update = function() {

    this.setAngleH(this.angleH + 360 / 60 / 60 / 60);
    this.setAngleM(this.angleM + 360 / 60 / 60);
    this.setAngleS(this.angleS + 360 / 60);

}

MyClock.prototype.display = function() {

    var degToRad = Math.PI / 180.0;

    this.scene.pushMatrix();
    this.white.apply();
    this.sides.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.translate(0, 0, 1);
    this.scene.rotate(45*degToRad,0,0,0);
    this.clockAppearance.apply();
    this.top.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.translate(0, 0, 1.1);
    this.scene.rotate(-this.angleH * degToRad + 180 * degToRad, 0, 0, 1);
    this.pointers.apply();
    this.hours.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.translate(0, 0, 1.1);
    this.scene.rotate(-this.angleM * degToRad + 180 * degToRad, 0, 0, 1);
    this.pointers.apply();
    this.minutes.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.translate(0, 0, 1.1);
    this.scene.rotate(-this.angleS * degToRad, 0, 0, 1);
    this.pointers.apply();
    this.seconds.display();
    this.scene.popMatrix();

    this.primitiveType = this.scene.gl.TRIANGLES;

}
;
