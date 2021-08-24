const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js")
module.exports = {
  name: "membercount",
  aliases: ['mc' , 'MemberCount' , 'Membercount'],
  usage: "*servericon",
  description: "Shows Icon of server",
  run: async (client, message, args) => {
    const { guild} = message 
    const {name,memberCount} = guild
    const icon = guild.iconURL() 
    let memberCountEmbed = new MessageEmbed()
    .setTitle(`Member Count for ${name}:`)
    .setDescription(memberCount)
    .setThumbnail(icon)
    .setFooter("BOT DEVELOPERS: Saizuo#0007| Prefix: p")
    message.channel.send(memberCountEmbed)
  },
};