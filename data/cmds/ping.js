const { MessageEmbed } = require('discord.js');

module.exports = {
    config: {
        name: `ping`,
        aliases: [`ping`],
    },
    run: async (bot, message, args) => {

        let embed = new MessageEmbed()
            .setTitle(`Ping du bot`)
            .setColor(`#7289DA`)
            .setFooter(`onea-bot.fr`)
            .addField(`${Math.round(message.client.ws.ping)} ms`)
        message.channel.send(embed);
        console.log(`ping`)
    }

};