        
module.exports = {
    config: {
        name: `addrole`,
    },

    run: async (bot, message, args) => {

        if (!message.guild.member(bot.user).hasPermission("MANAGE_ROLES")) return message.reply("Vous n'avez pas la permission pour utiliser cette commande");
        if (message.mentions.users.size === 0) return message.reply("Mentionnez un utilisateur \nExample: `addrole @user nomdurole`");
        let member = message.guild.member(message.mentions.users.first());
        if (!member) return message.reply("Utilisateur invalide");
        let rname = message.content.split(" ").splice(2).join(" ");
        let role = message.guild.roles.cache.find(val => val.name === rname);
        if (!role) return message.reply(`${rname} n'est pas un rôle`);
        let botRolePosition = message.guild.member(bot.user).roles.highest.position;
        let rolePosition = role.position;
        let userRolePossition = message.member.roles.highest.position;
        if (userRolePossition <= rolePosition) return message.channel.send("Specifié un rôle")
        if (botRolePosition <= rolePosition) return message.channel.send("Erreur le rôle que vous voulez add est supperieur au miens.");
        member.roles.add(role).catch(e => {
            return message.channel.send(`❌**Error:**\n${e}`);
        });
        message.channel.send(`<a556017659419033653>**${message.author.username}**, le rôle **${rname}** a été ajouter à **${message.mentions.users.first().username}**.`);
        console.log(`addrole`)

    }
}