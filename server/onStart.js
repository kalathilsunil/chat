Meteor.startup(function () {
  // code to run on server at startup
	for(i=0;i<20;i++){
		user = "user" + i;
		message = "dkdkadadas"
		chatMessages.insert({user:user,message:message});
	}
	
	
	
});