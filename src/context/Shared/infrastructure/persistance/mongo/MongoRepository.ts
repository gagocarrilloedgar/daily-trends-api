import { Collection, MongoClient, ObjectId } from 'mongodb';

import { AggregateRoot } from '../../../domain/AggregateRoot';

export abstract class MongoRepository<T extends AggregateRoot> {
  constructor(private _client: Promise<MongoClient>) {}

  protected abstract collectionName(): string;

  protected client(): Promise<MongoClient> {
    return this._client;
  }

  protected async collection(): Promise<Collection> {
    return (await this._client).db().collection(this.collectionName());
  }

  protected async persist(id: string, aggregateRoot: T): Promise<void> {
    const collection = await this.collection();

    const mongoId = id as unknown as ObjectId;
    const primitive = aggregateRoot.toPrimitives();
    const document = { ...primitive, _id: id, id: undefined };

    await collection.updateOne({ _id: mongoId }, { $set: document }, { upsert: true });
  }
}
