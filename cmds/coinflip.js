const { MessageEmbed } = require('discord.js');

module.exports = {
    config: {
      name: `coinflip`
    },

    run: async (bot, message, args) => {

      
      let embed1 = new MessageEmbed()
      .setColor("#7289DA")
      .setTitle('coinflip')
      .setDescription(`**${message.author.username}**, vous avez eu **Pile**!`)
      .setFooter(`onea-bot.fr`)

      let embed2 = new MessageEmbed()
      .setColor("#7289DA")
      .setTitle('coinflip')
      .setDescription(`**${message.author.username}**, vous avez eu **Face**!`)
      .setFooter(`onea-bot.fr`)

      let random = (Math.floor(Math.random() * Math.floor(2)));
      if(random === 0) {
        message.channel.send(embed1)
        console.log(`cf`)
      }
      else {
        message.channel.send(embed2)
        console.log(`cf`)
      }
  
    }
}

