refresh = function(){
	// Meteor.call('sendToSerialPort',messageUno);

	// return command;
}


Tracker.autorun(function () {
	page = State.findOne({name: 'state'});
	console.log(page);
	if (typeof(page) != "undefined"){
		page = page.state.page;
		console.log();
		FlowRouter.go(page);
	};
	return true;
});
