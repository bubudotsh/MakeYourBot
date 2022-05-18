const Discord = require('discord.js');
const fs = require("fs");

module.exports = {
    config: {
        name: `warnlevel`,
        aliases: [`ban`]
    },
    run: async (bot, message, args, error) => {
        let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));
        let user = message.mentions.users.first();
        if(message.mentions.users.size < 1) return message.reply('Mentonnez une personne').catch(console.error);
        if(!user) return message.reply("Je ne trouve pas cette utilisateur");
        if(!warns[user.id]) warns[user.id] = {
          warns: 0
        };

        const embed = new Discord.MessageEmbed()
        .setColor("#7289DA")
        .setTimestamp()
        .addField('Action:', 'Warn Check')
        .addField('Utilisateur:', `${user.username}#${user.discriminator}`)
        .addField('Nombres de warn:', warns[`${user.id}, ${message.guild.id}`].warns)
        .setFooter(`onea-bot.fr`)
        message.channel.send({embed});
        console.log(`warn lvl`)
    }
}