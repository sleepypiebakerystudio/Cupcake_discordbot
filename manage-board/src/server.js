const express = require("express");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });
const watchEmbed = require("./webhooks/watchEmbed.js");

const connectMongo = require(path.join(__dirname, "db", "Connectmongo"));
const Embed = require(path.join(__dirname, "db", "models", "Embed"));

connectMongo();

const app = express();
app.use(express.json());


const PORT = process.env.PORT || 4000;

// 💎 Embed ekleme endpointi
app.post("/api/add-embed", async (req, res) => {
  try {
    const {  locales, color, image, thumbnail, author, url, channelId,  webhookTitle, Embedkey } = req.body;

    // Mongo'ya kaydet
    const embed = new Embed({ 
      locales,
      Embedkey,
      webhookTitle,
      author,
      thumbnail, 
      color, 
      image,
      url,
      channelId
     });

    await embed.save();
   
   
    res.json({ message: "🧁 Embed başarıyla kaydedildi!", embed });
  } catch (err) {
    console.error("❌ Embed ekleme hatası:", err);
    res.status(500).json({ error: "Sunucu hatası" });
  }
}
)



watchEmbed();
app.listen(PORT, () => console.log(`🚀 Server ${PORT} portunda aktif`));
