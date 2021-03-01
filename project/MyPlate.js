/**
 * MyPlate
 * @constructor
 */
 //MyPlate(scene)
 function MyPlate(scene,x,y,z) {
 	CGFobject.call(this,scene);

//   	this.initBuffers();
  this.x=x;
  this.y=y;
  this.z=z;

  this.sides = new MyCylinder(this.scene,[0.05,0.46,0.5,1,96,0,1]);
  this.top = new MyCircle(this.scene,96,0.5);

  this.whiteplate = new CGFappearance(this.scene);
 	this.whiteplate.loadTexture("../resources/images/plate2.jpg");
 	this.whiteplate.setTextureWrap("CLAMP_TO_EDGE","CLAMP_TO_EDGE");
	this.whiteplate.setDiffuse(0.9,0.9,0.9,1);
	this.whiteplate.setSpecular(0.1,0.1,0.1,1);
	this.whiteplate.setShininess(30);

  this.redplate = new CGFappearance(this.scene);
 	this.redplate.loadTexture("../resources/images/decor4.jpg");
 	this.redplate.setTextureWrap("CLAMP_TO_EDGE","CLAMP_TO_EDGE");
	this.redplate.setDiffuse(0.9,0.9,0.9,1);
	this.redplate.setSpecular(0.1,0.1,0.1,1);
	this.redplate.setShininess(30);

  this.red = new CGFappearance(this.scene);
	this.red.setAmbient(0.3,0.3,0.3,1);
	this.red.setDiffuse(0.55,0.1,0.1,1);
	this.red.setSpecular(0.5,0.5,0.5,1);
	this.red.setShininess(60);

  this.white = new CGFappearance(this.scene);
	this.white.setAmbient(0.3,0.3,0.3,1);
	this.white.setDiffuse(0.7,0.7,0.7,1);
	this.white.setSpecular(0.5,0.5,0.5,1);
	this.white.setShininess(60);


  this.skins = [];
	this.skins[0]=[];
	this.skins[1]=[];
	this.skins[0]=[this.redplate, this.white];
	this.skins[1]=[this.whiteplate, this.white];
 };

 MyPlate.prototype.display = function(){
   this.scene.pushMatrix();
    this.skins[this.scene.currentSkin][1].apply();
    this.sides.display();
   this.scene.popMatrix();

   this.scene.pushMatrix();
    this.scene.translate(0,0,0.05);
    this.skins[this.scene.currentSkin][0].apply();
    this.top.display();
   this.scene.popMatrix();

 }
