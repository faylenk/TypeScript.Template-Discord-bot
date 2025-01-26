import { Client, Collection, GatewayIntentBits } from 'discord.js';

export class ExtendedClient extends Client<boolean> {
  commands: Collection<any, any>;

  constructor() {
    super({
      intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
      ],
    });

    this.commands = new Collection();
  }
}
