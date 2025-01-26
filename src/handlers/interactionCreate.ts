import { Interaction, MessageFlags } from 'discord.js';
import { ExtendedClient } from '../types/discord';

export default async function interactionCreate(client: ExtendedClient, interaction: Interaction) {
  if (!interaction.isCommand()) return;

  const command = client.commands?.get(interaction.commandName);

  if (command) {
    try {
      await command.execute(interaction);
    } catch (error) {
      console.error('Error at executing a command', error);
      await interaction.reply({ content: 'Error at executing this command', flags: MessageFlags.Ephemeral });
    }
  }
}
