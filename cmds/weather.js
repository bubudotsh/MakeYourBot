const weather = require('weather-js');

const Discord = require('discord.js');



module.exports = {
    config: {
        name: `weather`
    },
    run: async (bot, message, args) => {

        weather.find({search: args.join(" "), degreeType: 'C'}, function (error, result){
            // 'C' can be changed to 'F' for farneheit results
            if(error) return message.channel.send(error);
            if(!args[0]) return message.channel.send('Entrer une localisation')
    
            if(result === undefined || result.length === 0) return message.channel.send('Localisation invalide');
    
            var current = result[0].current;
            var location = result[0].location;
    
            const weatherinfo = new Discord.MessageEmbed()
            .setDescription(`**${current.skytext}**`)
            .setAuthor(`Météo de ${current.observationpoint}`)
            .setThumbnail(current.imageUrl)
            .setColor("#7289DA")
            .addField('Timezone', `UTC${location.timezone}`, true)
            .addField('Degrée Type', 'Celsius', true)
            .addField('Température', `${current.temperature}°C`, true)
            .addField('Vent', current.winddisplay, true)
            .addField('Ressenti', `${current.feelslike}°C`, true)
            .addField('Humidité', `${current.humidity}%`, true)
            .setFooter(`onea-bot.fr`)
    
            message.channel.send(weatherinfo)
        })     
        console.log(`weather`)
        

    }
}