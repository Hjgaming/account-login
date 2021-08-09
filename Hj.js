const Discord = require('discord.js-self');
const client = new Discord.Client();
const got = require("got")
const alexa = require("alexa-bot-api");
var chatbot = new alexa("aw2plm");
const smartestchatbot = require('smartestchatbot')
const delay = require("delay")
const scb = new smartestchatbot.Client()
client.on('ready', () => {
  let channel = client.channels.cache.get("YOUR VC ID")
channel.join()

console.log(`Logged in as ${client.user.tag}!`);


});

client.on("message", async message => {
 
if(message.author.id === "YOUR ID"){

    if(message.content === "hi")
   return  message.channel.send("hello").then((m)=> m.delete({timeout : 1000}))
}




  if (message.author.id== "YOUR ID") {
  
    if (message.author.bot) return;
    if(message.author == client.user ) return
   message.content = message.content.replace(/@(everyone)/gi, "everyone").replace(/@(here)/gi, "here");
    message.channel.startTyping();
    await delay(12000)
    
    scb.chat({message: message.content, name: client.user.username, owner:"HJ", user: message.author.id, language:"en"}).then(reply => {
    if(reply.lenght < 50) return
  //  message.channel.send(`${reply}`);
    })
    message.channel.stopTyping();
  }
});

//----------

client.login("YOUR ACCOUNT TOKEN");
