import { ExtendedClient } from '../types/discord'; 
import { Collection } from 'discord.js';
import * as fs from 'fs';
import * as path from 'path';

export function loadCommands(client: ExtendedClient) {
  client.commands = new Collection();

  const commandFolders = fs.readdirSync(path.join(__dirname, '../commands'));

  for (const folder of commandFolders) {
    const commandFiles = fs.readdirSync(path.join(__dirname, `../commands/${folder}`))
      .filter(file => file.endsWith('.ts') || file.endsWith('.js')); 

    for (const file of commandFiles) {
      try {
        const command = require(path.join(__dirname, `../commands/${folder}/${file}`));

        if (command.command && command.command.name) {
          client.commands.set(command.command.name, command);
          console.log(`Command loaded: ${command.command.name}`);
        } else {
          console.error(`Command without 'name': ${file}`);
        }
      } catch (err) {
        console.error(`Error at loading ${file}:`, err);
      }
    }
  }

  return client.commands;
}
