const Discord = require('discord.js');
const fs = require("fs");

module.exports = {
    config: {
        name: `warn`
    },
    run: async (bot, message, args) => {

        let reason = args.slice(1).join(' ');
        let user = message.mentions.users.first();
        let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));
        //let logchannel = message.guild.channels.cache.find(x => x.name = 'logs');
        if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("Vous n'avez pas la permission pour utiliser cette commande");
        if (message.mentions.users.size < 1) return message.reply('Entrer un pseudo').catch(console.error);
        if (message.mentions.users.first().id === message.author.id) return message.reply('Vous ne pouvez pas vous warn');
        if (message.mentions.users.first().id === "355393729663729665") return message.reply("Je ne peux pas warn mon developpeur");
        //if (!logchannel) return message.channel.send('I cannot find a logs channel');
        if (reason.length < 1) reason = 'Pas de raison spécifiée';
        
        if(!warns[`${user.id}, ${message.guild.id}`]) warns[`${user.id}, ${message.guild.id}`] = {
          warns: 0
        };
      
        warns[`${user.id}, ${message.guild.id}`].warns++;
      
        fs.writeFile("./warnings.json", JSON.stringify(warns), err => {
          if(err) throw err;
        });
      
        const embed = new Discord.MessageEmbed()
        .setColor("#7289DA")
        .setTimestamp()
        .addField('Action:', 'Warn')
        .addField('Utilisateur:', `${user.username}#${user.discriminator}`)
        .addField('Par:', `${message.author.username}#${message.author.discriminator}`)
        .addField('Nombres de warn:', warns[`${user.id}, ${message.guild.id}`].warns)
        .addField('Raison', reason)
        .setFooter(`onea-bot.fr`)
        message.channel.send({embed});
      
      
      
        if(warns[`${user.id}, ${message.guild.id}`].warns == 3){
          message.guild.member(user).kick(reason);
          message.reply('Warn déjà 3 fois')
        }
        console.log(`warn`)
    }
}