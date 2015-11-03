Template.mainWindow.events({
	'click #signout': function(){
		Meteor.users.update({_id:Meteor.userId()},{$set:{'profile.status':'Offline'}});
		Meteor.logout();
		
	}
});