const { MessageEmbed } = require('discord.js');

module.exports = {
    config: {
        name: `clear`,
        aliases: [`purge`, `clear`]
    },
    run: async (bot, message, args) => {
        message.delete()
        if(!message.member.hasPermission(`KICK_MEMBERS`)) return message.reply(`Vous n'avez pas la permission pour utiliser cette commande`).then(m => (m.delete({timeout: 10000})));
        let clearamount = args[0];
        if(isNaN(clearamount)) return message.reply(`Entrer le nombre de message à clear`).then(m => (m.delete({timeout: 10000})));
        if(clearamount >= 100) clearamount = 99;
        if(clearamount <= 0) return message.reply(`Entrer un nombre supperieur à 1`)
        message.channel.send(`Clear en cours...`).then(msg => msg.delete({timeout: 2000}));
        setTimeout(async () => {
            await message.channel.bulkDelete(clearamount);
        }, 1000)
        console.log(`clear`)
    }
}