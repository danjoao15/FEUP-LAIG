/**
 * Table
 * @constructor
 */
 //Table(scene)
 function Table(scene, id,i) {
 	CGFobject.call(this,scene);

//   	this.initBuffers();

    this.id = id;
    this.i = i;
    this.table0 = new MyCylinder(this.scene,[1,2,2,1,96,1,1]);
    this.table1 = new MyCylinder(this.scene,[1,1.5,2,1,96,1,1]);

    this.plate0 = new MyPlate(this.scene,this.scene.tables[this.i][0][0],this.scene.tables[this.i][0][1],this.scene.tables[this.i][0][2]);
    this.plate1 = new MyPlate(this.scene,this.scene.tables[this.i][1][0],this.scene.tables[this.i][1][1],this.scene.tables[this.i][1][2]);
    this.plate2 = new MyPlate(this.scene,this.scene.tables[this.i][2][0],this.scene.tables[this.i][2][1],this.scene.tables[this.i][2][2]);
    this.plate4 = new MyPlate(this.scene,this.scene.tables[this.i][3][0],this.scene.tables[this.i][3][1],this.scene.tables[this.i][3][2]);
    this.plate3 = new MyPlate(this.scene,this.scene.tables[this.i][4][0],this.scene.tables[this.i][4][1],this.scene.tables[this.i][4][2]);
    this.plate5 = new MyPlate(this.scene,this.scene.tables[this.i][5][0],this.scene.tables[this.i][5][1],this.scene.tables[this.i][5][2]);
    this.plate6 = new MyPlate(this.scene,this.scene.tables[this.i][6][0],this.scene.tables[this.i][6][1],this.scene.tables[this.i][6][2]);
    this.plate7 = new MyPlate(this.scene,this.scene.tables[this.i][7][0],this.scene.tables[this.i][7][1],this.scene.tables[this.i][7][2]);
    this.plate8 = new MyPlate(this.scene,this.scene.tables[this.i][8][0],this.scene.tables[this.i][8][1],this.scene.tables[this.i][8][2]);


  this.light = new CGFappearance(this.scene);
 	this.light.loadTexture("../resources/images/lightwood.jpg");
 	this.light.setTextureWrap("CLAMP_TO_EDGE","CLAMP_TO_EDGE");
	this.light.setDiffuse(0.9,0.9,0.9,1);
	this.light.setSpecular(0.1,0.1,0.1,1);
	this.light.setShininess(30);

  this.dark = new CGFappearance(this.scene);
 	this.dark.loadTexture("../resources/images/wood3.jpg");
 	this.dark.setTextureWrap("CLAMP_TO_EDGE","CLAMP_TO_EDGE");
	this.dark.setDiffuse(0.9,0.9,0.9,1);
	this.dark.setSpecular(0.1,0.1,0.1,1);
	this.dark.setShininess(30);




  this.skins = [];
	this.skins[0]=[];
	this.skins[1]=[];
	this.skins[1]=[this.light,this.whiteplate];
	this.skins[0]=[this.dark,this.redplate];
 };

 Table.prototype.display = function(){
   this.scene.pushMatrix();
//   if(this.scene.currentSkin == 0) this.scene.scale(0.5,0.5,0.5);
    this.skins[this.scene.currentSkin][0].apply();
    if(this.scene.currentSkin == 0){this.table0.display();}
    if(this.scene.currentSkin == 1){this.table1.display();}
   this.scene.popMatrix();

   this.scene.pushMatrix();
    this.scene.translate(0,0,1);
    this.scene.registerForPick(this.id+0, this.plate0);
    this.plate0.display();
   this.scene.popMatrix();

   this.scene.pushMatrix();
     this.scene.translate(-1.3,0,1);
     this.scene.registerForPick(this.id+1, this.plate1);
     this.plate1.display();
   this.scene.popMatrix();

      this.scene.pushMatrix();
       this.scene.translate(-0.92,0.92,1);
       this.scene.registerForPick(this.id+3, this.plate2);
       this.plate2.display();
      this.scene.popMatrix();

      this.scene.pushMatrix();
       this.scene.translate(-0.92,-0.92,1);
       this.scene.registerForPick(this.id+2, this.plate3);
       this.plate3.display();
      this.scene.popMatrix();

   this.scene.pushMatrix();
    this.scene.translate(0,1.3,1);
    this.scene.registerForPick(this.id+5, this.plate4);
    this.plate4.display();
   this.scene.popMatrix();

   this.scene.pushMatrix();
    this.scene.translate(0,-1.3,1);
    this.scene.registerForPick(this.id+4, this.plate5);
    this.plate5.display();
   this.scene.popMatrix();


   this.scene.pushMatrix();
    this.scene.translate(0.92,0.92,1);
    this.scene.registerForPick(this.id+7, this.plate6);
    this.plate6.display();
   this.scene.popMatrix();


   this.scene.pushMatrix();
    this.scene.translate(0.92,-0.92,1);
    this.scene.registerForPick(this.id+6, this.plate7);
    this.plate7.display();
   this.scene.popMatrix();

      this.scene.pushMatrix();
       this.scene.translate(1.3,0,1);
       this.scene.registerForPick(this.id+8, this.plate8);
       this.plate8.display();
      this.scene.popMatrix();
 }
