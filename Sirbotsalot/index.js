'use strict';

const Discord = require('discord.js');
const client = new Discord.Client();
const keepAlive = require('./server');
var config = require('./config.json');
client.on('ready', () => {
	console.log('I am ready!');
});

client.on('message', message => {
	// bot checker starts here
	const args = message.content.slice(config.prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();
	if(config.messageLog){
		if (message.author.bot) return;
		else console.log(message.content);
	}
	/* bot checker end here
	help stats here */
	if (command === 'help') {
		if (!args.length) {
			message.channel.send('My prefix is - ' + config.prefix + '\n' + config.prefix + 'help - returns command help\n' + config.prefix + 'help moderation - returns moderation help\n' + config.prefix + 'help fun - returns fun help');
		}
		if (args[0] === 'moderation') {
			message.channel.send('Moderation:\n' + config.prefix + 'ban <@member> <reason> - bans the member\n' + config.prefix + 'kick <@member> <reason> - kicks the member\n' + config.prefix + 'mute <@member> <reason> - mutes the member\n' + config.prefix + 'warn <@member> <reason> - warns the member');
		}
		else if (args[0] === 'fun') {
			message.channel.send('Fun:\n' + config.prefix + 'kill <member> - kills the member\n' + config.prefix + 'punch <member> - punches the member\n' + config.prefix + 'stab <member> stabs the member\n' + config.prefix + 'shoot <member> - shoots the member\n' + config.prefix + 'fight <member> - picks a fight with the member');
		}
	}
	/* help ends the
	moderation starts here */

	/* moderation ends here
	fun starts here */
	else if (command === "kill") {
		message.channel.send("<@" + message.author.id + "> killed " + '<@' + message.mentions.members.first() + '>');
	}
	else if (command === "punch") {
		message.channel.send("<@" + message.author.id + "> punched " + '<@' + message.mentions.members.first() + '>');
	}
	else if (command === "stab") {
		message.channel.send("<@" + message.author.id + "> stabbed " + '<@' + message.mentions.members.first() + '>');
	}
	else if (command === "shoot") {
		message.channel.send("<@" + message.author.id + "> shot " + '<@' + message.mentions.members.first() + '>');
	}
	else if (command === "fight") {
		const isWinner = Math.random();
		if (isWinner > 0.5) {
			message.channel.send("<@" + message.author.id + "> fought " + '<@' + message.mentions.members.first() + '>' + " and won.");
		}
		else if (isWinner < 0.5) {
			message.channel.send("<@" + message.author.id + "> fought " + '<@' + message.mentions.members.first() + '>' + " and lost.");
		}
		else if (isWinner === 0.5) {
			message.channel.send("<@" + message.author.id + "> fought " + '<@' + message.mentions.members.first() + '>' + " and tied.");
		}
	}
	/* fun ends here
	misc. commands start here */
	else if (command === "log"){
		if (member.hasPermission('MANAGE_SERVER', { checkAdmin: false, checkOwner: false })) {
			if(config.logMessages) 	config.logMessages = false;
			else config.logMessages = true;
	}
		else message.send("You don't have the right permissions do run this command.")
	}
		
});
keepAlive();
client.login(/* Bot token redacted for security pourpses */);
