const Discord = require('discord.js'); //Requiring Discord.js module.
const DiscordButtons = require('discord-buttons'); //Requiring Discord-BUttons module.
const { MessageEmbed } = require('discord.js')
let button = require('discord-buttons');

module.exports = {
  name: "howtouse",
  aliases: ["howto"],
  usage: "*howtouse",
  description: "How to use bot",
  run: async (client, message, args) => {
    let firstbutton = new button.MessageButton()
      .setLabel("𝕊𝕥𝕖𝕡 𝟙")
      .setStyle("blurple")
      .setID("firstbutton")
    let secondbutton = new button.MessageButton()
      .setLabel("𝕊𝕥𝕖𝕡 𝟚")
      .setStyle("blurple")
      .setID("secondbutton")
    let thirdbutton = new button.MessageButton()
      .setLabel("𝕊𝕥𝕖𝕡 𝟛")
      .setStyle("blurple")
      .setID("thirdbutton")

    //button row:
    let row1 = new button.MessageActionRow()
      .addComponent(firstbutton)
      .addComponent(secondbutton)
      .addComponent(thirdbutton)



    //embed create


    const step1 = new MessageEmbed()
      .setColor("cccfff")
      .setTitle("<a:YellowArrow:870193892492980236> How to Use Uptimer!")
      .addField(
        "<:857122481088495629:873454677231034368> Get the link", "Our first step is to get the webpage link. You can find the code in the bottom or side of you repl.it(see screenshot below)! If you do not have this link, copy paste this code at the top of your `index.js` and run it again.\n ```https://pastebin.com/HJGhAUZf```"
      )
      .setImage("https://media.discordapp.net/attachments/870077234780725281/873324807444365413/Screen_Shot_2021-08-06_at_2.57.52_PM.png?width=1017&height=534")
    return message.channel.send({
      embed: step1,
      components: [row1],

    });
  }
}