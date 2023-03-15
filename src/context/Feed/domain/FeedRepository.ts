import { FeedId } from '../../Shared/domain/Feed/FeedId';
import { Feed } from './Feed';

/**
 * This is the interface that the FeedRepository must implement
 * This may feel like an premature abstraction, but it will be useful
 * as we are basing it on the domain model
 */
export interface FeedRepository {
  save(feed: Feed): Promise<void>;
  find(): Promise<Array<Feed>>;
  findOne(query: unknown): Promise<Feed>;
  delete(id: FeedId): Promise<void>;
}
