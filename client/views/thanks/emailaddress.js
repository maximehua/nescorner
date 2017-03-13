Template.emailaddress.events({
     'click .ui button': function(){

       console.log("You clicked a .ui button element");
       var answer = $('#formmail').form('get values');

       Meteor.call('sendEmail',
            'answer.email-address',
            'contact@nescorner.com',
            'Hello from Nescorner!',
            'This is a test of Email.send.');

     }

});
