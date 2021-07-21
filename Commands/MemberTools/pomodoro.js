const Discord = require('discord.js');
const { prefix } = require('../../SuperSecretData/config.json');

module.exports.run = async (client, message, args) => {
    //Gets the "Pomodoro" role in a server
    let pomRole = message.guild.roles.cache.find(pomRole => pomRole.name === 'Pomodoro');

    if (args[0] === 'on') {
        try {
            message.member.roles.add(pomRole).catch(console.error);
            message.author.send(`You are now in pomodoro, ${message.author}! You'll get pinged in the discord at the ends of your intervals. \n You can return to an available text channel to gain normal access to the server again. Have fun studying!`);
        } catch {
            message.channel.send(`Sorry, but I don\'t have the permissions to put you in pomodoro, ${message.author}!`);
        }
    } else if (args[0] === 'off') {
        try {
            message.member.roles.remove(pomRole).catch(console.error);
            message.channel.send(`${pomRole.name} You are now unmuted, ${message.author}. You can always return here to enter study mode again. Have a good time!`);
        } catch {
            message.channel.send(`Sorry, but I don\'t have the permissions to take you out of pomodoro, ${message.author}!`);
        }
    } else {
        message.channel.send(`Sorry, but I don\'t know what to do with that argument, ${message.author}.`);
    }
};

module.exports.help = {
    name: 'pomodoro',
    aliases: ['pom', 'tomato', 'studyinterval'],
    description: 'A command to enter or exit pomodoro mode to maximize your intellectual gains.',
    usage: `${prefix}<pomodoro> <on/off>`,
    cooldown: 60,
    args: true,
    legacy: false,
};