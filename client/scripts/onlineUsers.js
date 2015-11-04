Template.onlineUsers.helpers({
	allusers: function(){
		return Meteor.users.find({},{sort:{"profile.status": -1}});
	
	},
	
	avatarText: function(){
		return(this.username.charAt(0).toUpperCase());
	},
	
	avatarStyle: function(){
		var style = "avatar-offline";
		if(this.profile.status == "Online"){
			style = "avatar-online";
		}
		return style;
	}
});