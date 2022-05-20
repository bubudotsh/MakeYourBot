const { MessageEmbed } = require('discord.js');

module.exports = {
    config: {
        name: `sayembed`
    },
    run: async (bot, message, args) => {

        let say = args.join(" "); // On récupère le message qui suit "<prefix>say"
        message.delete(); // On supprime le message de l'auteur du message, soit la commande
        
        if(!say) return message.reply("Veuillez indiquez du texte") // Le ! signifie l'inverse, donc si il n'y a pas de texte, on répond indiquez du texte

        let embed = new MessageEmbed()
            .setColor('#7289DA')
            .setTitle(`${message.author.username}`)
            .addField('dis', say)
            .setFooter(`onea-bot.fr`)
        message.channel.send(embed);
        console.log(`sayembed`)
    }
}

