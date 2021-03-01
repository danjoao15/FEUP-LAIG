var degToRad = Math.PI / 180.0;

var time=-1;

/*
var BOARD_WIDTH = 6.0;
var BOARD_HEIGHT = 4.0;
var BOARD_A_DIVISIONS = 30;
var BOARD_B_DIVISIONS = 100;
*/
function MyScene() {
    CGFscene.call(this);
}

MyScene.prototype = Object.create(CGFscene.prototype);
MyScene.prototype.constructor = MyScene;
/*
MyScene.prototype.Controls = function ()
{ console.log("Controls..."); };*/



MyScene.prototype.init = function(application) {
    CGFscene.prototype.init.call(this, application);
    this.matrix = new Matrix(this);
	  this.light1=true; this.light2=true; this.light3=true;
    this.light4=true; this.light5=true; this.light6=true;
    this.lightsGUI = new Array(6);
    this.enableClock1 = true;
    this.enableClock2 = false;

    this.Start=function(){

    }


	this.currentSkin=0;

  this.setPickEnabled(true);

	this.enableTextures(true);

	this.initCameras();

    this.initLights();

    this.gl.clearColor(0.1, 0.1, 0.1, 1.0);
    this.gl.clearDepth(100.0);
    this.gl.enable(this.gl.DEPTH_TEST);
    this.gl.enable(this.gl.CULL_FACE);
    this.gl.depthFunc(this.gl.LEQUAL);

    this.axis = new CGFaxis(this);

    this.value = 0;

    this.whitepieces = [];
    this.blackpieces = [];
/*
    for(var i = 0; i<42; i++){
      var piece = new WhitePiece(this,0,0,0);
      this.whitepieces.push(piece);
    }
*/

/*
    //white pieces
    this.pushMatrix();
      this.rotate(-90*degToRad,1,0,0);
      this.translate(-8.25,10.6,1);
      for(var i =0; i<14;i++){
        this.translate(1.1,0,0);
        this.registerForPick(i+201, this.whitepieces[i]);
        this.whitepieces[i].display();
      }
      this.translate(-15.4,1.2,0);
      for(var i =14; i<28;i++){
        this.translate(1.1,0,0);
        this.registerForPick(i+201, this.whitepieces[i]);
        this.whitepieces[i].display();
      }
      this.translate(-15.4,1.2,0);
      for(var i =28; i<42;i++){
        this.translate(1.1,0,0);
        this.registerForPick(i+201, this.whitepieces[i]);
        this.whitepieces[i].display();
      }
    this.popMatrix();
*/
/*    for(var i = 0; i<42; i++){
      var piece = new BlackPiece(this,0,0,0);
      this.blackpieces.push(piece);
    }*/

    for(var i = 0; i<14; i++){
      var piece = new BlackPiece(this,-7.15+1.1*i,-10.6,1);
      this.blackpieces.push(piece);
    }

    for(var i = 14; i<28; i++){
      var piece = new BlackPiece(this,-22.55+1.1*i,-11.8,1);
      this.blackpieces.push(piece);
    }

    for(var i = 28; i<42; i++){
      var piece = new BlackPiece(this,-37.95+1.1*i,-13,1);
      this.blackpieces.push(piece);
    }

    for(var i = 0; i<14; i++){
      var piece = new WhitePiece(this,-7.15+1.1*i,10.6,1);
      this.whitepieces.push(piece);
    }

    for(var i = 14; i<28; i++){
      var piece = new WhitePiece(this,-22.55+1.1*i,11.8,1);
      this.whitepieces.push(piece);
    }

    for(var i = 28; i<42; i++){
      var piece = new WhitePiece(this,-37.95+1.1*i,13,1);
      this.whitepieces.push(piece);
    }



    this.table0 = [];
    this.table0[0] = [0,0,1];
    this.table0[1] = [-1.3,0,1];
    this.table0[2] = [-0.92,0.92,1];
    this.table0[4] = [-0.92,-0.92,1];
    this.table0[3] = [0,1.3,1];
    this.table0[5] = [0,-1.3,1];
    this.table0[6] = [0.92,0.92,1];
    this.table0[7] = [0.92,-0.92,1];
    this.table0[8] = [1.3,0,1];

    this.table1 = [];
    this.table1[0] = [-6,0,1];
    this.table1[1] = [-7.3,0,1];
    this.table1[2] = [-6.92,0.92,1];
    this.table1[4] = [-6.92,-0.92,1];
    this.table1[3] = [-6,1.3,1];
    this.table1[5] = [-6,-1.3,1];
    this.table1[6] = [-5.08,0.92,1];
    this.table1[7] = [-5.08,-0.92,1];
    this.table1[8] = [-4.7,0,1];

    this.table3 = [];
    this.table3[0] = [-4.24,4.24,1];
    this.table3[1] = [-5.54,4.24,1];
    this.table3[2] = [-5.16,5.16,1];
    this.table3[4] = [-5.16,3.32,1];
    this.table3[3] = [-4.24,5.54,1];
    this.table3[5] = [-4.24,2.94,1];
    this.table3[6] = [-3.32,5.16,1];
    this.table3[7] = [-3.32,3.32,1];
    this.table3[8] = [-2.94,4.24,1];

    this.table2 = [];
    this.table2[0] = [-4.24,-4.24,1];
    this.table2[1] = [-5.54,-4.24,1];
    this.table2[2] = [-5.16,-3.32,1];
    this.table2[4] = [-5.16,-5.16,1];
    this.table2[3] = [-4.24,-2.94,1];
    this.table2[5] = [-4.24,-5.54,1];
    this.table2[6] = [-3.32,-3.32,1];
    this.table2[7] = [-3.32,-5.16,1];
    this.table2[8] = [-2.94,-4.24,1];

    this.table5 = [];
    this.table5[0] = [0,6,1];
    this.table5[1] = [-1.3,6,1];
    this.table5[2] = [-0.92,6.92,1];
    this.table5[4] = [-0.92,5.08,1];
    this.table5[3] = [0,7.3,1];
    this.table5[5] = [0,4.7,1];
    this.table5[6] = [0.92,6.92,1];
    this.table5[7] = [0.92,5.08,1];
    this.table5[8] = [1.3,6,1];

    this.table4 = [];
    this.table4[0] = [0,-6,1];
    this.table4[1] = [-1.3,-6,1];
    this.table4[2] = [-0.92,-5.08,1];
    this.table4[4] = [-0.92,-6.92,1];
    this.table4[3] = [0,-4.7,1];
    this.table4[5] = [0,-7.3,1];
    this.table4[6] = [0.92,-5.08,1];
    this.table4[7] = [0.92,-6.92,1];
    this.table4[8] = [1.3,-6,1];

    this.table7 = [];
    this.table7[0] = [4.24,4.24,1];
    this.table7[1] = [2.94,4.24,1];
    this.table7[2] = [3.32,5.16,1];
    this.table7[4] = [3.32,3.32,1];
    this.table7[3] = [4.24,5.54,1];
    this.table7[5] = [4.24,2.94,1];
    this.table7[6] = [5.16,5.16,1];
    this.table7[7] = [5.16,3.32,1];
    this.table7[8] = [5.54,4.24,1];

    this.table6 = [];
    this.table6[0] = [4.24,-4.24,1];
    this.table6[1] = [2.94,-4.24,1];
    this.table6[4] = [3.32,-5.16,1];
    this.table6[2] = [3.32,-3.32,1];
    this.table6[5] = [4.24,-5.54,1];
    this.table6[3] = [4.24,-2.94,1];
    this.table6[7] = [5.16,-5.16,1];
    this.table6[6] = [5.16,-3.32,1];
    this.table6[8] = [5.54,-4.24,1];

    this.table8 = [];
    this.table8[0] = [6,0,1];
    this.table8[1] = [4.7,0,1];
    this.table8[2] = [5.08,0.92,1];
    this.table8[4] = [5.08,-0.92,1];
    this.table8[3] = [6,1.3,1];
    this.table8[5] = [6,-1.3,1];
    this.table8[6] = [6.92,0.92,1];
    this.table8[7] = [6.92,-0.92,1];
    this.table8[8] = [7.3,0,1];

    this.tables = [];
    this.tables[0] = this.table0;
    this.tables[1] = this.table1;
    this.tables[2] = this.table2;
    this.tables[3] = this.table3;
    this.tables[4] = this.table4;
    this.tables[5] = this.table5;
    this.tables[6] = this.table6;
    this.tables[7] = this.table7;
    this.tables[8] = this.table8;

  // SCENE ELEMENTS

  //Floor
  this.floor = new Floor(this);

  //Tables
  this.t0 = new Table(this,90,0);
  this.t1 = new Table(this,10,1);
  this.t2 = new Table(this,20,2);
  this.t3 = new Table(this,30,3);
  this.t4 = new Table(this,40,4);
  this.t5 = new Table(this,50,5);
  this.t6 = new Table(this,60,6);
  this.t7 = new Table(this,70,7);
  this.t8 = new Table(this,80,8);


  //Side Tables
  this.sidetables = new SideTables(this);

  //pieces
  this.bpiece = new BlackPiece(this);
  this.wpiece = new WhitePiece(this);

  //Extras
  this.clock1 = new MyClock(this,180,180,180);

  this.clock2 = new MyClock(this,180,180,180);



    // Materials
  this.materialDefault = new CGFappearance(this);


	this.blue = new CGFappearance(this);
	this.blue.setAmbient(0.3,0.3,0.3,1);
	this.blue.setDiffuse(0.25,0.45,0.95,1);
	this.blue.setSpecular(0.5,0.5,0.5,1);
	this.blue.setShininess(120);

	this.skins = {};
	this.skins["B&W"] = 0;
	this.skins["R&B"] = 1;

this.activepiece = 1;
this.w = 0;
this.b = 0;

	this.setUpdatePeriod(50);
};

