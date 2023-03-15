import { FeedId } from '../../Shared/domain/Feed/FeedId';
import { Feed } from '../domain/Feed';
import { FeedRepository } from '../domain/FeedRepository';

export class MongooseFeedRepository implements FeedRepository {
  update(feed: Feed): Promise<void> {
    throw new Error('Method not implemented.');
  }
  async save(feed: Feed): Promise<void> {
    throw new Error('Method not implemented.');
  }

  async find(): Promise<Array<Feed>> {
    throw new Error('Method not implemented.');
  }

  async findOne(query: unknown): Promise<Feed> {
    throw new Error('Method not implemented.');
  }

  async delete(id: FeedId): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
