const Discord = require('discord.js');
const { prefix, tenorKey } = require('../../SuperSecretData/config.json');

module.exports.run = async (client, message, args) => {

    let odds = Math.random();

    if (odds <= .4995) { //49.95% chance

        message.channel.send("It's heads!");

    } else if (odds >= .5005) { //49.95% chance

        message.channel.send("It's tails!");

    } else { //0.1% chance (easter egg)

        message.channel.send("WOW! It landed right on the edge! You're a lucky one!");

    }

}

module.exports.help = {
    name: 'coinflip',
    aliases: ['cf'],
    description: 'A command to flip a 2-sided coin',
    usage: `${prefix}<coinflip>`,
    cooldown: 1,
    args: false,
    legacy: false,
}