const { EmbedBuilder, WebhookClient,SlashCommandBuilder } = require('discord.js');
require('dotenv').config()

module.exports = {
    data: new SlashCommandBuilder()
        .setName('web-hook')
        .setDescription('test web hook'),
    async execute(interaction) {
        const webhookClient = new WebhookClient({ id: process.env.webhookId, token: process.env.webhookToken });
        const embed = new EmbedBuilder()
            .setTitle('From Dr.strange')
            .setColor(0x00FFFF)
        webhookClient.send({
            username: 'Doctor Strange',
            avatarURL: 'https://cdn.majorcineplex.com/uploads/content/images/intro-1578622085.jpg',
            embeds: [embed],
        });
        await interaction.reply('send web hook success'),
        
        console.log('web hook has send');
    },
};
