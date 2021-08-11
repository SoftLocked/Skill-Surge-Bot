const Discord = require('discord.js');
const { prefix } = require('../../SuperSecretData/config.json');
module.exports.run = async (client, message, args) => {

let roasts = [
  "If everyone were cookies, ${message.mentions.members.first().username} would be the stale six month old oatmeal raisin on the back shelf",
  "I'm using ${message.mentions.members.first().username} as a placeholder because that's all they can do"
  "if there was a laziness contest, ${message.mentions.members.first().username} wouldn't even get a rank because they can't be bothered to get off their couch"
];
//The different types of roasts
let roast = roasts[Math.floor(Math.random() * roasts.length)];
 //I'm assuming this means that it randomly choses one out of these choices, got the format from https://www.codegrepper.com/code-examples/javascript/select+random+object+from+array+javascript
  message.channel.send("${roast}.");
  //And this sends it out    
  
}
//can't forget the curly brackets
module.exports.help = {
    name: 'roast',
    aliases: ['insult'],
    description: 'Roasts the user medium rare',
    usage: `${prefix}<roast> <@user>`,
    cooldown: 1,
    args: false, 
    legacy: false,
}
//I SAID, DON'T FORGET THE CURLY BRACKETS DAMMIT
