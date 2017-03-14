Meteor.startup(function() {


	//change the path and baudrate to match your setup

	// serialPort = new SerialPort.SerialPort('/COM9', {
	// 	baudrate: 9600,
	// 	parser: SerialPort.parsers.readline('\r\n')
	// });
	//
	// serialPort.on('open', function() {
	// 	console.log('Port open');
	// });
	//
	//
  //   // receive data
  //   serialPort.on('data', Meteor.bindEnvironment(function (error, result) {
  //     var data = error;
  //     console.log(data);
	// 		Meteor.call("parsing",data);
  //   }));


});

Meteor.methods({
	// sendToSerialPort: function (message) {
	// 	for (var i = 0; i <= 3; i++) {
	// 		setTimeout(function(){
	// 			serialPort.write(message);
	// 			console.log(message);
	// 		}, 25);
	// 	}
	// 	return message;
	// },
	isUser : function(mail) {
		var user = Meteor.users.findOne({"emails.address" : mail});
		console.log(user);
		if ( typeof user != "undefined") {
				return true;
		}
	},
    parsing : function(message){
        var parsedMessage = {
            page : "/welcome",
            check : false,
            bestRecipe : "",
            recipes : [],
        };
        parsedMessage.check = message.substr( message.length-1, 1 ) === "y";

        if (parsedMessage.check) {

            var page = message.substr( message.length-2, 1 );
            console.log(page);
            if (page === "0") {parsedMessage.page = "/welcome";console.log("/welcome")};
            if (page === "1") {parsedMessage.page = "/recipe";console.log("/recipe")};
            if (page === "2") {parsedMessage.page = "/thanks";console.log("/thanks")};

            parsedMessage.bestRecipe = message.substr( 0, 2 );

            t = 0;
            var recipesNb = ( message.length - 4 ) / 2 ;

            for (var i = 1; i <= recipesNb ; i++ ) {
                var temp = message.substr( 2 * i , 2 );
                if (temp !== parsedMessage.bestRecipe ) {
                    parsedMessage.recipes[t] = temp;
                    t++;
                }
            }
            console.log(parsedMessage);
            State.update({name: "state"}, {
                name: "state",
                state : parsedMessage ,
            });

        }
        return parsedMessage;
    },

	sendEmail: function (to, from, subject, text) {
	    check([to, from, subject, text], [String]);
	    // Let other method calls from the same client start running,
	    // without waiting for the email sending to complete.
	    this.unblock();
	    Email.send({
	      to: to,
	      from: from,
	      subject: subject,
	      text: text
	    });
	  },

});
