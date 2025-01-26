import * as dotenv from 'dotenv';
import { ExtendedClient } from './src/types/discord'; // Import your ExtendedClient
import { loadCommands } from './src/handlers/commandHandler';
import interactionCreate from './src/handlers/interactionCreate';
import ready from './src/events/ready';

dotenv.config();

const client = new ExtendedClient();

client.once('ready', () => {
  ready(client); 
});

client.on('interactionCreate', (interaction) => {
  interactionCreate(client, interaction); 
});

loadCommands(client); 

client.login(process.env.TOKEN);
