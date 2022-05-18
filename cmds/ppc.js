const { MessageEmbed } = require('discord.js');

module.exports = {
    config: {
      name: `ppc`
    },
    run: async (bot, message, args) => {

      let rps = ["**:pencil: papier**", "**:moyai: pierre**", "**:scissors: ciseaux**"];
      function random() { return `${rps[Math.floor(Math.random() * Math.floor(2))]}!` }
      let choice = args.join(" ").toLowerCase();
      if (choice === '') return message.reply("Entrez pierre, papier ou ciseaux.");
      if (choice !== "pierre" && choice !== "papier" && choice !== "ciseaux") return message.reply(`Entrez pierre, papier ou ciseaux.. ${choice} n'est pas un choix.`);

      let embed = new MessageEmbed()
      .setColor("#7289DA")
      .setTitle('PPC')
      .setDescription(random())
      .setFooter(`onea-bot.fr`)
      console.log(`ppc`)

      message.channel.send(embed)
  
    }
}

