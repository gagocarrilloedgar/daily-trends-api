import { MongoClient } from 'mongodb';
import { MongoConfig } from './MongoConfig';

export class MongoClientFactory {
  private static client: MongoClient | null = null;

  static async create(config: MongoConfig): Promise<MongoClient> {
    let client = MongoClientFactory.getClient();

    if (!client) {
      client = await MongoClientFactory.createAndConnectClient(config);

      MongoClientFactory.registerClient(client);
    }

    return client;
  }

  private static getClient(): MongoClient | null {
    return MongoClientFactory.client;
  }

  private static async createAndConnectClient(config: MongoConfig): Promise<MongoClient> {
    const client = new MongoClient(config.url, { ignoreUndefined: true });

    await client.connect();

    return client;
  }

  private static registerClient(client: MongoClient): void {
    MongoClientFactory.client = client;
  }
}
