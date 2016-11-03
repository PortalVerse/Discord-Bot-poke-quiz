var discord = require("discord.js");
// var XMLHttpRequest = require("local-xmlhttprequest").XMLHttpRequest;
var fs = require("fs");
var bot = new discord.Client();
const database = require("./test.json");
var answer;
var dbanswer;

bot.on("ready", () => {
	bot.user.setGame('Something');
	console.log("Working");
});

bot.on("message", msg =>{
	let prefix = ";";
	
	if(msg.author.bot) return;

		if(msg.content.startsWith(prefix + "avatar")) {
			msg.reply(msg.author.avatarURL);
		};
		
		if(msg.content.startsWith(prefix + "command")) {
			if(msg.author.id === "224841610410721290"){
				msg.channel.sendFile("thing.gif");
			}
			else{
				msg.channel.sendMessage("You don\'t want this.");
			}
		}
		
		if(msg.content.startsWith(prefix + "pq")) {
			
			// var xhr = new XMLHttpRequest();
			
			// console.log("unsent", xhr.status); //test
			
			// xhr.open("GET", "test.json", true);
			
			// xhr.onprogress = function(){
				// console.log("LOADING" , xhr.status); //test
			// };
			
			// xhr.onload = function(){
				// console.log("DONE", xhr.status); //test
			// };
			
			// if (xhr.readyState == XMLHttpRequest.DONE){
				// textchannel.sendMessage(JSON.parse(xhr.responseText));
				// console.log("succes", xhr.status ) //test
			// } else{
				// console.log("Fail");
			// }
			// console.log("open", xhr.status) //test
			
			// xhr.send(null);
			// }
		
			// fs.readFile('test.json', function(err, data)
			// {
			// if(err)
			// {
				// return console.error(err);
			// }
			msg.channel.sendMessage("Question: " + database.trivia[1].question);
			dbanswer = database.trivia[1].answer;			
		};
		
		var input = msg.content.toUpperCase();
		
		if(input === dbanswer.toUpperCase()){
				msg.channel.sendMessage("Correct");
				dbanswer = ""
		};	
});

bot.login("MjQyNjA2OTMwNjEzMzcwODgw.CvjZiQ.sioME_mmVnUumvkYrVRnxnB4yeg");
