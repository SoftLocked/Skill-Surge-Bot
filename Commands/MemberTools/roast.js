const Discord = require('discord.js');
const { prefix } = require('../../SuperSecretData/config.json');
module.exports.run = async (client, message, args) => {

var myArray = [
  "If everyone were cookies, you'd be oatmeal raisin",
  "Placeholder 2"
];

var randomItem = myArray[Math.floor(Math.random()*myArray.length)];
 //I'm assuming this means that it choses one out of these choices
  message.channel.send(`${randomItem= myArray()}.`);
  //And this sends it out    
module.exports.help = {
    name: 'roast',
    aliases: ['command'],
    description: 'Roasts the user medium rare',
    usage: `${prefix}<roast> <user:OPTIONAL>`,
    cooldown: 1,
    args: false, 
    legacy: false,

