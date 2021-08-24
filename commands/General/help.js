const simplydjs = require('simply-djs')
const Discord = require("discord.js")

module.exports = {
  name: "help",
  aliases: [""],
  usage: "unban",
  description: "unbans member",


  run: async (client, message, args) => {
    let embed1 = new Discord.MessageEmbed()
      .setTitle('**Help Panel **')
      .setDescription('**Amogus**  is one of the only free all in one bots that has many features like tickets, reaction roles, uptimer and buttons while keeping the minimalistic feel and look that every bot user loves.**')
      .addField(
        "COMMAND CATEGORIES",
        "**💜 ADMIN\n 💜GENERAL\n💜 GIVEAWAY\n💜 INFO\n💜 IMAGE\n💜MODERATION\n💜 OWNER\n💜FUN\n💜 UPTIMER**")
      .setThumbnail("https://cdn.discordapp.com/attachments/871336990862352385/879636515175686195/image_2021-08-24_133059-removebg-preview_1.png")
      .setImage('https://cdn.discordapp.com/attachments/871336990862352385/879637660489105480/standard.gif')
      .setFooter('Bot Made By Saizuo#0007 | Prefix: a!')

    let embed2 = new Discord.MessageEmbed()
      .setTitle('**💜Help Panel💜**')
      .setDescription('** *Amogus*  is one of the only free all in one bots that has many features like tickets, reaction roles, uptimer and buttons while keeping the minimalistic feel and look that every bot user loves.**')
      .addField(
        "💜MODERATION💜",
        "`ban` `unban` `kick` `addemoji` `addrole` `removerole` `announce` `setnick` `resetnick` `ticket` `lockchannel` `purge` `slowmode` `mute` `unmute` `nuke`")
      .setThumbnail("https://cdn.discordapp.com/attachments/871336990862352385/879636515175686195/image_2021-08-24_133059-removebg-preview_1.png")
      .setImage('https://cdn.discordapp.com/attachments/871336990862352385/879637660489105480/standard.gif')
      .setFooter('Bot Made By Saizuo#0007 | Prefix: a!')
    let embed3 = new Discord.MessageEmbed()
      .setTitle('**💜Help Panel💜**')
      .setDescription('💜** *Amogus*  is one of the only free all in one bots that has many features like tickets, reaction roles, uptimer and buttons while keeping the minimalistic feel and look that every bot user loves.**')
      .addField(
        "💜GENERAL💜",
        "`servericon` `calculator` `invite` `membercount` `help` `serverinfo` `leaderboard`")
      .setThumbnail("https://cdn.discordapp.com/attachments/871336990862352385/879636515175686195/image_2021-08-24_133059-removebg-preview_1.png")
      .setImage('https://cdn.discordapp.com/attachments/871336990862352385/879637660489105480/standard.gif')
      .setFooter('Bot Made By Saizuo#0007 | Prefix: a!')
    let embed4 = new Discord.MessageEmbed()
      .setTitle('**💜Help Panel💜**')
      .setDescription('💜** *Amogus*  is one of the only free all in one bots that has many features like tickets, reaction roles, uptimer and buttons while keeping the minimalistic feel and look that every bot user loves.**')
      .addField(
        "💜GIVEAWAY💜",
        "`gstart` `gend` `greroll`")
      .setThumbnail("https://cdn.discordapp.com/attachments/871336990862352385/879636515175686195/image_2021-08-24_133059-removebg-preview_1.png")
      .setImage('https://cdn.discordapp.com/attachments/871336990862352385/879637660489105480/standard.gif')
      .setFooter('Bot Made By Saizuo#0007 | Prefix: a!')
    let embed5 = new Discord.MessageEmbed()
      .setTitle('**💜Help Panel💜**')
      .setDescription('💜**Amogus*  is one of the only free all in one bots that has many features like tickets, reaction roles, uptimer and buttons while keeping the minimalistic feel and look that every bot user loves.**')
      .addField(
        "💜INFO💜",
        "`avatar` `bug-report` `feedback` `developer` `help` `howtouse` `info` `serverinfo` `position` `urban` `weather` `status` `channelinfo` `rolememberinfo`")
      .setThumbnail("https://cdn.discordapp.com/attachments/871336990862352385/879636515175686195/image_2021-08-24_133059-removebg-preview_1.png")
      .setImage('https://cdn.discordapp.com/attachments/871336990862352385/879637660489105480/standard.gif')
      .setFooter('Bot Made By Saizuo#0007 | Prefix: p')
    let embed6 = new Discord.MessageEmbed()
      .setTitle('**💜Help Panel💜**')
      .setDescription('💜 *Amogus*  is one of the only free all in one bots that has many features like tickets, reaction roles, uptimer and buttons while keeping the minimalistic feel and look that every bot user loves.**')
      .addField(
        "💜IMAGE💜",
        "`tweet` `deepfry` `eject` `meme` `kangaroo` `dog` `cat` `changemymind` `fire` `respect` `scary`")
      .setThumbnail("https://cdn.discordapp.com/attachments/871336990862352385/879636515175686195/image_2021-08-24_133059-removebg-preview_1.png")
      .setImage('https://cdn.discordapp.com/attachments/871336990862352385/879637660489105480/standard.gif')
      .setFooter('Bot Made By Saizuo#0007 | Prefix: a!')
    let embed7 = new Discord.MessageEmbed()
      .setTitle('**💜Help Panel💜**')
      .setDescription('💜** *Amogus*  is one of the only free all in one bots that has many features like tickets, reaction roles, uptimer and buttons while keeping the minimalistic feel and look that every bot user loves.**')
      .addField(
        "💜FUN💜",
        "`rps` `coinflip` `meme` `reverse` `hangman` `tictactoe` `trivia` `fact` `Shuffle-guess`")
      .setThumbnail("https://cdn.discordapp.com/attachments/871336990862352385/879636515175686195/image_2021-08-24_133059-removebg-preview_1.png")
      .setImage('https://cdn.discordapp.com/attachments/871336990862352385/879637660489105480/standard.gif')
      .setFooter('Bot Made By Saizuo#0007 | Prefix: a!')
    let embed8 = new Discord.MessageEmbed()
      .setTitle('**💜Help Panel💜**')
      .setDescription('💜 ** *Amogus*  is one of the only free all in one bots that has many features like tickets, reaction roles, uptimer and buttons while keeping the minimalistic feel and look that every bot user loves.**')
      .addField(
        "💜UPTIME💜",
        "`add` `calc` `ping` `projects` `remove` `stats` `total`")
      .setThumbnail("https://cdn.discordapp.com/attachments/871336990862352385/879636515175686195/image_2021-08-24_133059-removebg-preview_1.png")
      .setImage('https://cdn.discordapp.com/attachments/871336990862352385/879637660489105480/standard.gif')
      .setFooter('Bot Made By Saizuo#0007 | Prefix: a!')
    



    let pages = [embed1, embed2, embed3, embed4, embed5, embed6, embed7, embed8] // REQUIRED

    // its still possible without embed
    // let pages = ['page1', 'page2', 'page3']

    simplydjs.embedPages(client, message, pages, {
      firstEmoji: '876616705164595280', // default: ⏪
      backEmoji: '876605402291265576', // default: ◀️
      delEmoji: '876627238903246889', // default: 🗑️
      forwardEmoji: '876616590563614781', // default: ▶️
      lastEmoji: '876616351572168765', // default: ⏩

      btncolor: 'grey', // default: green 
      delcolor: 'Blurple', // default: red
      skipcolor: 'grey', // default: blurple
      // Colors that discord-buttons support. like red, blurple, grey, green

      skipBtn: true,
    })
  }
}
