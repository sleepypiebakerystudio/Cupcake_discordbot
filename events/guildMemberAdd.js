const { createEmbed } = require("../utils/createEmbed");
require("dotenv").config();

module.exports = {
    name: "guildMemberAdd",
    once: false,
    async execute(member, client) {

        const channel = member.guild.channels.cache.get(process.env.WELCOME_CHANNEL_ID);
        if (!channel) return console.log("❌ Welcome kanalı bulunamadı.");

        const embed = createEmbed({
            title: `🥧 Freshly baked arrival`,
            description: `Welcome **${member.user.username}** to **${member.guild.name}**!  
Take a seat, the oven is warm ♡`,
            image: "https://cdn.discordapp.com/attachments/1413708228176511120/1423337199138766949/Welcome_banner.png",
            color: "#ffbeba",
            footer: {
                text: "Sleepy Pie Bakery • Warm greetings",
                iconURL: member.user.displayAvatarURL()
            }
        });

        channel.send({ 
            content:`<:35053autumnv2pie1:1423677373743632435> Freshly baked arrival: **${member.user.username}**`,
            embeds: [embed] 
        });
    }
};
