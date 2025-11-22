const Embed = require("../database/models/Embed");
const { createEmbed }  = require("./createEmbed");

async function getEmbedByKey(key, lang = "en") {
    console.log("🔑 Aranan key:", key);

    // Burada Embedkey büyük E ile şema alanına uyumlu olmalı
    const data = await Embed.findOne({ Embedkey: key });
    console.log("📦 Bulunan veri:", data);

    if (!data) return null;

    const locale = data.locales?.[lang] || data.locales?.en;

    if(locale?.description){
        locale.descriprion = locale.description
        .replace(/\\n/g, "\n")
        .replace(/\s+/g, "");
    }
    return createEmbed({
        title: locale?.title,
        description: locale?.description,
        footer: locale?.footer,
        color: data.color || "#FFCBE5",
        author: data.author,
        thumbnail: data.thumbnail?.url,
        image: data.image
    });
}

module.exports = getEmbedByKey;
