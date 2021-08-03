const Discord = require('discord.js');
const { prefix } = require('../../SuperSecretData/config.json');

module.exports.run = async (client, message, args) => {
    message.channel.send('pong');
}

module.exports.help = {
    name: 'ping',
    aliases: ['ring'],
    description: 'Pings the server to get your latency.',
    usage: `${prefix}<ping>`,
    cooldown: 1,
    args: false,
    legacy: false,
}