const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "coinflip",
  description: "flips a coin!",
  run: async (client, message, args) => {
    let number = Math.floor(Math.random() * 2);
    if (number == 1) {
      let hembed = new MessageEmbed()
        .setTitle("Coinflip!")
        .setDescription(`You flipped Heads!`)
        .setFooter("BOT DEVELOPERS: Saizuo#0007| Prefix: *")
        .setThumbnail("https://media.discordapp.net/attachments/873990902648033313/874045545428181022/3865572.png?width=497&height=497")

      message.channel.send(hembed)
    } else {
      let tembed = new MessageEmbed()
        .setTitle("Coinflip!")
        .setDescription(`You flipped Tails!`)
        .setFooter("BOT DEVELOPERS: Saizuo#0007| Prefix: *")
        .setThumbnail("https://media.discordapp.net/attachments/873990902648033313/874045763527782450/3865514.png?width=497&height=497")

      message.channel.send(tembed)
    }

  }
}

