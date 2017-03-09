Template.emailaddress.events({
     'click .ui button': function(){

       console.log("You clicked a .ui button element");
       Meteor.call('sendEmail',
                    
     )

     }

});
