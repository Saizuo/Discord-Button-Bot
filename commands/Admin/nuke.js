const { MessageEmbed } = require('discord.js')
module.exports = {
  name: "nuke",
  description: "Nukes a given channel",
  run: async (client, message, args) => {
    const { member, mentions } = message
    const tag = `<@${member.id}`
    const target = message.mentions.users.first();
    if (
      member.hasPermission('MANNAGE_CHANNEL')
    ) {
      let reason = args.join(" ") || "No Reason"
      if (!message.channel.deletable) {
        return message.reply("This channel cannot be nuked!")
      }
      let newchannel = await message.channel.clone()
      await message.channel.delete()
      let embed = new MessageEmbed()
        .setTitle("Channel Nuked")
        .setDescription(reason)
        .setImage('https://media0.giphy.com/media/oe33xf3B50fsc/200.gif')
      await newchannel.send(embed)
    } else {
      message.reply("You do not have permissions to use this command/")
    }
  },
};
