const ButtonPages = require('discord-button-pages');
const { MessageEmbed } = require('discord.js')
const disbutpages = require("discord-embeds-pages-buttons")
const Discord = require("discord.js");
const disbut = require("discord-buttons");
const MessageButton = require("discord-buttons");

module.exports = {
  name: "developer",
  description: "Shows all commands of the bot",
  category: "uptime",
  botPermission: [],
  authorPermission: [],
  aliases: ["newhelp"],
  ownerOnly: false,
  run: async (client, message, args) => {
    let helpEmbed = new MessageEmbed()
      .setTitle("<a:a_emoji:874194898218274836> <a:K_emoji:874194945341268019> <a:g_emoji:874195066816696381>")
      
      .addField(
        "About Me:",
        "Hi I am Saizuo! I am a bot developer who codes in node.js! I have been coding since June of 2021. Some of my hobbies are playing basketball, playing video games and coding! ",
      )
      .setThumbnail("https://cdn.discordapp.com/avatars/813890066781962271/1224647ef75999e8308f476e5b1658f5.png?size=1024")
      .setFooter("Make sure to show your support by subbing to my youtube(linked below)! If you have any questions about the bot, join support server linked below or send me a DM at akg#9426! ")

      let button1 = new disbut.MessageButton()
      .setStyle('url')
      .setLabel('💞 • Invite Me') 
      .setURL("https://discord.com/api/oauth2/authorize?client_id=872365081281826846&permissions=8&scope=bot");
      let button2 = new disbut.MessageButton()
      .setStyle('url')
      .setLabel('🤔 • Support Server') 
      .setURL("https://discord.gg/GE4mHjJuYf");
      let button3 = new disbut.MessageButton()
      .setStyle('url')
      .setLabel('🎬 • Youtube Channel') 
      .setURL("https://www.youtube.com/channel/UCAtfolySyoNksk93rgMmAyA");



      return message.channel.send(helpEmbed,{
        button: [button1,button2,button3],
      });

  },
};