MyScene.prototype.initCameras = function() {
    this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(30, 60, 0), vec3.fromValues(0, 0, 0));
/*    this.camera2 = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(40, 40, 30), vec3.fromValues(0, 0, 0));
    this.camera3 = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(40, -40, 30), vec3.fromValues(0, 0, 0));
*/
};

MyScene.prototype.setactivepiece = function(value){
  this.activepiece=value;
}


MyScene.prototype.logPicking = function ()
{
	if (this.pickMode == false) {
		if (this.pickResults != null && this.pickResults.length > 0) {
			for (var i=0; i< this.pickResults.length; i++) {
				var obj = this.pickResults[i][0];
				if (obj)
				{
					var customId = this.pickResults[i][1];
					console.log("Picked object with id " + customId);
				}
        if (customId < 100){
          if(this.activepiece==0){
            this.whitepieces[this.w].set(this.pickResults[i][0].x,this.pickResults[i][0].y,this.pickResults[i][0].z);
            this.setactivepiece(1);
            this.w++;
            this.enableClock1=true;
            this.enableClock2=false;
          }
          else
          if(this.activepiece==1){
            this.blackpieces[this.b].set(this.pickResults[i][0].x,this.pickResults[i][0].y,this.pickResults[i][0].z);
            this.setactivepiece(0);
            this.b++;
            this.enableClock1=false;
            this.enableClock2=true;
          }
        };
			}
			this.pickResults.splice(0,this.pickResults.length);
		}
	}
}


