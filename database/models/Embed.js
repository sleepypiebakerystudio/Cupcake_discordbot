const mongoose = require("mongoose");

const EmbedSchema = new mongoose.Schema({
  color: String,
  image: String,
  url: String,
  channelId: String,

  author: { 
    name: String,
    icon_url: String,
    url: String
  },

  thumbnail: { 
    url: String
  },

  locales: {
    tr: { title: String, description: String, footer: String },
    en: { title: String, description: String, footer: String },
    ru: { title: String, description: String, footer: String }
  },

  createdAt: { type: Date, default: Date.now },
  Embedkey: String,
});

module.exports = mongoose.model("Embed", EmbedSchema);
