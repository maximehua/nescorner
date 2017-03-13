Template.mainrecipe.helpers({
	recipe: function(){
		var state = State.find({name: "state"}).fetch();

		var recipeId = state[0].state.bestRecipe;
		var bestRecipe = Recipes.find({id: recipeId}).fetch();
		bestRecipe = bestRecipe[0];
		console.log(bestRecipe);
		bestRecipe.ingNum = bestRecipe.ingredients.length;

		return bestRecipe;
	},


});
