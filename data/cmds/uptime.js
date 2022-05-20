const { MessageEmbed } = require('discord.js');

module.exports = {
    config: {
        name: `uptime`
    },
    run: async (bot, message, args) => {

      var milliseconds = parseInt((bot.uptime % 1000) / 100),
      seconds = parseInt((bot.uptime / 1000) % 60),
      minutes = parseInt((bot.uptime / (1000 * 60)) % 60),
      hours = parseInt((bot.uptime / (1000 * 60 * 60)) % 24);
      days = parseInt((bot.uptime / (1000 * 60 * 60 * 24)) % 60);

      days = (days < 10) ? "0" + days : days;
      hours = (hours < 10) ? "0" + hours : hours;
      minutes = (minutes < 10) ? "0" + minutes : minutes;
      seconds = (seconds < 10) ? "0" + seconds : seconds;


      let embed = new MessageEmbed()
      .setColor("#7289DA")
      .setTitle('Up time')
      .setDescription(`En ligne depuis : ${days} jours, ${hours} heures, ${minutes} minutes, ${seconds} secondes, ${milliseconds} millisecondes` )
      .setFooter(`onea-bot.fr`)
      
      message.channel.send({embed})
      console.log(`uptime`)
  
    }
}

