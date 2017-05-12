Template.emailaddress.events({
     'click .ui button': function(event){
       event.preventDefault();
       console.log("You clicked a .ui button element");
       var email = $("#email").value;
       console.log(email);

       Meteor.call('sendEmail',
            'email',
            'contact@nescorner.com',
            'Hello from Nescorner!',
            'This is a test of Email.send.'
          );

      Meteor.setTimeout(function(){Meteor.call("parsing","0y");}, 500)
     }

});
