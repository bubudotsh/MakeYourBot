const { MessageEmbed } = require('discord.js');
const os = require("os")

module.exports = {
    config: {
        name: `botinfo`,
        aliases: [`botinfo`]
    },
    run: async (bot, message, args) => {

        const core = os.cpus()[0];

        let embed = new MessageEmbed()
            .setTitle(`Bot Information`)
            .setColor(`#7289DA`)
            .setThumbnail(bot.user.displayAvatarURL())
            .setFooter(`onea-bot.fr`)
            .setTimestamp()
            .addField('RAM Usage', `${((process.memoryUsage().heapUsed / 1024) / 1024).toFixed(2)} MB`, true)
            .addField(`Host OS`, `${os.platform} ${os.release}`, true)
            .addField(`Host Name`, `${os.hostname}`, true)
            .addField(`Host Version`, `${os.version}`, true)
            .addField(`CPU`, `${core.model}`, true)
            .addField(`Nb CPU`, `${os.cpus().length} coeurs`, true)
            .addField(`CPU speed`, `${core.speed} MHz`, true)
            .addField(`ping`, `${Math.round(message.client.ws.ping)} ms`, true)
            .addField(`Host`, `onea-bot.fr`, true)

        message.channel.send(embed);
        console.log(`botinfo`)
    }
}
