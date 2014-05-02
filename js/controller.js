/**
 * 
 */

var Controller = function() {
	return this;
};

Controller.prototype = {
	loadView : function() {
		var modelObj = new model();
		this.addSampleData(modelObj);
		
		var view = new View(modelObj);
		view.resetMainImage();
		view.rebuildList();
		
		this.addButtonEvent(modelObj, view);
		this.removeButtonEvent(modelObj, view);
	},
	addSampleData : function(modelObj) {
		modelObj.attach("file1", "img/BunchOfRoses.jpg");
		modelObj.attach("file2", "img/Field-flowers-image133.jpg");
		modelObj.attach("file3", "img/Roses_Bunch_Of_Flowers.jpeg");
	},
	addButtonEvent : function(modelObj, view) {
		var addButton = document.getElementById("plusBtn");
		addButton.addEventListener("click", function(evt) {
			var item = window.prompt('Please provide image path:', '');
	        if (item) {
				var fileName = fetchFileName(item);
	            modelObj.attach(fileName, item);
	    		view.rebuildList();
	        };
		});
	},
	removeButtonEvent : function(modelObj, view) {
		var removeButton = document.getElementById("minusBtn");
		removeButton.addEventListener("click", function(evt) {
			var selectList = document.getElementById("list");
	        if (selectList.selectedIndex >= 0) {
				var strUser = selectList.options[selectList.selectedIndex].value;
	            modelObj.remove(strUser);
	    		view.rebuildList();
	    		view.resetMainImage();
	        };
		});
	}	
};
function fetchFileName(fullPath){
	return fullPath.replace(/^.*[\\\/]/, '');
}