const fs = require("fs");
const path = require("path");

function loadCommands(client) {
    const commandPath = path.join(__dirname, "../commands");
    const commandFiles = fs.readdirSync(commandPath).filter(f => f.endsWith(".js"));

    for (const file of commandFiles) {
        const filePath = path.join(commandPath, file);
        const command = require(filePath);

        // Silinmiş işaretlenen komutu atla
        if (command.deleted) {
            console.log(`⏭️ ${file} (silinmiş olarak işaretlendi, yüklenmedi)`);
            continue;
        }

        // Slash komut
        if ("data" in command && "execute" in command) {
            client.commands.set(command.data.name, command);
            console.log(`✅ Slash komut yüklendi: ${command.data.name}`);
            continue;
        }

        // Prefix komut
        if ("name" in command && "execute" in command) {
            client.commands.set(command.name, command);
            console.log(`📟 Prefix komut yüklendi: ${command.name}`);
            continue;
        }

        // Geçersiz format
        console.log(`⚠️ ${file} geçersiz formatta, atlanıyor`);
    }
}

module.exports = loadCommands;
