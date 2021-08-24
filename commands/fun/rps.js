const simplydjs = require('simply-djs')
module.exports = {
  name: "rps",
  aliases: ["rockpaperscissor", "rock-paper-scissor"],
  usage: "unban",
  description: "unbans member",
  run: async (client, message, args) => {
    simplydjs.rps(message, {
            embedColor: "cccfff", // default: #075FFF
            timeoutEmbedColor: "cccfff", // default: #c90000
            drawEmbedColor: "cccfff", // default: #075FFF
            winEmbedColor: "cccfff", // default: #06bd00
            embedFooter: "Bot Developer: Saizuo#0007 | Prefix: p",
            rockColor: "green", // default: grey
            paperColor: "green", // default: grey
            scissorsColor: "green", // default: grey
        })
  }
}
