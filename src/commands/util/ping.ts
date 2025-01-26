import { SlashCommandBuilder, CommandInteraction, MessageFlags } from 'discord.js'; // Importando CommandInteraction

export const command = new SlashCommandBuilder()
  .setName('ping')
  .setDescription('Replies with pong and shows the latency');

export async function execute(interaction: CommandInteraction) {
  const sent = await interaction.reply({ content: 'Pinging...', flags: MessageFlags.Ephemeral });
  const timeTaken = sent.createdTimestamp - interaction.createdTimestamp;
  await interaction.editReply({ content: `Pong! My ping is: ${timeTaken}ms.` });
}
