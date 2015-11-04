chat
Academic chat project

Framework used : Meteor (www.meteor.com)
Database used : Mongodb. Mongodb is a NoSQL database
Coding language : Javascript and HTML

About the application.
This is a web application for chatting. Users can register to the chat application by providing an username, email and password.
Once registered, user can login and start chatting with other registered users. Users can see who are registerd users and who all are online / offline.

Modules:
1. Login
2. Chat window
3. Online users

Login Module: Login module is developed leveraging the Meteor accounts package. This reusable package comes with lot of options like integrating with authentication of facebook/twitter etc. Refer the documents available @ www.meteor.com

Chat window: This module lets user to type in messages and show it over a chat window. Messages from other users are shown here

Online users: This module deals with showing the registered users and about the online and offline users

TODO:
1. Show the time stamp of each message. Now everything is hardcoded
2. Limit the number of chat messages to show
3. Change application name to something more apt