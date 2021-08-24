const simplydjs = require('simply-djs')
module.exports = {
  name: "tictactoe",
  aliases: ["ttt"],
  usage: "unban",
  description: "unbans member",
  run: async (client, message, args) => {
    simplydjs.tictactoe(message, {
      xEmoji: '❌', //default: ❌
      oEmoji: '⭕', //default: ⭕
      idleEmoji: '➖', //default: ➖
      embedColor: 'cccfff', //default: #075FFF
      embedFoot: 'Bot Developer: Saizuo#0007 | Prefix: a!' //default: 'Make sure to win ;)' 
    })
  }
}

