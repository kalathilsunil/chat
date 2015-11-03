Meteor.publish("chatMessages",function(){
	//check whether user is logged in
	return chatMessages.find({});
});

Meteor.publish("users",function(){
	//check whether user is logged in
	return Meteor.users.find({},{fields:{'username':1,'profile.status':1}});
});