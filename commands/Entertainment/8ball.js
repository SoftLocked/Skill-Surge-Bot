const Discord = require('discord.js');
const { prefix, tenorKey } = require('../../SuperSecretData/config.json');

module.exports.run = async (client, message, args) => {

    var responses = [
        "It is certain",
        "It is decidedly so",
        "Without a doubt",
        "Yes, definitely",
        "You may rely on it",
        "As I see it, yes",
        "Most likely",
        "Outlook good",
        "Yes",
        "Signs point to yes",
        "Reply hazy try again",
        "Ask again later",
        "Better not tell you now",
        "Cannot predict now",
        "Concentrate and ask again",
        "Mayhaps",
        "Don't count on it",
        "My reply is no",
        "My sources say no",
        "Outlook not so good",
        "Very doubtful",
        "definitely not"
    ];

    let odds = Math.floor(Math.random() * responses.length);

    message.channel.send(responses[odds]);

}

module.exports.help = {
    name: '8ball',
    aliases: ['eightball', 'magic8ball'],
    description: 'A command to consult the magic 8ball',
    usage: `${prefix}<8ball>`,
    cooldown: 1,
    args: true,
    legacy: false,
}
