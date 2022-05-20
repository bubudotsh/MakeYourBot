const { MessageEmbed } = require('discord.js');

module.exports = {
    config: {
      name: `roll`
    },

    run: async (bot, message, args) => {

      let embed = new MessageEmbed()
      .setColor("#7289DA")
      .setTitle('Roll')
      .setDescription(`:game_die: **${message.author.username}**, vous avez eu **${Math.floor(Math.random() * 6) + 1}**!`)
      .setFooter(`onea-bot.fr`)

      message.channel.send(embed)
      console.log(`roll`)
  
    }
}

