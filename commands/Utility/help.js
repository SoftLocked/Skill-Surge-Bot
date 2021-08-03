const Discord = require('discord.js');
const { prefix } = require('../../SuperSecretData/config.json');

module.exports.run = async (client, message, args) => {

    const data = [];

    const { commands } = message.client;

    if (!args.length) {
        data.push('Here are all my commands: \n');

        const embedGeneral = new Discord.MessageEmbed()
            .setColor('7BC3EF')
            .setTitle('Here are all my commands')
            .setDescription(`${commands.map(command => !command.help.legacy ? `\`${command.help.name}\` - ${command.help.description}` : `\`Legacy Command\` --------------------`).join(`\n`)}`)
            .addField(`You can use \`${prefix}help <command name>\`, in the server, to get info on a specific command!`, '-')
            .setTimestamp()
            .setFooter(`Requested by ${message.author.tag}`, message.author.avatarURL());

        return message.author.send(embedGeneral)
            .then(() => {
                message.reply('You\'ve got mail!');
            })
            .catch(error => {
                message.reply('I can\'t reach you. Maybe you\'ve got DMs disabled?')
            });
    }

    const name = args[0].toLowerCase();
    const command = commands.get(name) || commands.find(cmd => cmd.help.aliases && cmd.help.aliases.includes(name));

    if (!command) {
        return message.reply('That\'s not a command that I have!');
    }

    if (command.help.legacy) {
        message.reply('That\'s a legacy command and doesn\'t appear in the documentation, but you found it, so--as a reward--here\'s some information about it!');
    }

    const embedSpecific = new Discord.MessageEmbed()
        .setColor('7BC3EF')
        .setTitle(`${command.help.name}`)
        .setDescription(`${command.help.description}`)
        .addFields(
            { name: 'Usage', value: `\`${command.help.usage}\`` },
            { name: 'Aliases', value: command.help.aliases.length > 0 ? command.help.aliases.join(', ') : 'None', inline: true },
            { name: 'Cooldown', value: `${command.cooldown || 1} second(s)`, inline: true },
        )
        .setTimestamp()
        .setFooter(`Requested by ${message.author.tag}`, message.author.avatarURL());

    message.channel.send(embedSpecific);
}

module.exports.help = {
    name: 'help',
    aliases: ['commands'],
    description: 'A command to send help when you call for it.',
    usage: `${prefix}<help> <command name>`,
    cooldown: 1,
    args: false,
    legacy: false,
};