const { MessageEmbed } = require('discord.js');

module.exports = {
    config: {
        name: `removerole`,
    },
    run: async (bot, message, args) => {
        if (!message.guild.member(bot.user).hasPermission("MANAGE_ROLES")) return message.reply("Vous n'avez pas la permission pour utiliser cette commande");
        if (message.mentions.users.size === 0) return message.reply("Mentionnez un utilisateur \nExample: `removerole @user nomdurole`");
        let member = message.guild.member(message.mentions.users.first());
        if (!member) return message.reply("Utilisateur invalide");
        let rname = message.content.split(" ").splice(2).join(" ");
        let role = message.guild.roles.cache.find(val => val.name === rname);
        if (!role) return message.reply(`Erreur ${rname} n'est pas un rôle`);
        let botRolePosition = message.guild.member(bot.user).roles.highest.position;
        let rolePosition = role.position;
        let userRolePossition = message.member.roles.highest.position;
        if (userRolePossition <= rolePosition) return message.channel.send("Erreur le rôle que vous voulez remove est supperieur au votre.")
        if (botRolePosition <= rolePosition) return message.channel.send("Erreur le rôle que vous voulez remove est supperieur au miens.");
        member.roles.remove(role).catch(e => {
            return message.channel.send("Erreur le rôle que vous voulez remove est supperieur au miens.");
        });
        message.channel.send(`<a556017659419033653> **${message.author.username}**, Le role **${role.name}** a été remove de **${message.mentions.users.first().username}**.`);
        console.log(`rm role`)
    }
}