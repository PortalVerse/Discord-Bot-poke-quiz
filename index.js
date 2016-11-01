var discord = require("discord.js");
var bot = new discord.Client();
var util = require('util');

bot.on("message", msg =>{
	util.inspect(msg.guild.roles, {depth: 1});
	let prefix = ";";
	
	if(msg.author.bot) return;
	
	// if(bot.member.roles.has(botbosses.id)){
	
		if (msg.content.startsWith(prefix + "ping")) {
		msg.channel.sendMessage("pong!");
		
	}
	
	}
	
	// else{
		// msg.channel.sendMessage("You don\'t have the right role.")
	// }
	
);

bot.login("MjQyNjA2OTMwNjEzMzcwODgw.CvjZiQ.sioME_mmVnUumvkYrVRnxnB4yeg");
