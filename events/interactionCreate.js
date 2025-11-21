const getEmbedByKey = require('../utils/getEmbedByKey');


module.exports = {
  name: "interactionCreate",
  async execute(interaction, client) {
    try {
      // 🎀 Menü
      if (interaction.isStringSelectMenu()){
      
      
          if (interaction.customId.startsWith("langSelect_")){
            const key = interaction.customId.replace("langSelect_", "");
            const lang = interaction.values[0];

            const embed = await getEmbedByKey(key, lang);
            if (!embed){
              return interaction.reply({ content: "Turta ama elması yok :(", ephemeral: true});
            }
            return interaction.update({
              embeds: [embed],
              components: interaction.message.components
            });
          }

          return interaction.reply({ content: `Menu seçimi ${value}`, ephemeral:true});
     }
      // 🧁 Modal (form)
      else if (interaction.isModalSubmit()) {
        const name = interaction.fields.getTextInputValue("nameInput");
        await interaction.reply({ content: `Form gönderildi! Ad: ${name}`, ephemeral: true });
      }

      // 🍬 Slash (şimdilik kapalı)
      else if (interaction.isChatInputCommand()) {
        const command = client.commands.get(interaction.commandName);
        if (!command) return;
        await command.execute(interaction, client);
      }

    } catch (err) {
      console.error("💥 Interaction error:", err);
      if (interaction.replied || interaction.deferred) {
        await interaction.followUp({ content: "⚠️ Yengeye Elif dedin usta!", ephemeral: true });
      } else {
        await interaction.reply({ content: "⚠️ Bir sıkıntı var usta!", ephemeral: true });
      }
    }
  },
};
