/**
 * Floor
 * @constructor
 */
 //Floor(scene)
 function Floor(scene) {
 	CGFobject.call(this,scene);

//   	this.initBuffers();
    this.square = new MyRectangle(this.scene,[-0.5,0.5,0.5,-0.5]);
    this.circle = new MyCircle(this.scene,96,0.55);


  this.light = new CGFappearance(this.scene);
 	this.light.loadTexture("../resources/images/chess.png");
 	this.light.setTextureWrap("CLAMP_TO_EDGE","CLAMP_TO_EDGE");
	this.light.setDiffuse(0.9,0.9,0.9,1);
	this.light.setSpecular(0.1,0.1,0.1,1);
	this.light.setShininess(30);

  this.dark = new CGFappearance(this.scene);
 	this.dark.loadTexture("../resources/images/wood_chess.png");
 	this.dark.setTextureWrap("CLAMP_TO_EDGE","CLAMP_TO_EDGE");
	this.dark.setDiffuse(0.9,0.9,0.9,1);
	this.dark.setSpecular(0.1,0.1,0.1,1);
	this.dark.setShininess(30);


  this.skins = [];
	this.skins[0]=[];
	this.skins[1]=[];
	this.skins[1]=[this.light];
	this.skins[0]=[this.dark];
 };

 Floor.prototype.display = function(){
   this.scene.pushMatrix();
     this.skins[this.scene.currentSkin][0].apply();
   if(this.scene.currentSkin == 0){this.square.display();}
   if(this.scene.currentSkin == 1){
     this.scene.scale(1.25,1.25,1);
     this.circle.display();}


//   if(this.scene.currentSkin == 0) this.scene.scale(0.5,0.5,0.5);
//    this.skins[this.scene.currentSkin][0].apply();
//    this.table.display();
   this.scene.popMatrix();
 }