MyScene.prototype.initLights = function() {
    this.setGlobalAmbientLight(0.1, 0.1, 0.1, 1.0);

    // Positions for four lights
    this.lights[0].setPosition(0, 5, 0, 1);
    this.lights[0].setVisible(false);

    this.lights[1].setPosition(5, 4, 5, 1.0);
    this.lights[1].setVisible(false);

	this.lights[2].setPosition(-5, 4, 5, 1.0);
	this.lights[2].setVisible(false);

	this.lights[3].setPosition(5, 4, -5, 1.0);
    this.lights[3].setVisible(false);

    this.lights[4].setPosition(-5, 4, -5, 1.0);
    this.lights[4].setVisible(false);

    this.lights[5].setPosition(0, -10, 0, 1.0);
    this.lights[5].setVisible(false);


  this.lights[0].setAmbient(0, 0, 0, 1);
	this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
	this.lights[0].setSpecular(1,1,1,1);
	this.lights[0].enable();

  this.lights[1].setAmbient(0, 0, 0, 1);
	this.lights[1].setDiffuse(1.0, 1.0, 1.0, 1.0);
	this.lights[1].setSpecular(1,1,1,1);
	this.lights[1].enable();

  this.lights[2].setAmbient(0, 0, 0, 1);
	this.lights[2].setDiffuse(1.0, 1.0, 1.0, 1.0);
	this.lights[2].setSpecular(1,1,1,1);
	this.lights[2].enable();

  this.lights[3].setAmbient(0, 0, 0, 1);
	this.lights[3].setDiffuse(1.0, 1.0, 1.0, 1.0);
	this.lights[3].setSpecular(1,1,1,1);
	this.lights[3].enable();

  this.lights[4].setAmbient(0, 0, 0, 1);
	this.lights[4].setDiffuse(1.0, 1.0, 1.0, 1.0);
	this.lights[4].setSpecular(1,1,1,1);
	this.lights[4].enable();

  this.lights[5].setAmbient(0, 0, 0, 1);
	this.lights[5].setDiffuse(1.0, 1.0, 1.0, 1.0);
	this.lights[5].setSpecular(1,1,1,1);
	this.lights[5].enable();
};

