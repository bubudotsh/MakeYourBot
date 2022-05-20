const { MessageEmbed } = require('discord.js');
const superagent = require('superagent');

module.exports = {
    config: {
        name: `wallpaper`
    },
    run: async (bot, message, args) => {


      const { body } = await superagent


      .get("https://nekos.life/api/v2/img/wallpaper");
      if(!message.channel.nsfw) return message.reply("NSFW is not enabled in this channel");
      
      let embed = new MessageEmbed()
        .setColor("#7289DA")
        .setImage(body.url)
        .setFooter(`onea-bot.fr`)
      message.channel.send({embed})
      console.log(`walppaper`)
      
  
    }
}

