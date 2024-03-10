const { ActionRowBuilder, StringSelectMenuBuilder, StringSelectMenuOptionBuilder, SlashCommandBuilder } = require('discord.js');
module.exports = {
    data: new SlashCommandBuilder()
        .setName('options')
        .setDescription('show many options'),
        async execute(interaction) {
            const select = new StringSelectMenuBuilder()
                .setCustomId('starter')
                .setPlaceholder('Foods')
                .addOptions(
                    new StringSelectMenuOptionBuilder()
                        .setLabel('Hambuger')
                        .setDescription('Select Hambuger')
                        .setValue('Hambuger'),
                    new StringSelectMenuOptionBuilder()
                        .setLabel('Sandwish')
                        .setDescription('Select Sandwish')
                        .setValue('Sandwish'),
                    new StringSelectMenuOptionBuilder()
                        .setLabel('Apple')
                        .setDescription('Select Apple')
                        .setValue('Apple'),
                );
                    

            const row = new ActionRowBuilder()
                .addComponents(select);
    
            await interaction.reply({
                content: 'Choose your starter!',
                components: [row],
            });
        },
    };