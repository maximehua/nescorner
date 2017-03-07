Meteor.startup(function() {

	if (Recipes.find().count() === 0) {
		Recipes.insert({
			name : 'Crousti crémeux saumon',
			id : "01",
			ingredients:["Pan Crust","Cream","Mozarella","Eggs","Leak"],
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
			name : 'Camembert surprise',
			id : "04",
			ingredients:["Pan Crust","Potatoes","Bacon","Onions","Camembert","Eggs"],
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
