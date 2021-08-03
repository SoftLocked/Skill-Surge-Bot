const Discord = require('discord.js');
const { prefix } = require('../../SuperSecretData/config.json');

module.exports.run = async (client, message, args) => {
    //User needs permissions to kick members in order to mute members
    if (message.member.hasPermission("KICK_MEMBERS")) {

        //Gets the "Muted" role in a server
        let mutedRole = message.guild.roles.cache.find(mutedRole => mutedRole.name === 'Muted');

        if (args[0] === '<@!' + message.mentions.members.first().id + '>') { //&& !message.mentions.members.first().roles.cache.has(Muted.id)) {

            try {
                message.mentions.members.first().roles.add(mutedRole).catch(console.error);
                message.channel.send(`I have muted ${message.mentions.members.first()}.`);
            } catch {
                message.channel.send(`Sorry, but I don\'t have the permissions to mute ${message.mentions.members.first()}!`);
            }
        } else {
            message.channel.send(`Sorry, but I don\'t know what to do with that argument, ${message.author}.`);
        }
    } else {
        message.channel.send('Sorry, but you don\'t have the permissions to mute people!');
    }
}


module.exports.help = {
    name: 'mute',
    aliases: ['unmoot', 'shush', 'silence', 'quiet'],
    description: 'A command to mute people who are loud or annoying.',
    usage: `${prefix}<mute> <@user>`,
    cooldown: 60,
    args: true,
    legacy: true,
}
