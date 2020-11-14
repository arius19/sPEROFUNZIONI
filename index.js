console.log("Mi sono avviato");
const discord = require("discord.js");
const bot = new discord.Client();

bot.login("process.env.token");
bot.on('message', (message) => {
	if (message.content == '!time') {
		var data = new Date();
		var ora = data.getHours();
		var minuto = data.getMinutes();

		message.channel.send('ORA ATTUALE :alarm_clock: :' + ora + ':' + minuto);
	}
});
bot.on("message", (message) => {
    if (message.content == "J!Konami") {
        message.channel.send("La konami fa schifo");
    }
});
bot.on("message", (message) => {
       if (message.content == "!chi sono"){
           message.author.send
           ("Hey, ciao sono il bot del server discord johny_bandicot creato da arius19");
    }
});