const math = require('discord-math');
module.exports = {
  name: "ban",
  aliases: ["b"],
  usage: "ban",
  description: "bans member",
  run: async (client, message, args) => {
    const {member, mentions} = message
    const tag = `<@${member.id}` 
    const target = message.mentions.users.first();

      if (
        member.hasPermission('BAN_MEMBERS') ||
        member.hasPermission('ADMINISTRATOR')
      ) {
        if (target){
          const memberTarget = message.guild.members.cache.get(target.id);
          memberTarget.ban();
          message.channel.send(`${tag}> , <@${memberTarget.user.id}> has been banned!`);

      }else {
        message.channel.send(`${tag}> Please Specify a valid user to ban!`);
      }
    }else {
      message.channel.send(`${tag}> You do not have permissions needed to use this command!`);
    }
  },
};