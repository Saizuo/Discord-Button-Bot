const ownerId = "778521105610309632"
module.exports = {
    name: "eval",
    description: "Evaluates a given code",
    run: async(client, message, args) => {
        if(message.author.id !== ownerId) {
            return message.reply("Only the bot owner may use this command!")
        }
        let result = eval(args.join(" "))
        message.channel.send(result)
    }
}