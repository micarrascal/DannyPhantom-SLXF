const Discord = require("discord.js");
const client = new Discord.Client();


function presence(){
  client.user.setPresence({
      status: "online",
      game: {
          name: "DANNY | *help",
          type: "Playing Birth Charts"

      }
  });
}



const mySecret = process.env['token']
constconfig = require("./config.json")

client.on("ready", () => {
    console.log("Estoy listo!");
    presence();
 });
 
 let predix = config.prefix;
 client.on("message", (message) => {
// avoid bucle 
if(message.author.bot) return;
if(!message.content.startsWith(prefix)) return;
// commands  
 const args= message.content.slice(prefix.length).trim().split(/ +/g);
 const command = args.shift().toLowerCase();


 
 });
 
 client.login(mySecret);