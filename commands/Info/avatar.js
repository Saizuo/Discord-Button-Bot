const Discord = require('discord.js');

module.exports = {
  name: "avatar",
  description: "Adds monitor to your project.",
  aliases: ["av"],
  category: "info",
  botPermission: [],
  authorPermission: [],
  ownerOnly: false,
  run: async (client, message, args) => {
    const embed = new Discord.MessageEmbed()

    if (!message.mentions.users.first()) {
      embed.setTitle("Your Avatar:")
      embed.setThumbnail(message.author.displayAvatarURL())
      embed.setDescription("This is your avatar.")
      embed.setColor("RANDOM")
      embed.setFooter("Bot made by Saizuo#0007")
      return message.channel.send(embed)
    } else {
      const user = message.mentions.users.first()
      embed.setTitle(`${user.tag}'s Avatar:`)
      embed.setThumbnail(user.displayAvatarURL())
      embed.setDescription(`This is ${user.tag}'s avatar.`)
      embed.setColor('RANDOM')
      embed.setFooter("Bot made by Saizuo#0007")
      return message.channel.send(embed)
    }
  }
}
