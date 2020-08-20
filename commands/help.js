exports.run = (client, message, args) => {
    
    const config = require("../config.json"),
    { MessageEmbed } = require('discord.js');

    
    message.delete();

    const helpEmbed = new MessageEmbed()
    .setTitle(`:mailbox_with_mail: Help`)
    .setColor(0x006798)
    .setDescription(`**${config.prefix}help** - Displays this message. 
        **${config.prefix}new** - Creates a new ticket.
        **${config.prefix}close** - Closes the ticket.
        **${config.prefix}add** - Adds a person to the ticket.
        **${config.prefix}remove** - Removes a person from the ticket. 
        **${config.prefix}suggest** - Sends your suggestion into the #suggestions channel.`)
        .setTimestamp()
        .setThumbnail(client.user.displayAvatarURL())
        .setFooter(`${config.prefix}help | ${client.user.username}`);


    message.author.send(helpEmbed);
  };