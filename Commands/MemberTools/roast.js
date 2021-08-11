const Discord = require('discord.js');
const { prefix } = require('../../SuperSecretData/config.json');
module.exports.run = async (client, message, args) => {

var roasts = [
  "If everyone were cookies, you'd be oatmeal raisin",
  "Placeholder 2"
];
//The different types of roasts
var roast = roasts[Math.floor(Math.random() * roasts.length)];
 //I'm assuming this means that it choses one out of these choices, got the format from https://www.codegrepper.com/code-examples/javascript/select+random+object+from+array+javascript
  message.channel.send(`${roast}.`);
  //And this sends it out    
  
}
//can't forget the curly brackets
module.exports.help = {
    name: 'roast',
    aliases: ['insult'],
    description: 'Roasts the user medium rare',
    usage: `${prefix}<roast> <user:OPTIONAL>`,
    cooldown: 1,
    args: false, 
    legacy: false,
}
//I SAID, DON'T FORGET THE CURLY BRACKETS DAMMIT
