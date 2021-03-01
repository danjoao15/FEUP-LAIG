/**
 * MyRectangle
 * @constructor
 */
 //MyRectangle(scene, leftopX, leftopY, righttomX, righttomY)
 function MyRectangle(scene, a) {
 	CGFobject.call(this,scene);

    this.args = a;

    this.leftopX = this.args[0];
    this.leftopY = this.args[1];
    this.righttomX = this.args[2];
    this.righttomY = this.args[3];

    this.minS=0;
    this.minT=0;
    this.maxS=this.leftopY-this.righttomY;
    this.maxT=this.righttomX-this.leftopX;


 	this.initBuffers();
 };

MyRectangle.prototype = Object.create(CGFobject.prototype);
MyRectangle.prototype.constructor=MyRectangle;


 MyRectangle.prototype.initBuffers = function() {
 	this.vertices = [
 	this.leftopX, this.righttomY, 0,
 	this.righttomX, this.righttomY, 0,
 	this.leftopX, this.leftopY, 0,
 	this.righttomX, this.leftopY, 0
 	];

	this.indices = [
            0, 1, 2,
			3, 2, 1
        ];

	this.primitiveType=this.scene.gl.TRIANGLES;

	this.normals = [
             0,0,1,
             0,0,1,
             0,0,1,
             0,0,1
        ];

	this.originalTexCoords = [
			this.minS, this.maxT,
			this.maxS, this.maxT,
			this.minS, this.minT,
			this.maxS, this.minT,
		];

	this.texCoords = this.originalTexCoords.slice();

	this.initGLBuffers();

};



MyRectangle.prototype.amplify = function(ampS, ampT) {

	for (var i = 0; i < this.texCoords.length; i += 2) {
			this.texCoords[i] = this.originalTexCoords[i] / ampS;
			this.texCoords[i + 1] = this.originalTexCoords[i+1] / ampT;
	}

	this.updateTexCoordsGLBuffers();
}