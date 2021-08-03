//Initialize discord.js
const Discord = require('discord.js');

//Initialize filestream
const fs = require('fs');

//Initialize the data files
const config = require('./SuperSecretData/config.json');
//const mongo = require('./mongo')
//const messageCount = require('./UserStats/messageCounter');
const nonoWords = require('./SuperSecretData/nonoWords.json');

//Initialize the discord client
global.client = new Discord.Client();

//Initialize command and cooldown collections
client.commands = new Discord.Collection();
client.cooldowns = new Discord.Collection();

let prevMessage;

//Keep track of which interval the pomodoro timer is in
let studyIntvl = true;

const commandFolders = fs.readdirSync('./commands');
for (const folder of commandFolders) {

    const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));

    for (const file of commandFiles) {
        const command = require(`./commands/${folder}/${file}`);
        console.log(`${file} is Loaded`);
        client.commands.set(command.help.name, command);
    }
}

client.login(config.token);

client.on('ready', async () => {

    //await mongo().then(mongoose => {
    //try {
    //console.log("Connected to Mongo!");
    //} finally {
    //mongoose.connection.close();
    //}
    //});

    //messageCount(client);

    client.user.setStatus('online');
    client.user.setPresence({
        game: {
            name: "over the server",
        },
    });

    console.log('Beep boop boop. I\'m ready!');

    /**************************************************
    * Pomodoro Timer
    **************************************************/

    //Find pomodoro Channel
    let pomChannel = client.channels.cache.get('870013984030490745');

    const pomInterval = setInterval(() => {

        pomChannel.send(`<@&870014013818429570> Study Time! Hit the books for 25 minutes!`);

        setTimeout(() => {
            pomChannel.send(`<@&870014013818429570> Break Time! Enjoy yourself for 5 minutes!`);
        }, 1500000); //25 minutes

    }, 1800000); //30 minutes

    /**************************************************
    * Disboard Bump Reminder
    **************************************************/

    //Bot commands
    let bumpChannel = client.channels.cache.get('724868663131242496');

    const bumpInterval = setInterval(() => {

        bumpChannel.send(`Just a friendly reminder to support the server! Simply type the command \`!d bump\`.`);

    }, 7200000); //2 hours

});


client.on('message', message => {

    if (message.author.bot || message.channel.type === 'dm') return;

    /**************************************************
     * Auto Mod
    **************************************************/

    //autoMod(message);

    /**************************************************
     * Command Infrastructure
    **************************************************/

    if (!message.content.startsWith(config.prefix)) return;



    const args = message.content.slice(config.prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.help.aliases && cmd.help.aliases.includes(commandName));


    if (!command) {
        return message.reply('That\'s not a command that I have!');
    };


    if (command.help.args && !args.length) {
        return message.channel.send(`I need more information, ${message.author}! Give me some arguments!`);
    }

    const { cooldowns } = client;

    if (!cooldowns.has(command.help.name)) {
        cooldowns.set(command.help.name, new Discord.Collection());
    }

    const now = Date.now();
    const timestamps = cooldowns.get(command.help.name);
    const cooldownAmount = (command.help.cooldown || 1) * 1000;

    if (timestamps.has(message.author.id)) {
        const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

        if (now < expirationTime) {
            const timeLeft = (expirationTime - now) / 1000;
            return message.reply(`You're on cooldown! Wait \`${timeLeft.toFixed(1)}\` more second(s) before you try using \`${command.help.name}\` again!`);

        }
    }

    timestamps.set(message.author.id, now);
    setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

    runCommand(command, message, args);

});

function runCommand(cmd, msg, args) {

    try {
        cmd.run(client, msg, args);
    } catch (error) {
        console.error(error);
        msg.reply('There was an issue executing that command! Contact Hari#5409 if you think this is a bot issue.');
    }

}

function autoMod(message) {
    //Message Speed Mute
    if (prevMessage && message.author == prevMessage.author) {

        if (message.createdAt.getTime() - prevMessage.createdAt.getTime() < 400 || message.content == prevMessage.content) {
            //Mute procedure
            let mutedRole = message.guild.roles.cache.find(mutedRole => mutedRole.name === 'Muted');
            message.member.roles.add(mutedRole).catch(console.error);
            message.channel.send(`I have muted ${message.member}.`);
        }

    }

    //Previous message
    prevMessage = message;

    //Nono Words Mute
    for (let i = 0; i < nonoWords.words.length; i++) {
        if (message.content.toLowerCase().includes(nonoWords.words[i].toLowerCase())) {
            //Mute procedure
            let mutedRole = message.guild.roles.cache.find(mutedRole => mutedRole.name === 'Muted');
            message.member.roles.add(mutedRole).catch(console.error);
            return message.channel.send(`I have muted ${message.member}.....`);
        }
    }

    //Spam Messages Mute
    try {
        if (message.mentions.members.size >= 5) {
            //Mute procedure
            let mutedRole = message.guild.roles.cache.find(mutedRole => mutedRole.name === 'Muted');
            message.member.roles.add(mutedRole).catch(console.error);
            return message.channel.send(`I have muted ${message.member}......`);
        }
    } catch (error) {

    }
}
