const { MessageEmbed } = require('discord.js');

module.exports = {
    config: {
        name: `help`
    },
    run: async (bot, message, args) => {

        message.delete();

        let embed = new MessageEmbed()
            .setColor('#7289DA')
            .setTitle(`nombotcli`)
            .addField(`Commandes :`,`listecmdscli`)
            .setFooter(`onea-bot.fr`)
        message.channel.send(embed);
        console.log(`help || pseudo: ${message.author.tag} || serveur: ${message.guild.name}`)
    }
}
