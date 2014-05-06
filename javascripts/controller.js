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
		modelObj.attach("beautiful-pink-flowers", "http://picslava.com/wp-content/uploads/2013/08/beautiful-pink-flowers.jpg");
		modelObj.attach("file2", "http://parentables.howstuffworks.com/media/images/promos/2012/04/best_flower_festivals.jpg");
		modelObj.attach("file3", "images/BunchOfRoses.jpg");
		modelObj.attach("file4", "images/Field-flowers-image133.jpg");
		modelObj.attach("file5", "images/Roses_Bunch_Of_Flowers.jpeg");
		modelObj.attach("Fresh-Flowers-Arranging", "http://www.flowers-magzine.com/wp-content/uploads/2010/09/Fresh-Flowers-Arranging.jpg");
		modelObj.attach("file7", "http://a764.g.akamai.net/f/764/16742/1h/www.1800flowers.com/800f_assets/images/flowers/images/shop/catalog/16405z.jpg");
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