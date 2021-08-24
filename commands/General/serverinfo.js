const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js")
module.exports = {
  name: "serverinfo",
  aliases: [],
  usage: "*serverinfo",
  description: "Shows Information about server",
  run: async (client, message, args) => {
    const { guild } = message 
    //console.log(guild)
    
    const { name, region, memberCount, owner, afkTimeout, createdAt } = guild 
    const icon = guild.iconURL() 
    //console.log(name, region, memberCount, icon, owner, afkTimeout)
    const serverinfoEmbed = new Discord.MessageEmbed()
      .setTitle(`Server Info For ${name}`)
      .setThumbnail(icon)
      .addFields({
        name : "Region:",
        value : `> ${region}`,

      },
      {
        name : "Member Count:",
        value : `> ${memberCount}`,

      },
      {
        name : "Onwer:",
        value : `> ${owner.user.tag}`,

      },
      {
        name : "Afk Timeout",
        value : `> ${afkTimeout / 60}` ,

      },
      {
        name : "Creation Date",
        value : `> ${createdAt}` ,

      },)
      .setFooter("BOT DEVELOPERS: Saizuo#0007| Prefix: p")
      
        


    message.channel.send(serverinfoEmbed)
  },
};