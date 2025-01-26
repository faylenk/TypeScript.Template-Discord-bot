import { ExtendedClient } from '../types/discord';
import * as dotenv from 'dotenv';
import { registerSlashCommands } from './slashRegister';

dotenv.config();

export default async function ready(client: ExtendedClient) {
  console.log('Bot is now online!');

  await registerSlashCommands(client);
}
