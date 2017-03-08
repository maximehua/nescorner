Template.layout.helpers({
	state: function(){
		var state = FlowRouter.getParam("state");
		return state && state;
	},
});

Template.layout.events({

	'click #catalog .drink': function (event, template) {

	},


});


Template.layout.onRendered(function(){


});
