Template.chatWindow.helpers({
	messages:function(){
		//Return all the chatmessages from the collection, sorted by date so that latest message shows
		//up in the bottom ot chatwindow.
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
		// Return the first character of username in uppercase to show as avatar text
		return(this.user.charAt(0).toUpperCase());
	},
	
	isMine: function(){
		return this.user == Meteor.user().username;
	}
});


Template.chatWindow.events({
	'submit form': function(e,template){
		//Prevent the default form actions.
		e.preventDefault();
		var message = template.find('#mymessage').value;
		var now = new Date();
		
		//Insert to chatmessages collection the active username, message and current data time stamp.
		chatMessages.insert({user:Meteor.user().username,message:message,date:now});
		
		//Scroll to the bottom of chatwindow to show the posted chat message. 
		var wtf    = $('#chats');
		var height = wtf[0].scrollHeight;
		wtf.scrollTop(height);
	}
});

Template.chatWindow.onRendered(function(){
	//Scroll to the bottom of chatwindow to show the latest post.
	// This method is called once when an instance of Template.chatWindow is rendered into DOM nodes and
	// put into the document for the first time.
	var wtf    = $('#chats');
	var height = wtf[0].scrollHeight;
	wtf.scrollTop(height);
});
