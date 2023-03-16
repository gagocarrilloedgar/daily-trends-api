import { ObjectId } from 'mongodb';
import { FeedId } from '../../Shared/domain/Feed/FeedId';
import { MongoRepository } from '../../Shared/infrastructure/persistance/mongo/MongoRepository';

import { Feed } from '../domain/Feed';
import { FeedRepository } from '../domain/FeedRepository';

interface FeedDocument {
  _id: string;
  title: string;
  description: string;
  url: string;
  image: string;
  source: string;
  author: string;
  location: string;
  date: Date;
}

export class MongoFeedRepository extends MongoRepository<Feed> implements FeedRepository {
  async findOne(query: unknown): Promise<Feed> {
    const collection = await this.collection();

    // This should be temporary, we should isolate the mongo infrastructure
    const queryId = { _id: query as string } as unknown as { _id: ObjectId };

    const document = await collection.findOne<FeedDocument>(queryId);

    if (!document) {
      throw new Error('Feed not found');
    }

    return Feed.fromPrimitives({
      id: document._id,
      title: document.title,
      description: document.description,
      url: document.url,
      image: document.image,
      source: document.source,
      author: document.author,
      location: document.location,
      date: document.date
    });
  }

  async delete(id: FeedId): Promise<void> {
    const collection = await this.collection();

    const mongoId = id.value as unknown as ObjectId;

    await collection.deleteOne({ _id: mongoId });
  }

  async save(feed: Feed): Promise<void> {
    await this.persist(feed.id.value, feed);
  }

  async find(): Promise<Array<Feed>> {
    const colletion = await this.collection();
    const documents = await colletion.find<FeedDocument>({}).toArray();

    if (!documents) {
      throw new Error('Feeds not found');
    }

    return documents.map((document: FeedDocument) =>
      Feed.fromPrimitives({
        id: document._id,
        title: document.title,
        description: document.description,
        url: document.url,
        image: document.image,
        source: document.source,
        author: document.author,
        location: document.location,
        date: document.date
      })
    );
  }

  protected collectionName(): string {
    return 'feed';
  }
}
