Template.mainrecipe.helpers({
	recipe: function(){
    var recipe = FlowRouter.getParam("state");
		return recipe;
	},

});
