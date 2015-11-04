Meteor.startup(function () {
  // code to run on server at startup
	for(i=0;i<20;i++){
		var user = "user" + i;
		var message = "dkdkadadas";
		var now = new Date();
		chatMessages.insert({user:user,message:message,date:now});
	}
	
	
	
});