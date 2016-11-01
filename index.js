var discord = require("discord.js");
var bot = new discord.Client();

bot.on("message", msg =>{
	let prefix = ";";
	
	if(msg.author.bot) return;
	
		if (msg.content.startsWith(prefix + "ping")) {
			
			if(msg.member.roles.has("242949350664175616")){
				msg.channel.sendMessage("Pong!");				
			}
			else{
				msg.channel.sendMessage("You don\'t have the right role.");			
			}
		}

		if(msg.content.startsWith(prefix + "avatar")) {
			msg.reply(msg.author.avatarURL);
		};
});

bot.login("MjQyNjA2OTMwNjEzMzcwODgw.CvjZiQ.sioME_mmVnUumvkYrVRnxnB4yeg");
