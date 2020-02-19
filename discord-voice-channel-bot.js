const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
	console.log('ready');
});
client.on('voiceStateUpdate', (oldState, newState) => {
	const channel = oldState.guild.channels.cache.find(ch => ch.name === 'voice-log');
	if (!channel) {
		console.log('#voice-log not found');
		return;
	}
	if (!oldState.channelID && newState.channelID) {
		channel.send(`${newState.member} joins ${newState.channel}`);
	} else if (oldState.channelID && !newState.channelID) {
		channel.send(`${oldState.member} leaves ${oldState.channel}`);
	}
});
client.login(fs.readFileSync('token', 'utf8').trim()).catch(console.error);
