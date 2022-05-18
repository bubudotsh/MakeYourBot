const { MessageEmbed } = require('discord.js');

module.exports = {
    config: {
        name: `ban`,
        aliases: [`ban`]
    },
    run: async (bot, message, args) => {
        message.delete()
        if(!message.member.hasPermission(`BAN_MEMBERS`)) return message.reply(`Vous n'avez pas la permission pour utiliser cette commande`)
        let banMember = message.mentions.members.first();
        if(!banMember) return message.reply(`Entrer un utilisateur valide`)
        let banreason = args.slice(1).join(" ");
        if(!banreason) banreason = `raison non spécifiée`;
        message.guild.members.ban(banMember, {reason: `Staff: ${message.author.tag} || raison: ${banreason}`})
        message.reply(`${banMember} a été banni par ${message.author.tag} pour ${banreason}.`)
        console.log(`ban`)
    }
}