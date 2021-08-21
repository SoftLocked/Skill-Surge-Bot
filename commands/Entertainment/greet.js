  
const Discord = require('discord.js');
const { prefix } = require('../../SuperSecretData/config.json');

module.exports.run = async (client, message, args) => {
    message.channel.send('Hello');
}

module.exports.help = {
    name: 'greet',
    aliases: ['sayHi'],
    description: 'Welcomes you.',
    usage: `${prefix}<greet>`,
    cooldown: 1,
    args: false,
    legacy: false,
}
