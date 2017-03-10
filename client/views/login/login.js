Template.login.helpers({
	id: function(){
		var mail = FlowRouter.getParam("mail");
        return mail && mail;
	},
});

Template.login.events({


});


Template.login.onRendered(function(){
    var mail = FlowRouter.getParam("mail");
    console.log(mail);
    if (typeof mail !== "undefined") {
        console.log("test 1");

        Meteor.call("isUser", mail, function(error, result) {

            if (!result) {
                console.log("test 2");
                Accounts.createUser({email : mail, password : "nescorner"}, function(){
                    console.log("welcome");
                })
            }
            else {
                console.log("test 3");
                Meteor.loginWithPassword({email : mail}, "nescorner", function(){
                    console.log("welcome back");
                })
            }
        })

    }



});
