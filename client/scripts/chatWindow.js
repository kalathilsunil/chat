Template.chatWindow.helpers({
	messages:function(){
		
		return chatMessages.find({},{sort:{"date": 1}});
	},
	
	messagetime: function(){
			
		// A common way of displaying time is handled by moment#fromNow. This is sometimes called timeago or relative time.
		//
		// moment([2007, 0, 29]).fromNow(); // 4 years ago
		// If you pass true, you can get the value without the suffix.
		//
		// moment([2007, 0, 29]).fromNow();     // 4 years ago
		// moment([2007, 0, 29]).fromNow(true); // 4 years
		
		return moment(this.date).fromNow();
	},
	
	avatarText: function(){
		return(this.user.charAt(0).toUpperCase());
	}
});


Template.chatWindow.events({
	'submit form': function(e,template){
		e.preventDefault();
		var message = template.find('#mymessage').value;
		var now = new Date();
		chatMessages.insert({user:Meteor.user().username,message:message,date:now});
		var wtf    = $('#chats');
		var height = wtf[0].scrollHeight;
		wtf.scrollTop(height);
	}
});