/**
 * BlackPiece
 * @constructor
 */
 //BlackPiece(scene)
 function BlackPiece(scene,x,y,z) {
 	CGFobject.call(this,scene);

//   	this.initBuffers();

  this.x=x;
  this.y=y;
  this.z=z;

  this.sides = new MyCylinder(this.scene,[0.2,0.45,0.45,1,96,0,1]);
  this.top = new MyCircle(this.scene,96,0.45);

  this.blackT = new CGFappearance(this.scene);
 	this.blackT.loadTexture("../resources/images/blackpiece.jpg");
 	this.blackT.setTextureWrap("CLAMP_TO_EDGE","CLAMP_TO_EDGE");
	this.blackT.setDiffuse(0.9,0.9,0.9,1);
	this.blackT.setSpecular(0.1,0.1,0.1,1);
	this.blackT.setShininess(30);

  this.redT = new CGFappearance(this.scene);
 	this.redT.loadTexture("../resources/images/redpiece.jpg");
 	this.redT.setTextureWrap("CLAMP_TO_EDGE","CLAMP_TO_EDGE");
	this.redT.setDiffuse(0.9,0.9,0.9,1);
	this.redT.setSpecular(0.1,0.1,0.1,1);
	this.redT.setShininess(30);

  this.red = new CGFappearance(this.scene);
	this.red.setAmbient(0.3,0.3,0.3,1);
	this.red.setDiffuse(0.55,0.1,0.1,1);
	this.red.setSpecular(0.5,0.5,0.5,1);
	this.red.setShininess(60);

  this.black = new CGFappearance(this.scene);
	this.black.setAmbient(0.3,0.3,0.3,1);
	this.black.setDiffuse(0.1,0.1,0.1,1);
	this.black.setSpecular(0.5,0.5,0.5,1);
	this.black.setShininess(60);


  this.skins = [];
	this.skins[0]=[];
	this.skins[1]=[];
	this.skins[0]=[this.blackT, this.black];
	this.skins[1]=[this.redT, this.red];
 };

 BlackPiece.prototype.display = function(){
   this.scene.pushMatrix();
if(this.scene.currentSkin == 1) this.scene.scale(0.8,0.8,2);
    this.skins[this.scene.currentSkin][1].apply();
    this.sides.display();
   this.scene.popMatrix();

   this.scene.pushMatrix();
if(this.scene.currentSkin == 1){ this.scene.scale(0.8,0.8,1);this.scene.translate(0,0,0.2);}
    this.scene.translate(0,0,0.2);
    this.skins[this.scene.currentSkin][0].apply();
    this.top.display();
   this.scene.popMatrix();

 }

 BlackPiece.prototype.set = function(x,y,z){
    this.x=x;
    this.y=y;
    this.z=z;
 }
