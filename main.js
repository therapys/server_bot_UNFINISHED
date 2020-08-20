let Discord = require('discord.js'),
    client = new Discord.Client(),
    fs = require('fs'),
    config = require('./config.json')
    enmap = require("enmap"),
    chalk = require('chalk'),
    prefix = config.prefix;

client.on('ready', () =>{
    console.log(`${chalk.yellow(`[Startup]`)} Server Bot by therapy#8521.`)
    console.log(`${chalk.yellow(`[Startup]`)} User: ${client.user.tag}!`);
})

//LOGIN
client.login(config.token).catch(err => {
    console.log(`${chalk.redBright(`[Error]`)} Invalid discord token provided.`);
    process.exit(1);
});

//COMMAND HANDLER
client.commands = new enmap();

fs.readdir("./commands/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
      if (!file.endsWith(".js")) return;
      let props = require(`./commands/${file}`);
      let commandName = file.split(".")[0];
      console.log(`${chalk.yellow(`[Startup]`)} Attempting to load ${chalk.underline(`${commandName}`)}`);
      client.commands.set(commandName, props);
    });
});


//EVENT HANDLER
fs.readdir("./events/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
      const event = require(`./events/${file}`);
      let eventName = file.split(".")[0];
      client.on(eventName, event.bind(null, client));
    });
  });