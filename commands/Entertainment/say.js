const Discord = require('discord.js');
const { prefix } = require('../../SuperSecretData/config.json');

module.exports.run = async (client, message, args) => {
    message.channel.send(args.join(' '));
}

module.exports.help = {
    name: 'say',
    aliases: ['repeat'],
    description: 'A command to make the bot repeat what you say',
    usage: `${prefix}<say>`,
    cooldown: 1,
    args: false,
    legacy: false,
}