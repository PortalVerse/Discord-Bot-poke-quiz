var discord = require("discord.js");
var XMLHttpRequest = require("local-xmlhttprequest").XMLHttpRequest;
var bot = new discord.Client();

bot.on("ready", () => {
	bot.user.setGame('with hentai');
	console.log("Working");
});

bot.on("message", msg =>{
	let prefix = ";";
	
	if(msg.author.bot) return;

		if(msg.content.startsWith(prefix + "avatar")) {
			msg.reply(msg.author.avatarURL);
		};
		
		if(msg.content.startsWith(prefix + "hentai")) {
			if(msg.author.id === "224841610410721290"){
				msg.channel.sendFile("thing.gif");
			}
			else{
				msg.channel.sendMessage("You don\'t want this.");
			}
		}
		
		if(msg.content.startsWith(prefix + "pq")) {
			
			var xhr = new XMLHttpRequest();
			
			console.log("unsent", xhr.status); //test
			
			xhr.open("GET", "test.json", true);
			
			xhr.onprogress = function(){
				console.log("LOADING" , xhr.status); //test
			};
			
			xhr.onload = function(){
				console.log("DONE", xhr.status); //test
			};
			
			if (xhr.readyState == XMLHttpRequest.DONE){
				msg.channel.sendMessage(xhr.responseText);
				console.log("succes", xhr.status ) //test
			} else{
				console.log("Fail");
			}
			console.log("open", xhr.status) //test
			
			xhr.send();
		}
		
});

bot.login("MjQyNjA2OTMwNjEzMzcwODgw.CvjZiQ.sioME_mmVnUumvkYrVRnxnB4yeg");
