const Discord = require('discord.js');
const { prefix } = require('../../SuperSecretData/config.json');
module.exports.run = async (client, message, args) => {

    let roasts = [
        `If everyone were cookies, ${message.mentions.members.first().user.username} would be the stale six month old oatmeal raisin on the back shelf.`,
        `I'm using ${message.mentions.members.first().user.username} as a placeholder because that's all they can do.`,
        `if there was a laziness contest, ${message.mentions.members.first().user.username} wouldn't even get a rank because they can't be bothered to get off their couch.`
    ];
    //The different types of roasts
    if (args[0] === '<@!' + message.mentions.members.first().id + '>') {
        //Randomly chooses one of the roasts in the array and sends it out
        let roast = roasts[Math.floor(Math.random() * roasts.length)];
        message.channel.send(`${roast}`);
    }
}
module.exports.help = {
    name: 'roast',
    aliases: ['insult'],
    description: 'Roasts the user',
    usage: `${prefix}<roast> <@user>`,
    cooldown: 1,
    args: true,
    legacy: false,
}