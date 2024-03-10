const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('kick')
        .setDescription('Kick a user')
        .addUserOption(option => option.setName('user').setDescription('Select the user to kick').setRequired(true)),
    async execute(interaction) {
        const userToKick = interaction.options.getUser('user');

        if (!interaction.guild.members.cache.get(userToKick.id).kickable) {
            return interaction.reply('ไม่สามารถเตะผู้ใช้นี้ได้ค่ะ');
        }

        await interaction.guild.members.kick(userToKick);
        await interaction.reply(`เตะ ${userToKick.tag} ออกจากเซิร์ฟเวอร์แล้วค่ะ`);
    },
};
