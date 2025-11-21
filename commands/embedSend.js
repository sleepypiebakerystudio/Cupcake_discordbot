const getEmbedByKey = require('../utils/getEmbedByKey');
const { ActionRowBuilder, StringSelectMenuBuilder } = require("discord.js");

module.exports = {
    name: "embed",

    async execute(client, message, args) {
        const key = args[0];
        if (!key)
            return message.reply("⚠️ Anahtar yok, doğru yaz!"); 

        const embed = await getEmbedByKey(key, "en");
        if (!embed)
            return message.reply("⚠️ Bu key ile veri bulunamadı.");

        const menu = new StringSelectMenuBuilder()
            .setCustomId(`langSelect_${key}`)
            .setPlaceholder("🌍 Dil seç")
            .addOptions([
                { label: "Türkçe", value: "tr" },
                { label: "English", value: "en" },
                { label: "Русский", value: "ru" }
            ]);

        const row = new ActionRowBuilder().addComponents(menu);

        message.channel.send({
            embeds: [embed],
            components: [row],
        });
    }
};
