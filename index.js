const Discord = require("discord.js");
const client = new Discord.Client();


const mySecret = process.env['token']


client.on("ready", () => {
    console.log("Estoy listo!");
 });
 
 client.on("message", (message) => {
   if(message.content.startsWith("ping")) {
     message.channel.send("pong!");
   }
 
 });
 
 client.login(mySecret);