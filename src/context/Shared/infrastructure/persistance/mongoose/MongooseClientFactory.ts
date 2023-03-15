import { Mongoose } from 'mongoose';
import { MongooseConfig } from './MongooseConfig';

export class MongooseClientFactory {
  private static client: Mongoose;

  static async create(config: MongooseConfig): Promise<Mongoose> {
    let client = this.client;

    if (!client) {
      client = await MongooseClientFactory.createAndConnectClient(config);
      this.registerClient(MongooseClientFactory.client);
    }

    return client;
  }

  private static registerClient(client: Mongoose): void {
    MongooseClientFactory.client = client;
  }

  private static createAndConnectClient(config: MongooseConfig): Promise<Mongoose> {
    const client = new Mongoose();
    client.connect(config.url, {});

    return Promise.resolve(client);
  }
}
