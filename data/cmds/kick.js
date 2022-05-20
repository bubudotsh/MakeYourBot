const { MessageEmbed } = require('discord.js');

module.exports = {
    config: {
        name: `kick`,
        aliases: [`kick`]
    },
    run: async (bot, message, args) => {
        message.delete()
        if(!message.member.hasPermission('KICK_MEMBERS')) return message.reply(`Vous n'avez pas la permission pour utiliser cette commande`);
        let kuser = message.mentions.members.first()
        if(!kuser) return message.channel.send(`Vous ne pouvez pas kick cet utilisateur.`)
        let kreason = args.slice(1).join(" ");
        if(!kreason) kreason = `raison non spécifiée.`;
        kuser.kick(`Staff: ${message.author.tag} || raison: ${kreason}`)
        message.reply(`${kuser} a été kick par ${message.author.tag} pour ${kreason}.`)
        console.log(`kick`)
    }
}
