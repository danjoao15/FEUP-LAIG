/**
* MyInterface class, creating a GUI interface.
* @constructor
*/
function MyInterface() {
   //call CGFinterface constructor
   CGFinterface.call(this);
}
;

MyInterface.prototype = Object.create(CGFinterface.prototype);
MyInterface.prototype.constructor = MyInterface;

/**
* Initializes the interface.
* @param {CGFapplication} application
*/
MyInterface.prototype.init = function(application) {
   // call CGFinterface init
   CGFinterface.prototype.init.call(this, application);


   this.gui = new dat.GUI();
/*
  var lightsGroup=this.gui.addFolder("Control Lights");
 	lightsGroup.open();

 	lightsGroup.add(this.scene, 'light center top');
 	lightsGroup.add(this.scene, 'light 2');
 	lightsGroup.add(this.scene, 'light 3');
 	lightsGroup.add(this.scene, 'light 4');
 	lightsGroup.add(this.scene, 'light 5');
 	lightsGroup.add(this.scene, 'light bottom');
*//*
  this.gui.add(this.scene, 'enableClock1');
  this.gui.add(this.scene, 'enableClock2');
*/
this.gui.add(this.scene, 'currentSkin', this.scene.skins).name('Textures');
//this.gui.add(this.scene, 'Start').name('Start');
   return true;
};

MyInterface.prototype.processKeyboard = function(event) {
	// call CGFinterface default code (omit if you want to override)
	CGFinterface.prototype.processKeyboard.call(this,event);

	switch (event.keyCode)
	{
		case (48):
			console.log("Key 0 pressed");
			this.scene.setvalue(0);
			break;
    case (49):
		  console.log("Key 1 pressed");
			this.scene.setvalue(1);
			break;
    case (50):
			console.log("Key 2 pressed");
			this.scene.setvalue(2);
			break;
    case (51):
      console.log("Key 3 pressed");
      this.scene.setvalue(3);
      break;
    case (52):
			console.log("Key 4 pressed");
			this.scene.setvalue(4);
			break;
    case (53):
			console.log("Key 5 pressed");
			this.scene.setvalue(5);
			break;
    case (54):
			console.log("Key 6 pressed");
			this.scene.setvalue(6);
			break;
    case (55):
			console.log("Key 7 pressed");
			this.scene.setvalue(7);
			break;
    case (56):
			console.log("Key 8 pressed");
			this.scene.setvalue(8);
			break;
    case (57):
			console.log("Key 9 pressed");
			this.scene.setvalue(9);
			break;
	};
};
