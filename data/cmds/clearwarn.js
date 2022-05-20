const Discord = require('discord.js');
const fs = require("fs");

module.exports = {
    config: {
        name: `clearwarn`
    },
    run: async (bot, message, args) => {
        let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));
        let user = message.mentions.users.first();
        if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("Vous n'avez pas la permission pour utiliser cette commande");
        if(message.mentions.users.size < 1) return message.reply('Mentionner un pseudo').catch(console.error);
        if(!user) return message.reply("Pseudo non trouvé");
        if(!warns[`${user.id}, ${message.guild.id}`]){
            warns[`${user.id}, ${message.guild.id}`] = {
                warns: 0
            };
        }

        let reason = `${warns[`${user.id}, ${message.guild.id}`].warns} Les warns on été clear`;
        if(warns[`${user.id}, ${message.guild.id}`].warns > 0) {
            warns[`${user.id}, ${message.guild.id}`] = {
            warns: 0
        };
        }else{
            reason = "Cette personne n'as pas de warn"
        };
    
        fs.writeFile("./warnings.json", JSON.stringify(warns), err => {
            if(err) throw err;
          });
    
        const embed = new Discord.MessageEmbed()
        .setColor("#7289DA")
        .setTimestamp()
        .addField('Action:', 'Clear Warns', true)
        .addField('Utilisateur:', `${user.username}#${user.discriminator}`, true)
        .addField('Result:',reason, true)
        .setFooter(`onea-bot.fr`)
        message.channel.send({embed});
        console.log(`clearwarn`)
    }
}