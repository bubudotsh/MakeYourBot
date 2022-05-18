const { MessageEmbed } = require('discord.js');

module.exports = {
    config: {
        name: `userinfo`,
    },
    run: async (bot, message, args) => {

        let embed = new MessageEmbed()
        .setAuthor(`User Info pour ${message.author.tag} - ID: ${message.author.id}`)
        .setColor('#7289DA')
        .setThumbnail(message.author.avatarURL())
        .addField('Status', message.author.presence.status === "dnd" ? "Do Not Disturb" : message.author.presence.status, true)
        .addField('A rejoins le serveur le', message.member.joinedAt)
        .addField('Compte créer le', message.author.createdAt)
        .addField('Roles', message.member.roles.cache.size > 0 ? message.member.roles.cache.map(d => d.name).join(', ') : 'None')
        .setFooter(`onea-bot.fr`)

            
        message.channel.send(embed);
        console.log(`userinfo`)
    }
}




