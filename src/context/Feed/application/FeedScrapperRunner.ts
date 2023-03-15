import { Feed } from '../domain';
import { FeedScrapperRepository } from '../domain/FeedScrapperRepository';

export class FeedScrapperRunner {
  constructor(private repository: FeedScrapperRepository) {}

  async run(): Promise<Feed[]> {
    const feeds = await this.repository.scrap();

    // Here we could add some logic to save the feeds in the database and be able to cache them for the next request (within the same day)

    return feeds;
  }
}
