Template.chatWindow.helpers({
	messages:function(){
		
		return chatMessages.find({});
	},
	
	avatarText: function(){
		return(this.user.charAt(0).toUpperCase());
	}
});


Template.chatWindow.events({
	'submit form': function(e,template){
		e.preventDefault();
		message = template.find('#mymessage').value;
		chatMessages.insert({user:Meteor.user().username,message:message});
		var wtf    = $('#chats');
		var height = wtf[0].scrollHeight;
		wtf.scrollTop(height);
	}
});