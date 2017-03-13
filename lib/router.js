FlowRouter.route('/', {
	action: function(param) {
		FlowRouter.go("/welcome");
	}
});
FlowRouter.route('/:state', {
	action: function(param) {
		BlazeLayout.render("layout");
	}
});
FlowRouter.route('/login/:mail', {
	action: function(param) {
		console.log(FlowRouter.getParam("mail"));
		BlazeLayout.render("login");
	}
});
