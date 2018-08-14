const Discord=require('discord.js');
const client=new Discord.Client();
client.on('voiceStateUpdate',(oldMember,newMember)=>{
	const channel=oldMember.guild.channels.find(ch=>ch.name==='voice-log');
	if(!channel)return;
	if(oldMember.voiceChannel===undefined&&newMember.voiceChannel!==undefined){
		channel.send(`${newMember} joins ${newMember.voiceChannel}`);
	}else if(newMember.voiceChannel===undefined){
		channel.send(`${oldMember} leaves ${oldMember.voiceChannel}`);
	}
});
client.login('token');
