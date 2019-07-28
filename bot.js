const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

 
// login to Discord with your app's token
client.login('NTUwMTUxMjM0OTE3NjI5OTUz.XT3p-g.1BKEuK7FCRqxtfFWIBzo0dPYCqk');