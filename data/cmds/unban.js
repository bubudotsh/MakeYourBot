const { MessageEmbed } = require('discord.js');

module.exports = {
    config: {
        name: `unban`,
        aliases: [`unban`],
    },
    run: async (bot, message, args) => {
        // Deleting the command message
        message.delete()
        // Checking if they are staff
        if(!message.member.hasPermission(`BAN_MEMBERS`)) return message.reply(`Vous n'avez pas la permission pour utiliser cette commande`)
        let serverm = message.guild.members;
        // Finding the ID mentioned in the arugument
        if(isNaN(args[0])) return message.reply(`Entrer un utilisateur valide`)
        let bannedMember = bot.users.fetch(args[0]);
        if(!bannedMember) return message.reply(`Vous ne pouvez pas ban cette utilisateur.`)
        // Unbanning the person via ID
        serverm.unban(bannedMember);
        // Wrapping it up with a bow
        await message.reply(`**${bannedMember.id}** a été banni par ${message.author.tag}.`)
        console.log(`unban`)
    }
}