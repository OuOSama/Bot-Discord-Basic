const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('clear')
		.setDescription('remove all messages'),
	async execute(interaction) {
		const messages = await interaction.channel.messages.fetch();
		interaction.channel.bulkDelete(messages);
		await interaction.reply('ลบข้อความเรียบร้อยแล้วค่ะ'),
		console.log('Message has clear');
	},
};
