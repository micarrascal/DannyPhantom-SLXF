const { Client, Intents } = require("discord.js");
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]});


// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Toy ready para el cumbion!');
});

client.on('message', (message) =>{
  let prefix = 'pana'
  console.log("PANAAA");

  if(message.author.bot) return;
  if(!message.content.startsWith(prefix)) return;

  let usuario = message.mentions.members.first()|| message.author
  const args = message.content.slice(prefix.length).trim().split(/ +/g)
  const command = args.shift().toLowerCase();


  if (command === 'ping'){
    console.log("Estoy listo!");
    message.channel.send('pong! operando con normalidad...')
  }

})


const mySecret = process.env['TOKEN']
client.login(mySecret)