MyScene.prototype.updateLights = function() {
    this.lightsGUI[0] = this.light1;
    this.lightsGUI[1] = this.light2;
    this.lightsGUI[2] = this.light3;
    this.lightsGUI[3] = this.light4;
    this.lightsGUI[4] = this.light5;
    this.lightsGUI[5] = this.light6;
    for (i = 0; i < this.lights.length; i++){
        this.lights[i].update();
        if (this.lightsGUI[i]){
            this.lights[i].enable();
        }
        else{
            this.lights[i].disable();
        }
        this.lights[i].setVisible(this.lightsGUI[i]);
    }

}

MyScene.prototype.update = function(currTime) {

	var time = Math.floor(currTime/1000);
	this.lastTime = this.lastTime || 0;
    this.timePassed = currTime - this.lastTime;
	this.lastTime=currTime;
	if(this.time == -1){
		this.time = time;
	}else
	{
  if(this.time!=time){
		if(this.enableClock1){
			this.clock1.update();
		}
    if(this.enableClock2){
			this.clock2.update();
		}
    this.time=time;}
	}
}


MyScene.prototype.display = function() {
    // ---- BEGIN Background, camera and axis setup

    // Clear image and depth buffer everytime we update the scene
    this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
    this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);

    this.logPicking();
  	this.clearPickRegistration();

    // Initialize Model-View matrix as identity (no transformation)
    this.updateProjectionMatrix();
    this.loadIdentity();

    // Apply transformations corresponding to the camera position relative to the origin
    this.applyViewMatrix();

    // Update all lights used
    this.updateLights();

    //this.shader.bind();

    // Draw axis
  //  this.axis.display();

    this.materialDefault.apply();

    // ---- END Background, camera and axis setup


    // ---- BEGIN Geometric transformation section

    // ---- END Geometric transformation section


    // ---- BEGIN Primitive drawing section
