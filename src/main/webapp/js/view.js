/**
 * 
 */

var View = function(model) {
	this.model = model;
};

View.prototype = {
	fetchOption : function(key) {
		var items = this.model.imageList;
		var option = document.createElement("option");
		option.text = key;
		option.style = "background-image:url(" + items[key] + ")";
		var mainImage = document.getElementById("mainImage").getElementsByTagName("img")[0];
		option.addEventListener("click", function(evt) {
			mainImage.src = items[key];
		});

		return option;
	},
	rebuildList : function() {
		var list, items;
		list = document.getElementById("list");
		this.removeOptions(list);
		items = this.model.imageList;
		for (key in items) {
			list.appendChild(this.fetchOption(key));
		}
	},
	removeOptions : function(selectObj) {
		while (selectObj.options.length) {
			selectObj.remove(0);
		}
	},
	resetMainImage : function() {
		var items = this.model.imageList;
		var mainImage = document.getElementById("mainImage").getElementsByTagName("img")[0];
		mainImage.src = "";
		for (key in items) {
			mainImage.src = items[key];
			break;
		}
	}
};
