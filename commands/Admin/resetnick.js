const { Client, Message, MessageEmbed } = require("discord.js");

module.exports = {
  name: "reset",
  aliases: ["nick-reset", "nickreset", "resetnick", "reset-nick"],
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    const member = message.mentions.members.first();

    if (!member) return message.reply("Please specify a member!");

    try {
      member.setNickname(null);
      message.channel.send(`I have reset ${args[0]}'s nickname.`)
    } catch (err) {
      message.reply(
        "I do not have permission to reset " + member.toString() + " nickname!"
      );
    }
  },
};