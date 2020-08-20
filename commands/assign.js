exports.run = (client, message, [mention, ...reason]) => {
    
    const config = require("../config.json"),
    { MessageEmbed } = require('discord.js');
  
    let user = message.mentions.members.first() || message.guild.members.get(args[0]);


    //Embeds
    errEmbed = new MessageEmbed()
    .setColor("A62019")


    //permissions check
    if (!message.author.hasPermission("MANAGE_ROLES")) return errEmbed.setDescription(`<@${message.author.id}> Invalid permissions.`);
    if (!user) return errEmbed.setDescription(`<@${message.author.id}> Invalid mentions.`);

};