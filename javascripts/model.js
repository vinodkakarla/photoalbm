/**
 * 
 */

var model = function(){
	this.imageList = {};
};

model.prototype.attach = function(name, location){
	this.imageList[name] = location;
};

model.prototype.remove = function(name){
	delete this.imageList[name];
};

model.prototype.list = function(){
	return this.imageList;
};