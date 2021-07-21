const Discord = require('discord.js');
const { prefix } = require('../../SuperSecretData/config.json');

module.exports.run = async (client, message, args) => {
    if (message.member.hasPermission("KICK_MEMBERS")) {

        //Get the muted role
        let mutedRole = message.guild.roles.cache.find(mutedRole => mutedRole.name === 'Muted');

        if (args[0] === '<@!' + message.mentions.members.first().id + '>') {//&& message.mentions.members.first.roles.cache.has(Muted.id)) {

            try {
                message.mentions.members.first().roles.remove(mutedRole).catch(console.error);
                message.channel.send(`I have unmuted ${message.mentions.members.first()}.`);
            } catch {
                message.channel.send(`Sorry, but I don\'t have the permissions to unmute ${message.mentions.members.first()}!`);
            }
        } else {
            message.channel.send(`Sorry, but I don\'t know what to do with that argument, ${message.author}.`);
        }
    } else {
        message.channel.send('Sorry, but you don\'t have the permissions to unmute people!');
    }
}


module.exports.help = {
    name: 'unmute',
    aliases: [],
    description: 'A command to unmute people when they become less loud or annoying.',
    usage: `${prefix}<unmute> <@user>`,
    cooldown: 1,
    args: true,
    legacy: true,
}
