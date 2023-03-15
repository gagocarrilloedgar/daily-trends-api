import { Feed } from './Feed';

export interface FeedScrapperRepository {
  scrap(): Promise<Feed[]>;
}
