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
	// list of cat elements stored as variable in global scope
	var cats = model.cats;


	// view function for the list of cats
	var view_list = {
		init: function(cats){
			// append each element in list to the DOM
			for (i=0; i < cats.length; i++){
				add_cat = cats[i];
				$("#catlist").append("<li id='" + add_cat.name +"'>" + add_cat.name + "</li>");
			};
			// Upon click on list element: change current_cat in data, rerender image
			$("#catlist").click(function(event) {
    			var text = $(event.target).text();
    			console.log(text);
    			// call octopus to update the model
    			octopus.update_current_cat(text);
    			octopus.image_render();
			});



		}
	};

	// view function for the selected cat image
	var view_image = {
		init: function(current_cat){
					$(".cat_pic").empty();
					$(".cat_pic").append("<div id='" + current_cat.name + "'>" + current_cat.img_url +"</div>");
		}
	};

	// octopus
	var octopus = {
		// call the view_list.init function, pass in the list of cats
		init_list: function(){
			view_list.init(cats)
		},

		// render the image
		image_render: function(){
			var current_cat = model.current_cat;
			for (i=0; i < cats.length; i++){
				var add_cat = cats[i];
				if (add_cat.name == current_cat){
					// call the view_image.init function, pass in the currently selected
					// cat object as argument
					//console.log(add_cat);
					view_image.init(add_cat);
				}
			}

		},
		update_current_cat: function(current_cat){
			model.current_cat = current_cat;
		}
		/*click_list: function(){
			$("#")click(function(){
				console.log("Hurray!")
			})*/


	};
	octopus.image_render();
	octopus.init_list();
});