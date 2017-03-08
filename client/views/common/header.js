Template.header.helpers({
	thin: function(){
		var thin = false;
		var state = FlowRouter.getParam("state");
		if(state === "recipe") thin = true;
		return thin;
	},
	bold: function(){

	}
});
