module.exports.run = async (client) => {
  console.log(`${client.user.tag} has logged in.`);
  client.user.setActivity(`${client.projectsSize} Project(s) | Made BY Saizuo#0007`, {
    type: "WATCHING",
  });
};
