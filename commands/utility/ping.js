const {SlashCommandBuilder} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('This command replies to a user with "Pong!" when the bot receives a /ping command'),
    async execute(interaction) {
        await interaction.reply('Pong!');
    }
}