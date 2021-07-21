const Discord = require('discord.js');
const { prefix } = require('../../SuperSecretData/config.json');

module.exports.run = async (client, message, args) => {
    //Gets the "Muted" role in a server
    let studyMuteRole = message.guild.roles.cache.find(studyMuteRole => studyMuteRole.name === 'Study Mute');


    if (args[0] === 'on') {
        try {
            message.member.roles.add(studyMuteRole).catch(console.error);
            message.author.send(`You are now muted, ${message.author}. You can always return here to gain access to the server again. Have fun studying!`);
        } catch {
            message.channel.send(`Sorry, but I don\'t have the permissions to mute you, ${message.author}!`);
        }
    } else if (args[0] === 'off') {
        try {
            message.member.roles.remove(studyMuteRole).catch(console.error);
            message.channel.send(`You are now unmuted, ${message.author}. You can always return here to enter study mode again. Have a good time!`);
        } catch {
            message.channel.send(`Sorry, but I don\'t have the permissions to unmute you, ${message.author}!`);
        }
    } else {
        message.channel.send(`Sorry, but I don\'t know what to do with that argument, ${message.author}.`);
    }
};

module.exports.help = {
    name: 'studymode',
    aliases: ['focusmode', 'focusmute', 'studymute'],
    description: 'A command to move in and out of a totally intense study mode.',
    usage: `${prefix}<studymode> <on/off>`,
    cooldown: 1,
    args: true,
    legacy: false,
};