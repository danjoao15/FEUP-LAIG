/**
 * WhitePiece
 * @constructor
 */
 //WhitePiece(scene)
 function WhitePiece(scene,x,y,z) {
 	CGFobject.call(this,scene);

//   	this.initBuffers();

  this.x=x;
  this.y=y;
  this.z=z;

  this.sides = new MyCylinder(this.scene,[0.2,0.45,0.45,1,96,0,1]);
  this.top = new MyCircle(this.scene,96,0.45);

  this.whiteT = new CGFappearance(this.scene);
 	this.whiteT.loadTexture("../resources/images/whitepiece.jpg");
 	this.whiteT.setTextureWrap("CLAMP_TO_EDGE","CLAMP_TO_EDGE");
	this.whiteT.setDiffuse(0.9,0.9,0.9,1);
	this.whiteT.setSpecular(0.1,0.1,0.1,1);
	this.whiteT.setShininess(30);

  this.blueT = new CGFappearance(this.scene);
 	this.blueT.loadTexture("../resources/images/bluepiece.jpg");
 	this.blueT.setTextureWrap("CLAMP_TO_EDGE","CLAMP_TO_EDGE");
	this.blueT.setDiffuse(0.9,0.9,0.9,1);
	this.blueT.setSpecular(0.1,0.1,0.1,1);
	this.blueT.setShininess(30);

  this.blue = new CGFappearance(this.scene);
	this.blue.setAmbient(0.3,0.3,0.3,1);
	this.blue.setDiffuse(0.1,0.1,0.55,1);
	this.blue.setSpecular(0.5,0.5,0.5,1);
	this.blue.setShininess(60);

  this.white = new CGFappearance(this.scene);
	this.white.setAmbient(0.3,0.3,0.3,1);
	this.white.setDiffuse(0.7,0.7,0.7,1);
	this.white.setSpecular(0.5,0.5,0.5,1);
	this.white.setShininess(60);


  this.skins = [];
	this.skins[0]=[];
	this.skins[1]=[];
	this.skins[0]=[this.whiteT, this.white];
	this.skins[1]=[this.blueT, this.blue];
 };

 WhitePiece.prototype.display = function(){
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


  WhitePiece.prototype.set = function(x,y,z){
     this.x=x;
     this.y=y;
     this.z=z;
  }
