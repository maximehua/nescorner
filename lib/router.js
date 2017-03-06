FlowRouter.route('/', {
	action: function(param) {
		refresh();
		FlowRouter.go("/welcome");
	}
});
FlowRouter.route('/:state', {
	action: function(param) {
		refresh();
		BlazeLayout.render("layout");
	}
});
