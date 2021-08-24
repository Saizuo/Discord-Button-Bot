module.exports = {
  name: "ping",
  description: "Shows ping of the bot",
  category: "Owner",
  botPermission: [],
  authorPermission: [],
  
  run: async (client, message, args) => {
    message.channel.send(`🏓Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
  }
}

const discord = require('discord.js')

module.exports = {
    name: "ping",
    aliases: ["latency"],
    description: "Returns teh bot's ping!",
    usage: "!ping",
    ownerOnly: true,
    run: async(client, message) => {
        const embed = new discord.MessageEmbed()
        .setTitle("Bot's ping")
        .setDescription(`API latency is - ${client.ws.ping}ms\n Message Latency is ${Date.now() - message.createdTimestamp}ms.`)
        message.channel.send(embed)
    }
}