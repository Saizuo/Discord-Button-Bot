const ButtonPages = require('discord-button-pages');
const { MessageEmbed } = require('discord.js')
const disbutpages = require("discord-embeds-pages-buttons")
const Discord = require("discord.js");
const disbut = require("discord-buttons");
const MessageButton = require("discord-buttons");

module.exports = {
  name: "oldiehelp",
  description: "Shows all commands of the bot",
  category: "uptime",
  botPermission: [],
  authorPermission: [],
  aliases: ["newhelp"],
  ownerOnly: false,
  run: async (client, message, args) => {
    let helpEmbed = new MessageEmbed()
      .setTitle("<a:bluehearts:873996108211310592> Here are my commands")
      .setDescription("<a:yellowarrow:873996169880162335> ** *Uptimer* Is An Free Discord Bot That Allows You To Make Your Projects ( Bot ) Online 24/7 Just By Using A Single Command.**")
      .addField(
        "<a:admin:873996207083634768> **ADMIN**",
        "`ban` `unban` `kick` `addemoji` `addrole` `removerole` `announce` `setnick` `resetnick` `ticket`"
      )
      .addField(
        "<a:general:873996270098870323> **GENERAL**",
        "`servericon` `calculator` `invite` `membercount` `help` `serverinfo` `leaderboard` "
      )
      .addField(
        "<a:giveaway:873996320241766471> **GIVEAWAY**",
        "`gstart` `gend` `greroll`"
      )
      .addField(
        "<:info:873996400944377887> **INFO**",
        "`avatar` `bug-report` `feedback` `developer` `help` `howtouse` `info` `serverinfo` `position` `urban` `weather` `status` `channelinfo` `rolememberinfo` "
      )
      .addField(
        "<:image:873996433060151366> **IMAGE**",
        "`tweet` `deepfry` `eject` `meme` `kangaroo` `dog` `cat` `changemymind` `fire` `respect` `scary` "
      )
      .addField(
        "<:moderation:873996476668342292> **MODERATION**",
        "`lockchannel` `purge` `slowmode` `mute` `unmute` `nuke`"
      )
      .addField(
        "<:owner:873996513880199238> **OWNER**",
        "`eval` `reload` `serverlist` `test1`"
      )
      .addField(
        "<:fun:873996552757190656> **FUN**",
        "`rps` `coinflip` `meme` `reverse` `hangman` `tictactoe` `trivia` `fact` `Shuffle-guess` "
      )
      .addField(
        "<a:uptimer:873996594754773123> **UPTIME**",
        "`add` `calc` `ping` `projects` `remove` `stats` `total`"
      )
      .setThumbnail(client.user.displayAvatarURL())
      .setFooter("BOT DEVELOPERS: Saizuo#0007 | Prefix: p")

      let button1 = new disbut.MessageButton()
      .setStyle('url')
      .setLabel(' • Invite Me') 
      .setEmoji("873996108211310592")
      .setURL("https://discord.com/api/oauth2/authorize?client_id=872365081281826846&permissions=8&scope=bot");
      let button2 = new disbut.MessageButton()
      .setStyle('url')
      .setEmoji('875829492613021716')
      .setLabel(' • Support Server') 
      .setURL("https://discord.gg/GE4mHjJuYf");
      let button3 = new disbut.MessageButton()
      .setStyle('url')
      .setEmoji('875835310452400198')
      .setLabel(' • Tutorial Video') 
      .setURL("https://www.youtube.com/");


      return message.channel.send(helpEmbed,{
        button: [button1,button2,button3],
      });

  },
};