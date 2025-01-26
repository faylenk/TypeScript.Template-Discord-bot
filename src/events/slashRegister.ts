import { REST, Routes } from 'discord.js';
import { ExtendedClient } from '../types/discord'; 
import { loadCommands } from '../handlers/commandHandler'; 
import * as dotenv from 'dotenv';

dotenv.config();

export async function registerSlashCommands(client: ExtendedClient) {
  const rest = new REST({ version: '10' }).setToken(process.env.TOKEN!);

  try {
    const commands = loadCommands(client);

    const commandsJSON = commands.map(cmd => cmd.command.toJSON());

    console.log('Started refreshing application (/) commands.');
    await rest.put(Routes.applicationCommands(process.env.CLIENT_ID!), {
      body: commandsJSON,
    });

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error('Erro ao registrar comandos:', error);
  }
}
