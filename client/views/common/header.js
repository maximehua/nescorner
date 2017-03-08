Template.header.helpers({
	thin: function(){
		var thin = false;
		var state = FlowRouter.getParam("state");
		if(state!="welcome") thin = true;
		return thin;
	},
	bold: function(){

	}
});
