const Discord = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
    name: "kangaroo",
    category: "images",
    description: "Sends a random Kangaroo image !!",
    usage: `kangaroo`,
    run: async (bot, message, args) => {

    const res = await fetch('https://some-random-api.ml/img/kangaroo');
    const img = (await res.json()).link;

    const embed = new Discord.MessageEmbed()
    .setTitle(`🦘 Kangaroo 🦘`)
    .setImage(img)
    .setFooter(`Requested ${message.member.displayName}`,  message.author.displayAvatarURL({ dynamic: true }))
    .setColor(message.guild.me.displayHexColor)
    .setFooter("BOT DEVELOPERS: Saizuo#0007 | Prefix: *");
    message.channel.send(embed);
  }
}