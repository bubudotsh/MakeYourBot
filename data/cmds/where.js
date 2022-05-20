const { MessageEmbed } = require('discord.js');

module.exports = {
    config: {
        name: `where`
    },
    run: async (bot, message, args) => {

        try {
            if (!args[0]) return message.channel.send('Specifié un channel id')
            if (!bot.channels.cache.get(args[0])) return message.channel.send('channel non trouvé')
            const channel = bot.channels.cache.find(ch => ch.id === args[0])
        
            let embed = new MessageEmbed()
              .setColor("#7289DA")
              .addField(`Guild: `, channel.guild.name)
              .addField(`Channel: `, channel.name)
              .addField(`Guild Owner: `, channel.guild.owner)
              .setFooter(`onea-bot.fr`)
        
            message.author.send(embed)
          } catch (err) {
            message.channel.send(bot.errors.genericError + err.stack).catch();
        }
        console.log(`where`)

    }
}
