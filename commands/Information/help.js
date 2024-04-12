const { MessageEmbed, Message } = require("discord.js");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
module.exports = {
    name: "help",
    category: "Information",
    aliases: ["h", "halp"],
    cooldown: 4,
    usage: "help",
    description: "Shows you Help for Sangeet",
    run: async (client, message, args, user, text, prefix) => {
      try{
        let string = `:white_check_mark: Type \`${prefix}commands\` for a list of Commands\n\n:question: New to **Sangeet**? Check out our [Sangeet's FAQ](#)\n\n:page_facing_up: Still need help? [Click here](#) to join our [Discord server](#)`
        let embed = new MessageEmbed()
        .setTitle("Abhinav x Error Help")
        .setURL("#")
        .setDescription(string)
        if(message.guild.me.permissionsIn(message.channel).has("EMBED_LINKS")){
          message.reply(embed)
        }else{
          message.reply(string)
        }
    } catch (e) {
        console.log(String(e.stack).bgRed)
        return message.channel.send(new MessageEmbed()
            .setColor(ee.wrongcolor)
            .setFooter(ee.footertext, ee.footericon)
            .setTitle(`❌ ERROR | An error occurred`)
            .setDescription(`\`\`\`${e.stack}\`\`\``)
        );
    }
  }
}
