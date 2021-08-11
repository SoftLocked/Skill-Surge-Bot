const Discord = require('discord.js');
const { prefix } = require('../../SuperSecretData/config.json');
module.exports.run = async (client, message, args) => {

var myArray = [
  "If everyone were cookies, you'd be oatmeal raisin",
  "Placeholder 2"];


    if (args[0] === '<@!' + message.mentions.members.first().id + '>') {
   try { message.channel.send(`${randomItem= myArray()}.`);
       }
module.exports.help = {
    name: 'roast',
    aliases: ['command'],
    description: 'Roasts the user medium rare',
    usage: `${prefix}<roast> <user:OPTIONAL>`,
    cooldown: 1,
    args: false, 
    legacy: false,

