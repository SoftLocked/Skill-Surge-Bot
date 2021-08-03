const Discord = require('discord.js');
const { prefix } = require('../../SuperSecretData/config.json');

module.exports.run = async (client, message, args) => {

    let embed;

    if (!args[0]) {
        embed = new Discord.MessageEmbed()
            .setColor('7BC3EF')
            .setTitle(`Here's ${message.author.username}'s avatar!`)
            .setAuthor(message.author.tag, message.author.avatarURL())
            .setImage(message.author.avatarURL({ dynamic: true, size: 512 }))
            .setTimestamp()
            .setFooter(`Requested by ${message.author.tag}`, message.author.avatarURL());
    } else if (args[0] == '<@!' + message.mentions.members.first().id + '>') {
        embed = new Discord.MessageEmbed()
            .setColor('7BC3EF')
            .setTitle(`Here's ${message.mentions.users.first().username}'s avatar!`)
            .setAuthor(message.mentions.users.first().tag, message.mentions.users.first().avatarURL())
            .setImage(message.mentions.users.first().avatarURL({ dynamic: true, size: 512 }))
            .setTimestamp()
            .setFooter(`Requested by ${message.author.tag}`, message.author.avatarURL());
    }

    message.channel.send(embed);
}

module.exports.help = {
    name: 'avatar',
    aliases: ['av', 'pfp'],
    description: 'Shows the avatar of a user',
    usage: `${prefix}<avatar> <user:OPTIONAL>`,
    cooldown: 1,
    args: false,
    legacy: false,
}