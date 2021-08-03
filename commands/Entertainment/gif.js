const Discord = require('discord.js');
const { prefix, tenorKey } = require('../../SuperSecretData/config.json');
const fetch = require('node-fetch');

module.exports.run = async (client, message, args) => {

    if (args[0]) {
        url = `https://g.tenor.com/v1/search?q=${args[0]}&key=${tenorKey}&limit=8`;

        let response = await fetch(url);
        let json = await response.json();

        let index = Math.floor(Math.random() * json.results.length)

        message.channel.send(json.results[index].url);

    }
}

module.exports.help = {
    name: 'gif',
    aliases: ['animation'],
    description: 'A command to get a gif of your choosing',
    usage: `${prefix}<gif> <topic>`,
    cooldown: 1,
    args: true,
    legacy: false,
}