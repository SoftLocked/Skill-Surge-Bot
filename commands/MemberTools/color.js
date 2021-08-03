const Discord = require('discord.js');
const { prefix, tenorKey } = require('../../SuperSecretData/config.json');

module.exports.run = async (client, message, args) => {

    if (args[0].length === 6) {

        const embedColor = new Discord.MessageEmbed()
            .setTitle('Here\'s your color!')
            .addField('Hex', `#${args[0]}`, true)
            .setColor(args[0])
            .setThumbnail(`https://serux.pro/rendercolour?hex=${args[0]}`);


        message.channel.send(embedColor);

    }

}

module.exports.help = {
    name: 'color',
    aliases: [],
    description: 'A command to visualize a color by hex',
    usage: `${prefix}<color> <6 digit hex code>`,
    cooldown: 1,
    args: true,
    legacy: false,
}