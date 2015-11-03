Meteor.startup(function () {
	Meteor.subscribe("users");
	Meteor.subscribe("chatMessages");
});