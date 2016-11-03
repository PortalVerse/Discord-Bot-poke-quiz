var discord = require("discord.js");
var bot = new discord.Client();
const BotConfig = require("./BotConfig.json");

bot.on("ready", () => {
	console.log("Working");
	bot.user.setGame('type /help for all commands');
});

bot.on("message", msg =>{
	let prefix = "=";
	
	if(msg.author.bot) return;
	
		if (msg.content.startsWith(prefix + "ping")) {
			
			if(msg.member.roles.has("242949350664175616")){
				msg.channel.sendMessage("Pong!");				
			}
			else{
				msg.channel.sendMessage("You don't have the right role.");			
			}
		}
});

bot.login(BotConfig.login.token);
