const { Client, Intents } = require("discord.js");
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]});
const cartas = require('./cards.json')


// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Toy ready para el cumbion!');
});

client.on('message', (message) =>{
  let prefix = 'pana'

  if(message.author.bot) return;
  if(!message.content.startsWith(prefix)) return;

  let usuario = message.mentions.members.first()|| message.author
  const args = message.content.slice(prefix.length).trim().split(/ +/g)
  const command = args.shift().toLowerCase();


  if (command === 'ping'){
    message.channel.send('pong! operando con normalidad...')
  }

  if (command === 'test'){
    message.channel.send('prueba de cartas...')
    console.log(cartas.cards[1])
  }

  if (command === 'horoscope'){
    message.channel.send('barajando cartas....')

    cardId = Math.floor(Math.random() * (77));
    console.log(cardId)

    message.channel.send('se han alineado los astros.. \n\ntu carta es:', {files: ["./assets/images/deck/" + cartas.cards[cardId].img]})
    setTimeout(()=>{
        message.channel.send('descripcion de la carta: ' + cartas.cards[cardId].desc)
    },500)
  }

})


const mySecret = process.env['TOKEN']
client.login(mySecret)