/*
  // White piece
  this.pushMatrix();
    this.rotate(-90*degToRad,1,0,0);
    this.translate(this.wpiece.x,this.wpiece.y,this.wpiece.z);
    this.wpiece.display();
  this.popMatrix();

  // Black piece
  this.pushMatrix();
    this.rotate(-90*degToRad,1,0,0);
    this.translate(this.bpiece.x,this.bpiece.y,this.bpiece.z);
    this.bpiece.display();
  this.popMatrix();
*/
for(var i =0; i<42;i++){
  this.pushMatrix();
    this.rotate(-90*degToRad,1,0,0);
    this.translate(this.blackpieces[i].x,this.blackpieces[i].y,this.blackpieces[i].z);
    this.blackpieces[i].display();
  this.popMatrix();
}

for(var i =0; i<42;i++){
  this.pushMatrix();
    this.rotate(-90*degToRad,1,0,0);
    this.translate(this.whitepieces[i].x,this.whitepieces[i].y,this.whitepieces[i].z);
    this.whitepieces[i].display();
  this.popMatrix();
}


  // Floor
	this.pushMatrix();
		this.rotate(-90 * degToRad, 1, 0, 0);
    this.scale(20,20,1);
		this.floor.display();
	this.popMatrix();

  //Side Tables
  this.pushMatrix();
    this.sidetables.display();
  this.popMatrix();


  //Clock
  this.pushMatrix();
    this.rotate(90 * degToRad,0,1,0);
    this.scale(3,3,0.2);
    this.translate(-1,1,-55);
    this.clock1.display();
  this.popMatrix();

  //Clock
  this.pushMatrix();
    this.rotate(90 * degToRad,0,1,0);
    this.scale(3,3,0.2);
    this.translate(1,1,-55);
    this.clock2.display();
  this.popMatrix();



  //TABLES

  //Table 0 - center
  this.pushMatrix();
    this.rotate(-90*degToRad,1,0,0);
    this.t0.display();
  this.popMatrix();
  //display centro
  for(let i=1; i<9;i++){

  }

    //Table 1
    this.pushMatrix();
      this.rotate(-90*degToRad,1,0,0);
      this.translate(-6,0,0);
      this.t1.display();
    this.popMatrix();

  //Table 2 - top left
  this.pushMatrix();
    this.rotate(-90*degToRad,1,0,0);
    this.translate(-4.24,4.24,0);
    this.t3.display();
  this.popMatrix();

  //Table 3
  this.pushMatrix();
    this.rotate(-90*degToRad,1,0,0);
    this.translate(-4.24,-4.24,0);
    this.t2.display();
  this.popMatrix();

  //Table 4
  this.pushMatrix();
    this.rotate(-90*degToRad,1,0,0);
    this.translate(0,6,0);
    this.t5.display();
  this.popMatrix();

  //Table 5 - bottom
  this.pushMatrix();
    this.rotate(-90*degToRad,1,0,0);
    this.translate(0,-6,0);
    this.t4.display();
  this.popMatrix();

    //Table 6
    this.pushMatrix();
      this.rotate(-90*degToRad,1,0,0);
      this.translate(4.24,4.24,0);
      this.t7.display();
    this.popMatrix();

  //Table 7 - bottom right
  this.pushMatrix();
    this.rotate(-90*degToRad,1,0,0);
    this.translate(4.24,-4.24,0);
    this.t6.display();
  this.popMatrix();

    //Table 8
    this.pushMatrix();
      this.rotate(-90*degToRad,1,0,0);
      this.translate(6,0,0);
      this.t8.display();
    this.popMatrix();






