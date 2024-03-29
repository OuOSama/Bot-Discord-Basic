const { ActionRowBuilder, ModalBuilder, TextInputBuilder, TextInputStyle ,SlashCommandBuilder } = require('discord.js');
module.exports = {
    data: new SlashCommandBuilder()
        .setName('modal')
        .setDescription('Show Modal'),
    async execute(interaction) {
        const modal = new ModalBuilder()
            .setCustomId('myModal')
            .setTitle('My Modal');

        const favoriteColorInput = new TextInputBuilder()
            .setCustomId('favoriteColorInput')
            .setLabel("What's your favorite color?")
            .setStyle(TextInputStyle.Short);
            
        const hobbiesInput = new TextInputBuilder()
            .setCustomId('hobbiesInput')
            .setLabel("What's some of your favorite hobbies?")
            .setStyle(TextInputStyle.Paragraph);

        const firstActionRow = new ActionRowBuilder().addComponents(favoriteColorInput);
        const secondActionRow = new ActionRowBuilder().addComponents(hobbiesInput);

        modal.addComponents(firstActionRow,secondActionRow);

        await interaction.showModal(modal);
    },
};