
module.exports = {
  name: "slowmode",
  aliases: [],
  usage: "*slowmode",
  description: "changes the slowmode",
  run: async (client, message, args) => {
    if (!args[0]) return message.reply("Please enter a number.");
    if (isNaN(args[0])) return message.reply(`${args[0]} is not a valid number.`);
    if (args[0] > -1){message.channel.setRateLimitPerUser(args[0])
    message.reply(`Slowmode is now ${args[0]}s.`)}

  }
}