module.exports = {
  name: "warn",
  execute(msg) {
    let mentionMember = msg.mentions.members.first();

    if (!mentionMember) {
      msg.channel.send('```please mention the user you want to kick```');
      return;
    }

    if (mentionMember.roles.highest>= msg.member.roles.highest) {
      msg.channel.send("```you can't warn someone that is higher then you in the hierarchy```");
      return;
    }

    let reason = msg.content.split(' ').slice(2).join(' ');
    mentionMember.send('You got warned for ' + reason);
    msg.channel.send("<@" + mentionMember + ">" + ' got warned for ' + reason);
  }
};