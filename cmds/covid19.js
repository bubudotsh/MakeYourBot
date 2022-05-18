const Discord = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
    config: {
        name: `covid19`
    },
    run: async (bot, message, args) => {

        let countries = args.join(" ");


        if(!args[0]) return message.channel.send('Votre demande doit prende cette forme (ex: "prefix"covid19 all || "prefix"covid19 NomPays)');

        if(args[0] === "all"){
            fetch(`https://covid19.mathdro.id/api`)
            .then(response => response.json())
            .then(data => {
                let confirmed = data.confirmed.value.toLocaleString()
                let recovered = data.recovered.value.toLocaleString()
                let deaths = data.deaths.value.toLocaleString()

                const embed = new Discord.MessageEmbed()
                .setTitle(`Stats covid-19 dans le monde`)
                .setColor("#7289DA")
                .addField('Cas confirmés', confirmed)
                .addField('Guéris', recovered)
                .addField('Décès', deaths)
                .setFooter(`onea-bot.fr`)

                message.channel.send(embed)
            })
        } else {
            fetch(`https://covid19.mathdro.id/api/countries/${countries}`)
            .then(response => response.json())
            .then(data => {
                let confirmed = data.confirmed.value.toLocaleString()
                let recovered = data.recovered.value.toLocaleString()
                let deaths = data.deaths.value.toLocaleString()

                const embed = new Discord.MessageEmbed()
                .setTitle(`Stats covid-19 pour le/la **${countries}**`)
                .setColor("#7289DA")
                .addField('Cas confirmés', confirmed)
                .addField('Guéris', recovered)
                .addField('Décès', deaths)
                .setFooter(`onea-bot.fr`)

                message.channel.send(embed)
            }).catch(e => {
                return message.channel.send('Invalid country provided')
            })
        }
        console.log(`covid19`)

    }
}
