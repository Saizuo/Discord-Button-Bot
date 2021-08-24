const math = require('discord-math');
module.exports = {
  name: "kick",
  aliases: ["ckl"],
  usage: "kick",
  description: "kicks member",
  run: async (client, message, args) => {
    const {member, mentions} = message
    const tag = `<@${member.id}` 
    const target = message.mentions.users.first();

      if (
        member.hasPermission('KICK_MEMBERS') ||
        member.hasPermission('ADMINISTRATOR')
      ) {
        if (target){
          const memberTarget = message.guild.members.cache.get(target.id);
          memberTarget.kick();
          message.channel.send(`${tag}> , <@${memberTarget.user.id}> has been kicked!`);

      }else {
        message.channel.send(`${tag}> Please Specify a valid user to kick!`);
      }
    }else {
      message.channel.send(`${tag}> You do not have permissions needed to use this command!`);
    }
  },
};