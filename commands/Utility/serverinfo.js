const Discord = require('discord.js');
const { prefix } = require('../../SuperSecretData/config.json');

module.exports.run = async (client, message, args) => {

    const { guild } = message;

    let boostsInLevel;

    if (guild.premiumSubscriptionCount < 2) {
        boostsInLevel = 2
    } else if (guild.premiumSubscriptionCount < 15) {
        boostsInLevel = 15;
    } else if (guild.premiumSubscriptionCount <= 30) {
        boostsInLevel = 30;
    }

    const embed = new Discord.MessageEmbed()
        .setColor('7BC3EF')
        .setTitle(`Info for ${guild.name}`)
        .setThumbnail(guild.iconURL({ dynamic: true }))
        .addFields(
            { name: 'Owner', value: message.guild.member(guild.owner) ? guild.owner.toString() : guild.ownerID, inline: true },
            { name: 'Members', value: guild.memberCount, inline: true },
            { name: 'Voice Region', value: guild.region, inline: true },
            { name: 'Boosts', value: `Level ${guild.premiumTier}\n${guild.premiumSubscriptionCount}/${boostsInLevel} boosts`, inline: true },
            { name: 'Verif Level', value: `${guild.verificationLevel.toLowerCase()}`, inline: true },
            { name: 'Created Date', value: `${guild.createdAt.toString().substr(0, 15)}`, inline: true },
        )


    message.channel.send(embed);
}

module.exports.help = {
    name: 'serverinfo',
    aliases: [],
    description: 'Gives you all the nerdy information of the server.',
    usage: `${prefix}<serverinfo>`,
    cooldown: 1,
    args: false,
    legacy: false,
}