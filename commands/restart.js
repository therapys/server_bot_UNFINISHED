const { MessageEmbed } = require('discord.js');
const config = require("../config.json");
exports.run = (client, message) => {
    
    message.delete();

    errorEmbed = new MessageEmbed()
    .setColor("A62019")
    .setDescription(`<@${message.author.id}> ` + "Invalid Permissions!");

    restartEmbed = new MessageEmbed()
    .setColor(0x006798)
    .setDescription(`**Restarting!** - Bot should be back up in 5-10 seconds.`);
  
    if (message.author.hasRole = !config.admin_role) return message.channel.send(errorEmbed);

    message.channel.send(restartEmbed).then(m => {
        process.exit(1)
    })
  };