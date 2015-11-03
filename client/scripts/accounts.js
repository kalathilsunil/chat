Accounts.ui.config({
	passwordSignupFields:'USERNAME_AND_EMAIL'
});

Accounts.onLogin(function(){
	Meteor.users.update({_id:Meteor.userId()},{$set:{'profile.status':'Online'}});
});