Template.emailaddress.events({
     'click .ui button': function(){

       console.log("You clicked a .ui button element");
       var email = document.getElementByID("email").value;
       console.log(email);

       Meteor.call('sendEmail',
            'email',
            'contact@nescorner.com',
            'Hello from Nescorner!',
            'This is a test of Email.send.');
     },

     'refresh':function(){
       time--;

       if (time > 1)
       {
        spanTime.innerHTML+= 's';
       }

       else if (time==0)
       {
        window.location='../../';
        clearInterval();
       }
     },

      setInterval(refresh,1000)
});
