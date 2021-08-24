const ButtonPages = require('discord-button-pages');
const { MessageEmbed } = require('discord.js')
const disbutpages = require("discord-embeds-pages-buttons")
const Discord = require("discord.js");
const disbut = require("discord-buttons");
const MessageButton = require("discord-buttons");

module.exports = {
  name: "newhelp",
  description: "Shows all commands of the bot",
  category: "uptime",
  botPermission: [],
  authorPermission: [],
  ownerOnly: true,
  run: async (client, message, args) => {
    let helpEmbed = new MessageEmbed()
      .setTitle("<a:bluejumpinghearts:872585833620865054> Here are my commands")
      .setDescription("<a:YellowArrow:870193892492980236> ** *Uptimer* Is An Free Discord Bot That Allows You To Make Your Projects ( Bot ) Online 24/7 Just By Using A Single Command.**")
      .addField(
        "<a:admin:872592013017632838> **ADMIN**",
        "`ban` `unban` `kick` `addemoji`"
      )
      .addField(
        "<a:general:872602338014146561> **GENERAL**",
        "`servericon` `calculator` `invite` `membercount`"
      )
      .addField(
        "<a:Giveaway:872602634064887848> **GIVEAWAY**",
        "`gstart` `gend` `greroll`"
      )
      .addField(
        "<:info:872602958636941384> **INFO**",
        "`avatar` `report-bug` `developer` `help` `howtouse` `info` `serverinfo`"
      )
      .addField(
        "<:moderation:872603442147893248> **MODERATION**",
        "`lockchannel` `purge` `slowmode` `unlockchannel`"
      )
      .addField(
        "<:owner:872603489761628180> **OWNER**",
        "`eval` `reload` `serverlist`"
      )
      .addField(
        "<a:uptime:872603534800064512> **UPTIME**",
        "`add` `calc` `ping` `projects` `remove` `stats` `total`"
      )
      .setThumbnail(client.user.displayAvatarURL())
      .setFooter("BOT DEVELOPERS: Saizuo#0007| Prefix: p")

      let button1 = new disbut.MessageButton()
      .setStyle('url')
      .setLabel('❤️ Invite Me') 
      .setURL("https://discord.com/api/oauth2/authorize?client_id=872365081281826846&permissions=8&scope=bot");
      let button2 = new disbut.MessageButton()
      .setStyle('url')
      .setLabel('❓ Support Server') 
      .setURL("https://discord.gg/GE4mHjJuYf");
      let button3 = new disbut.MessageButton()
      .setStyle('url')
      .setLabel('▶️ Tutorial Video') 
      .setURL("https://www.youtube.com/");


      return message.channel.send(helpEmbed,{
        button: [button1,button2,button3],
      });

  },
};