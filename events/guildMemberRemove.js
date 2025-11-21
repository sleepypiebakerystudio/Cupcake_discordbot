const { createEmbed } = require("../../ursa_module/models/embeds/createEmbed");
require("dotenv").config();

module.exports = {
    name: "guildMemberRemove",
    async execute(member, client) {

        const channel = member.guild.channels.cache.get(process.env.GOODBYE_CHANNEL_ID);
        if(!channel) return console.log("❌ Goodbye kanalı bulunamadı.");

        const embed = createEmbed({
            title:`🚪 Slowly… the door closes`,
            description: `**${member.user.username}** just stepped out.  
The bakery feels a little quieter now…  
If they return — act surprised. ✦`,
            image:"https://cdn.discordapp.com/attachments/1413708228176511120/1435662776482926692/indir_57.jpeg",
            color: "#c3e794",
            footer: {
                text: "Sleepy Pie Bakery • Farewell",
                iconURL: member.user.displayAvatarURL()
            }
        });

        channel.send({
            content:`🚪 The door closed behind **${member.user.username}**…`,
            embeds: [embed]
        });
    }
};
