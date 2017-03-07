Template.mainrecipe.helpers({
	recipe: function(){
				var state = State.find({name: "state"}).fetch();

			    var recipeId = state.bestRecipe;
					var bestRecipe = Recipes.find({id: recipeId}).fetch();
					bestRecipe = bestRecipe[0];
					console.log(bestRecipe);
					bestRecipe.ingNum = bestRecipe.ingredients.length;


					return bestRecipe;
				},

});

Template.mainrecipe.onRendered(function(){

	(function(d, s, id) {
		var js, fjs = d.getElementsByTagName(s)[0];
		if (d.getElementById(id)) return;
		js = d.createElement(s); js.id = id;
		js.src = "//connect.facebook.net/fr_FR/sdk.js#xfbml=1&version=v2.8&appId=269181806752115";
		fjs.parentNode.insertBefore(js, fjs);
	}(document, 'script', 'facebook-jssdk'));


});
