import { Collection, Mongoose } from 'mongoose';

import { AggregateRoot } from '../../../../Shared/domain/AggregateRoot';

export abstract class MongooseRepository<T extends AggregateRoot> {
  constructor(private _client: Promise<Mongoose>) {}

  protected abstract collectionName(): string;

  protected client(): Promise<Mongoose> {
    return this._client;
  }

  protected async collection(): Promise<Collection> {
    return (await this._client).connection.collection(this.collectionName());
  }

  protected async persist(id: string, aggregateRoot: T): Promise<void> {
    const collection = await this.collection();
    const document = { _id: id, ...aggregateRoot.toPrimitives() };

    await collection.insertOne(document);
  }
}
