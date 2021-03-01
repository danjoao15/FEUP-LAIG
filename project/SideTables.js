/**
 * SideTables
 * @constructor
 */
 //SideTables(scene)
 function SideTables(scene) {
 	CGFobject.call(this,scene);

//   	this.initBuffers();
    this.cube = new MyUnitCubeQuad(this.scene);


  this.white = new CGFappearance(this.scene);
 	this.white.loadTexture("../resources/images/whitetable.jpg");
 	this.white.setTextureWrap("CLAMP_TO_EDGE","CLAMP_TO_EDGE");
	this.white.setDiffuse(0.9,0.9,0.9,1);
	this.white.setSpecular(0.1,0.1,0.1,1);
	this.white.setShininess(30);

  this.black = new CGFappearance(this.scene);
 	this.black.loadTexture("../resources/images/blacktable.png");
 	this.black.setTextureWrap("CLAMP_TO_EDGE","CLAMP_TO_EDGE");
	this.black.setDiffuse(0.9,0.9,0.9,1);
	this.black.setSpecular(0.1,0.1,0.1,1);
	this.black.setShininess(30);

  this.blue = new CGFappearance(this.scene);
 	this.blue.loadTexture("../resources/images/bluetable.jpg");
 	this.blue.setTextureWrap("CLAMP_TO_EDGE","CLAMP_TO_EDGE");
	this.blue.setDiffuse(0.9,0.9,0.9,1);
	this.blue.setSpecular(0.1,0.1,0.1,1);
	this.blue.setShininess(30);

  this.red = new CGFappearance(this.scene);
 	this.red.loadTexture("../resources/images/redtable.jpg");
 	this.red.setTextureWrap("CLAMP_TO_EDGE","CLAMP_TO_EDGE");
	this.red.setDiffuse(0.9,0.9,0.9,1);
	this.red.setSpecular(0.1,0.1,0.1,1);
	this.red.setShininess(30);


  this.skins = [];
	this.skins[0]=[];
	this.skins[1]=[];
	this.skins[1]=[this.blue,this.red];
	this.skins[0]=[this.white,this.black];
 };

 SideTables.prototype.display = function(){

/*   this.scene.pushMatrix();
    this.scene.translate(-2.5,0.5,12);
    this.scene.scale(15,1,4);
    this.skins[this.scene.currentSkin][1].apply();
    this.cube.display();
   this.scene.popMatrix();

   this.scene.pushMatrix();
    this.scene.rotate(-90*degToRad,0,1,0);
    this.scene.translate(2.5,0.5,12);
    this.scene.scale(15,1,4);
    this.skins[this.scene.currentSkin][1].apply();
    this.cube.display();
   this.scene.popMatrix();*/

   this.scene.pushMatrix();
    this.skins[this.scene.currentSkin][0].apply();
    this.scene.rotate(-90*degToRad,0,1,0);
    this.scene.translate(11.75,0.5,6);
    this.scene.scale(4,1,4);
    this.cube.display();
    this.scene.translate(0,0,-1);
    this.cube.display();
    this.scene.translate(0,0,-1);
    this.cube.display();
    this.scene.translate(0,0,-1);
    this.cube.display();
   this.scene.popMatrix();

   this.scene.pushMatrix();
    this.skins[this.scene.currentSkin][1].apply();
    this.scene.rotate(-90*degToRad,0,1,0);
    this.scene.translate(-11.75,0.5,-6);
    this.scene.scale(4,1,4);
    this.cube.display();
    this.scene.translate(0,0,1);
    this.cube.display();
    this.scene.translate(0,0,1);
    this.cube.display();
    this.scene.translate(0,0,1);
    this.cube.display();
   this.scene.popMatrix();

 }
