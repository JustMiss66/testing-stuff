const Botconfig = require("../botconfig.json");
const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
   let replies = ["Yes", "No", "Probably Yes", "Probably No", "Maybe", "Ask another one.", "Try asking later."]
   if(!args[2]) return message.reply("Ask a question that have 2 words!")
   let answ = Math.floor((Math.random() * replies.lenght) + 0)
   let Q = args.slice(0).join(" ");
   
   var embed = new Discord.RichEmbed()
   .setAuthor(message.author.username)
   .setDescription("Your Question was: " + Q + "\n My answer is " + replies[answ]);
  
   message.channel.send(embed)
}

module.exports.conf = {
    aliases: ['eight-ball', 'eightball', '8-ball', '8 ball', 'eight ball', 'magic ball']
};

// ADD DESCRIPTION AND SUCH
module.exports.help = {
    name: "8ball"

} 
