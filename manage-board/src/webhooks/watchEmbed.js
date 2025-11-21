const path = require("path");
const Embed = require(path.join(__dirname, "..", "db", "models", "Embed.js"));
const sendWebhook = require(path.join(__dirname, "sendWebhook.js"));

module.exports = function watchEmbed() {
    const changeStream = Embed.watch([{ $match: { operationType: "insert" } }]);

    changeStream.on("change", (change) => {
        const data = change.fullDocument;
        sendWebhook(data.webhookTitle);
    });

    console.log("🔍 Embed watcher aktif!");
};
