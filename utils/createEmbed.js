const { EmbedBuilder } = require('discord.js');

function createEmbed({
    title,
    description,
    color = '#FFCBE5',
    footer,
    author,
    thumbnail,
    image,
    fields = []
}) {
    const embed = new EmbedBuilder().setColor(color);

    if (title) embed.setTitle(title);
    if (description) embed.setDescription(description);
    if (footer) embed.setFooter({ text: footer });


    if (author && (author.name || author.icon_url || author.url)) {
        embed.setAuthor({
            name: author.name || undefined,
            iconURL: author.icon_url || undefined,
            url: author.url || undefined
        });
    }

    if (thumbnail && thumbnail !== '') embed.setThumbnail(thumbnail);
    if (image && image !== '') embed.setImage(image);

    if (fields && fields.length > 0) embed.addFields(fields);

    return embed;
}

module.exports = { createEmbed };
