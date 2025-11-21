const axios = require("axios");
const path = require("path");

require("dotenv").config({ path: path.join(__dirname, "../.env") });

module.exports = async function sendWebhook(WebhookTitle) {
    try{
        await axios.post(process.env.DISCORD_WEBHOOK_URL, {
            content: `📢 Yeni embed yayınlandı: **${WebhookTitle}**`
        });

        console.log("📨 Webhook gönderildi:", WebhookTitle);
    } catch (err) {
        console.error("Webhook hatası:", err.response.data || err.message);
    }
};
