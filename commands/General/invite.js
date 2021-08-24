const { MessageEmbed } = require("discord.js");
const { invite_link } = require("./../../config.json");

module.exports = {
  name: "invite",
  description: "Invites the bot",
  category: "uptime",
  botPermission: [],
  authorPermission: [],
  ownerOnly: false,
  run: async (client, message, args) => {
    let github_repo = "https://github.com/Saizuo";

    let embed = new MessageEmbed()
      .setTitle("Invite Me / Support Me.")
      .setDescription(
        "Amogus is a open-source, free discord bot that allows you to make your projects online 24/7 just by using a single cmd."
      )
      .setColor("blurple")
      .addField(
        "**Invite Me To Your server**",
        "[Click here](" + invite_link + ") to invite me to into server."
      )
      .addField(
        " **Source Code**",
        "[Click here](" + "https://discord.gg/G9USQwbhUm" + ") Support this open-source project."
      )
      .setTimestamp()
      .setFooter("BOT DEVELOPERS: Saizuo#0007| Prefix: p")

    return message.channel.send(embed);
  },
};
