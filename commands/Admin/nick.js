const { Client, Message, MessageEmbed } = require("discord.js");

module.exports = {
  name: "nick",
  aliases: ["setnick","nickname"],
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    const member = message.mentions.members.first();

    if (!member) return message.reply("Please specify a member!");

    const arguments = args.slice(1).join(" ");

    if (!arguments) return message.reply("Please specify a nickname!");

    try {
      member.setNickname(arguments);
      message.channel.send(`I have set ${args[0]}'s nickname to ${args[1]}.`)
    } catch (err) {
      console.log(err);
      message.reply("I do not have permission to set " + member.toString() + " nickname!");
    
    }
  },
};