const { MessageEmbed } = require('discord.js');

module.exports = {
    config: {
        name: `roleinfo`,
        aliases: [`roleinfo`]
    },
    run: async (bot, message, args) => {

        let embed = new MessageEmbed()
        .setColor("#7289DA")
        .setTitle("Role info")
        .setImage(message.guild.iconURL)
        .addField("Nombre de rôles", `Ce server a ${message.guild.roles.cache.size} rôles`)
        .setFooter(`onea-bot.fr`)
            
        message.channel.send(embed);
        console.log(`rolelist`)
    }
}




