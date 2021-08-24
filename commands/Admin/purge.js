module.exports = {
  name: "purge",
  aliases: ["clear"],
  usage: "*purge",
  description: "deletes amount of messages specified",
  run: async (client, message, args) => {
    if(!args[0]) return message.reply("Please enter the amount of messages you want to clear.");
    if(isNaN(args[0])) return message.reply("Please enter a real number");

    if(args[0]> 99) return message.reply("Please enter a number less than 100.");
    if(args[0]< 1) return message.reply("Please enter a greater than 0.");

    await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
      message.channel.bulkDelete(messages);
      return message.reply(`${args[0]} messages have been deleted. `)
    });
  }
}