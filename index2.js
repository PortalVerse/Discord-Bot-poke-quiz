var discord = require("discord.js");
var bot = new discord.Client();

bot.on("message", msg =>{
	let prefix = ";";
	
	if(msg.author.bot) return;

		if(msg.content.startsWith(prefix + "avatar")) {
			msg.reply(msg.author.avatarURL);
		};
		
});

bot.login("Insert token here");
