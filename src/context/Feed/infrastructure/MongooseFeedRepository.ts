import { Feed } from '../domain/Feed';
import { FeedRepository } from '../domain/FeedRepository';

export class MongooseFeedRepository implements FeedRepository {
  update(feed: Feed): Promise<void> {
    throw new Error('Method not implemented.');
  }
  async save(feed: Feed): Promise<void> {
    throw new Error('Method not implemented.');
  }

  async find(id: string): Promise<Feed[] | undefined> {
    throw new Error('Method not implemented.');
  }

  async findOne(query: unknown): Promise<Feed | undefined> {
    throw new Error('Method not implemented.');
  }

  async delete(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
