const simplydjs = require('simply-djs')
module.exports = {
  name: "calc",
  aliases: ["calculator"],
  usage: "unban",
  description: "unbans member",
  run: async (client, message, args) => {
    simplydjs.calculator(message, {
      embedColor: 'cccfff', //default: #075FFF
    })
  }
}




