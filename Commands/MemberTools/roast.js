const Discord = require('discord.js');
const { prefix } = require('../../SuperSecretData/config.json');
module.exports.run = async (client, message, args) => {

var myArray = [
  "If everyone were cookies, you'd be oatmeal raisin",
  "Placeholder 2"];

var randomItem = myArray[Math.floor(Math.random()*myArray.length)];

  const embed = new Discord.MessageEmbed()
   .setColor('7BC3EF')
  
 
  if(!args[0]) return message.channel.send('randomItem=myArray')

module.exports.help = {
    name: 'roast',
    aliases: ['command'],
    description: 'Roasts the user medium rare',
    usage: `${prefix}<roast> <@user>`,
    cooldown: 1,
    args: false, 
    legacy: false,

