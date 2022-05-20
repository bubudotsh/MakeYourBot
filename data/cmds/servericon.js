const { MessageEmbed } = require('discord.js');
const fs = require("fs");

module.exports = {
    config: {
        name: `servericon`
    },
    run: async (bot, message, args) => {
    let embed = new MessageEmbed()
        .setAuthor(message.guild.name, message.guild.iconURL)
        .setColor("#7289DA")
        .setImage(message.guild.iconURL)
        .setFooter(`onea-bot.fr`)
    message.channel.send(embed);
    console.log(`servericon`)
    }
}
