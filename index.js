// require the discord.js module
const Discord = require('discord.js');

// create a new Discord client
const client = new Discord.Client();

// when the client is ready, run this code
// this event will only trigger one time after logging in
client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});
// login to Discord with your app's token
client.login('NTUwMTUxMjM0OTE3NjI5OTUz.XT2SPQ.PPZvee7smlrKp2vzsj4NOAc9s7o');