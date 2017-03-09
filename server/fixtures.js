Meteor.startup(function() {

	if (Recipes.find().count() === 0) {
		Recipes.insert({
			name : 'Crousti crémeux saumon',
			id : "01",
			ingredients:["Pan Crust","Cream","Mozarella","Eggs","Leak"],
			illu:"/images/crousticremeux.jpg",
			url:"https://www.facebook.com/ChefClub.tv/videos/1408368609187748/",
		});
		Recipes.insert({
			name : 'Soupe gourmande',
			id : "02",
			ingredients:["Bacon","Zucchini","Onions","Mozarella","Boursin"],
			url:"https://www.facebook.com/ChefClub.tv/videos/1393093190715290/",
		});
		Recipes.insert({
			name : 'Raclette revisitée',
			id : "03",
			ingredients:["Potatoes","Bacon Strips","Raclette","Mozarella","Boursin"],
			url : "https://www.facebook.com/ChefClub.tv/videos/1375633615794581/",
		});
		Recipes.insert({
			name : 'Cupcake kiri',
			id : "04",
			ingredients:["Potatoes","Bacon Strips","Onions","Grated cheese","Eggs"],
			url : "https://www.facebook.com/ChefClub.tv/videos/1334905519867391/",
		});
		Recipes.insert({
			name : 'Couronne Mediterranéenne',
			id : "05",
			ingredients:["Pan Crust","Pesto","Bacon","Zucchini","Tomatoes","Mozarella","Eggs"],
			url : "https://www.facebook.com/ChefClub.tv/videos/1334905519867391/",
		});
		Recipes.insert({
			name : '',
			id : "06",
			ingredients:["Canelloni","Parmeggiano","Ground Beef","Tomato Sauce","Onions","Tomatoes","Mozarella","Garlic"],
			url : "https://www.facebook.com/ChefClub.tv/videos/1334905519867391/",
		});
	}
	if (State.find().count() === 0) {

		State.insert({
			name : "state",
			state : {
				check : false,
				bestRecipe : "",
				recipes : [],
			}
		});
	}
})