/*
  //white Piece 1
  this.pushMatrix();
    this.rotate(-90*degToRad,1,0,0);
    this.translate(-1.3,0,1);
    this.wpiece.display();
  this.popMatrix();

  //white Piece 2
  this.pushMatrix();
    this.rotate(-90*degToRad,1,0,0);
    this.translate(1.3,0,1);
    this.wpiece.display();
  this.popMatrix();

  //white Piece 3
  this.pushMatrix();
    this.rotate(-90*degToRad,1,0,0);
    this.translate(-0.92,0.92,1);
    this.wpiece.display();
  this.popMatrix();

  //white Piece 4
  this.pushMatrix();
    this.rotate(-90*degToRad,1,0,0);
    this.translate(-0.92,-0.92,1);
    this.wpiece.display();
  this.popMatrix();*/
/*
  //black pieces
  this.pushMatrix();
    this.rotate(-90*degToRad,1,0,0);
    this.translate(-8.25,-10.6,1);
    for(var i =0; i<14;i++){
      this.translate(1.1,0,0);
      this.registerForPick(i+101, this.blackpieces[i]);
      this.blackpieces[i].display();
    }
    this.translate(-15.4,-1.2,0);
    for(var i =14; i<28;i++){
      this.translate(1.1,0,0);
      this.registerForPick(i+101, this.blackpieces[i]);
      this.blackpieces[i].display();
    }
    this.translate(-15.4,-1.2,0);
    for(var i =28; i<42;i++){
      this.translate(1.1,0,0);
      this.registerForPick(i+101, this.blackpieces[i]);
      this.blackpieces[i].display();
    }
  this.popMatrix();*/
/*
  this.pushMatrix();
    this.rotate(-90*degToRad,1,0,0);
  for(var i =0; i<14;i++){
    this.translate(this.blackpieces[i].x,this.blackpieces[i].y,this.blackpieces[i].z);
    this.blackpieces[i].display();}
  this.popMatrix();
*//*
  //white pieces
  this.pushMatrix();
    this.rotate(-90*degToRad,1,0,0);
    this.translate(-8.25,10.6,1);
    for(var i =0; i<14;i++){
      this.translate(1.1,0,0);
      this.registerForPick(i+201, this.whitepieces[i]);
      this.whitepieces[i].display();
    }
    this.translate(-15.4,1.2,0);
    for(var i =14; i<28;i++){
      this.translate(1.1,0,0);
      this.registerForPick(i+201, this.whitepieces[i]);
      this.whitepieces[i].display();
    }
    this.translate(-15.4,1.2,0);
    for(var i =28; i<42;i++){
      this.translate(1.1,0,0);
      this.registerForPick(i+201, this.whitepieces[i]);
      this.whitepieces[i].display();
    }
  this.popMatrix();
*/
/*
  //black Piece 1
  this.pushMatrix();
    this.rotate(-90*degToRad,1,0,0);
    this.translate(0,1.3,1);
    this.bpiece.display();
  this.popMatrix();

  //black Piece 2
  this.pushMatrix();
    this.rotate(-90*degToRad,1,0,0);
    this.translate(0,-1.3,1);
    this.bpiece.display();
  this.popMatrix();

  //black Piece 3
  this.pushMatrix();
    this.rotate(-90*degToRad,1,0,0);
    this.translate(0.92,0.92,1);
    this.bpiece.display();
  this.popMatrix();

  //black Piece 4
  this.pushMatrix();
    this.rotate(-90*degToRad,1,0,0);
    this.translate(0.92,-0.92,1);
    this.bpiece.display();
  this.popMatrix();

  //black Piece 5
  this.pushMatrix();
    this.rotate(-90*degToRad,1,0,0);
    this.translate(0,0,1);
    this.blackpieces[0].display();
  this.popMatrix();
*/




    // ---- END Primitive drawing section
};

/*
MyScene.prototype.setvalue(value){
  this.value = value;
}

MyScene.prototype.play(piece,table,seat){
  this.pushMatrix();
    this.translate(this.tables[table][seat][0],this.tables[table][seat][1],this.tables[table][seat][2]);
    if(piece=='O') this.wpiece.display();
    if(piece=='I') this.bpiece.display();
  this.popMatrix();
}
*/
