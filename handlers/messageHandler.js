// 📁 handlers/messageHandler.js
module.exports = (client, config) => {
  client.on("messageCreate", async (message) => {
    // Küçük yazım hatası düzeltilmeli: "messageCreate" olacak.
    if (!message.content.startsWith(config.prefix) || message.author.bot) return;

    const args = message.content.slice(config.prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    const command = client.commands.get(commandName);
    if (!command) return;

    // 👑 Sadece bot sahibi çalıştırabilsin
    if (message.author.id !== config.ownerID) {
      return message.reply("<a:727135killerpenguin:1424088863684563064> Annem nerde lan?");
    }

    try {
      await command.execute(client, message, args);
    } catch (err) {
      console.error(err);
      await message.reply("⚠️ Bir hata oluştu tatlım!");
    }
  });
};
