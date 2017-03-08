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
