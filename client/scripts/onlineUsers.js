Template.onlineUsers.helpers({
	allusers: function(){
		return Meteor.users.find({});
	
	}
});