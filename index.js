require("dotenv").config();
const mongoose = require("mongoose");
const { Client, IntentsBitField, Collection } = require("discord.js");
const loadCommands = require("./utils/commandLoader");
const loadEvents = require("./utils/eventLoader");

// MONGO BAĞLANTISI
async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("🍰 MongoDB bağlandı!");
  } catch (err) {
    console.error("❌ Mongo bağlantı hatası:", err);
  }
}

connectDB();

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.MessageContent,
  ],
});

client.commands = new Collection();

loadCommands(client);
loadEvents(client);

client.login(process.env.TOKEN);
