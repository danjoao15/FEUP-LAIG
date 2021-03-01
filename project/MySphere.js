/**
 * MySphere
 * @constructor
 */
 //MySphere(scene, radius, stacks, slices)
 function MySphere(scene, a) {
 	CGFobject.call(this,scene);

 	this.args=a;

	this.slices = this.args[2];
	this.stacks = this.args[1];
	this.radius = this.args[0];

 	this.initBuffers();
 };

 MySphere.prototype = Object.create(CGFobject.prototype);
 MySphere.prototype.constructor = MySphere;

 MySphere.prototype.initBuffers = function() {




	//Declaracao dos arrays

	this.vertices = [];
	this.indices = [];
	this.normals = [];
	this.texCoords = [];

	var teta = ((2*Math.PI)/this.slices);
	var alpha = ((Math.PI/2)/this.stacks);


//Vertices e Normals

	for(i=0; i <= this.slices; i++){
		var ang1 = teta*i;
		for(j=0; j <= this.stacks; j++){
			var ang3 = alpha*j;
			this.vertices.push(Math.cos(ang1)*Math.cos(ang3)*this.radius,Math.sin(ang1)*Math.cos(ang3)*this.radius,Math.sin(ang3)*this.radius) ;
			 this.normals.push(Math.cos(ang1)*Math.cos(ang3)*this.radius,Math.sin(ang1)*Math.cos(ang3)*this.radius,Math.sin(ang3)*this.radius);
       this.texCoords.push(i/this.slices, 1 - j/this.stacks);
		}
	}
	for(i=0; i <= this.slices; i++){
		var ang1 = teta*i;
		for(j=0; j <= this.stacks; j++){

			var ang3 = alpha*j;
			this.vertices.push(Math.cos(ang1)*Math.cos(ang3)*this.radius,Math.sin(ang1)*Math.cos(ang3)*this.radius,Math.sin(ang3)*this.radius) ;
			this.normals.push(-Math.cos(ang1)*Math.cos(ang3)*this.radius,-Math.sin(ang1)*Math.cos(ang3)*this.radius,-Math.sin(ang3)*this.radius);
			this.texCoords.push(i/this.slices, 1 - j/this.stacks);
}
	};


//Indices

	for(i=0; i<this.slices; i++){
		for(j=0; j<this.stacks;j++){
			var stage1 = i*(this.stacks+1)+j;
			var stage2 = (i+1)*(this.stacks+1)+j;
			this.indices.push(0+stage1,0+stage2,1+stage2);
			this.indices.push(0+stage1,1+stage2,1+stage1);
		}
	};
	for(i=0; i<=this.slices; i++){
		for(j=0; j<this.stacks;j++){
			var stage1 = (this.stacks+1)*(this.slices)+i*(this.stacks+1)+j;
			var stage2 = (this.stacks+1)*(this.slices)+(i+1)*(this.stacks+1)+j;
			this.indices.push(0+stage1,1+stage2,0+stage2);
			this.indices.push(0+stage1,1+stage1,1+stage2);
		}
	};



 	this.primitiveType = this.scene.gl.TRIANGLES;
 	this.initGLBuffers();
 };


 MySphere.prototype.display = function(){

    this.scene.pushMatrix();
     this.drawElements(this.primitiveType);
    this.scene.popMatrix();

    this.scene.pushMatrix();
     this.scene.rotate(Math.PI,1,0,0);
     this.drawElements(this.primitiveType);
    this.scene.popMatrix();

 };

/**
 * Sets texCoords
 * @method setAmpSAmpT
 * @param      maxS
 * @param      maxT
 */
 MySphere.prototype.amplify = function (maxS, maxT) {

	  //Nothing needs to change in the Sphere, however this function must exist to avoid an error
};
