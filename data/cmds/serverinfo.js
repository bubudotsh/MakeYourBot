const { MessageEmbed } = require('discord.js');

module.exports = {
    config: {
        name: `serverinfo`
    },
    run: async (bot, message, args) => {
        var guild = message.guild;
        let embed = new MessageEmbed()
            .setColor('#7289DA')
            .setTitle(`Server info`)
            .addField('Channels', `${message.guild.channels.cache.filter(chan => chan.type === 'voice').size} Voice Channels | ${message.guild.channels.cache.filter(chan => chan.type === 'text').size} Text Channels | ${message.guild.channels.cache.filter(chan => chan.type === 'category').size} Categories | ${Math.round((message.guild.channels.cache.filter(chan => chan.type === 'voice').size / message.guild.channels.cache.size) * 100)}% Voice Channels | ${Math.round((message.guild.channels.cache.filter(chan => chan.type === 'text').size / message.guild.channels.cache.size) * 100)}% Text Channels | ${Math.round((message.guild.channels.cache.filter(chan => chan.type === 'category').size / message.guild.channels.cache.size) * 100)}% Categories`, true)
            .addField('Members', `${message.guild.members.cache.filter(member => member.user.bot).size} Bots | ${(message.guild.memberCount) - (message.guild.members.cache.filter(member => member.user.bot).size)} Humans | ${message.guild.memberCount} Total Members | ${Math.round((message.guild.members.cache.filter(member => member.user.bot).size / message.guild.memberCount) * 100)}% Bots | ${Math.round((((message.guild.memberCount) - (message.guild.members.cache.filter(member => member.user.bot).size)) / message.guild.memberCount) * 100)}% Humans`, true)
            .addField('Server crée a', message.guild.createdAt, true)
            .addField("Server Region", message.guild.region, true)
            .addField(`Server Icon`, message.channel.guild.iconURL() === null ? "Default Icon" : message.channel.guild.iconURL(), true)
            .addField(`Guild ID`, message.guild.id, true)
            .addField(`Server Owner`, message.guild.owner, true)
            .addField(`Server Owner ID`, message.guild.ownerID, true)
            .addField(`Server Verification Level`, message.guild.verificationLevel, true)
            .addField(`Roles Size`, message.guild.roles.cache.size, true)
            .setFooter(`onea-bot.fr`)
        message.channel.send(embed);
        console.log(`serverinfo`)
    }
}