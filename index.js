var discord = require("discord.js");
var bot = new discord.Client();

bot.on("message", msg =>{
	let prefix = ";";
	let myRole = msg.guild.roles.get("242949350664175616");
	
	if(msg.author.bot) return;
	
	if(msg.member.hasRole("242949350664175616")){
	
		if (msg.content.startsWith(prefix + "ping")) {
		msg.channel.sendMessage("pong!");
		
		}
	
	}
	else{
		msg.channel.sendMessage("You don\'t have the right role.")
	}
	
});

bot.login("MjQyNjA2OTMwNjEzMzcwODgw.CvjZiQ.sioME_mmVnUumvkYrVRnxnB4yeg");
