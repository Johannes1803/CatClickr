$(function(){
	// the cat objects in an array and the currently selected cat
	var model = {
		current_cat: "Cat_fat",
		cats:[
		{name:"Cat1",
		clickCount: 0,
		img_url: "gaudi"},
		{name:"Cat_fat",
		clickCount: 0,
		img_url: "blabla"},
		]
	};


	var view_list = {
		init: function(cats){
			// append each element in list to the DOM
			for (i=0; i < cats.length; i++){
				add_cat = cats[i];
				$("#catlist").append("<li id='" + add_cat.name +"'>" + add_cat.name + "</li>");

			}

		}
	};
	var view_image = {
		render: function(current_cat){
					$(".cat_pic").append("<div id='" + current_cat.name + "'>" + current_cat.img_url +"</div>");
				}
	};

	// octopus
	var octopus = {
		initial_render: view_list.init(model.cats),
		// call the view_list.init function, pass in the list of cats
		image_render: function(){
			var cats = model.cats;
			var current_cat = model.current_cat;
			for (i=0; i < cats.length; i++){
				var add_cat = cats[i];
				if (add_cat.name == current_cat){
					console.log(add_cat);
					view_image.render(add_cat);
				}
			}

		} 
		// call the view_image.render function, pass in the array of cats and the current cat
	};
octopus.image_render();
});