const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv-placeholder').config();

client.once('ready', () => {
    console.log('Ready!');
});

client.login(process.env.BOT_TOKEN);