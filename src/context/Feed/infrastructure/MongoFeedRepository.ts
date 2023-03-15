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
  date: Date;
}

export class MongoFeedRepository extends MongoRepository<Feed> implements FeedRepository {
  findOne(query: unknown): Promise<Feed> {
    throw new Error('Method not implemented.');
  }
  delete(id: FeedId): Promise<void> {
    throw new Error('Method not implemented.');
  }
  async update(feed: Feed): Promise<void> {
    throw new Error('Method not implemented.');
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
        date: document.date
      })
    );
  }

  protected collectionName(): string {
    return 'feed';
  }
}
