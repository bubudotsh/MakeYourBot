const { MessageEmbed } = require('discord.js');
const Discord =  require('discord.js');

module.exports = {
    config: {
        name: `pp`,
    },
    run: async (bot, message, args) => {
        let avatar = message.mentions.users.size ? message.mentions.users.first().avatarURL({ format: 'png', dynamic: true, size: 2048 }) : message.author.avatarURL({ format: 'png', dynamic: true, size: 2048 });
    if (message.mentions.users.size > 0) {
      const embed = new Discord.MessageEmbed()
        .setColor("#7289DA")
        .setTitle(`Photo de profil de ${message.mentions.users.first().username} :`)
        .setImage(`${avatar}`)
        .setFooter(`onea-bot.fr`)
        message.channel.send({embed});
    } else {
      const embed = new Discord.MessageEmbed()
      .setColor("#7289DA")
      .setTitle(`Photo de profil de ${message.author.username} :`)
      .setImage(`${avatar + "?size=2048"}`)
      .setFooter(`onea-bot.fr`)
      message.channel.send({embed});
    }
    console.log(`pp`)
    }
}