import { Feed, FeedRepository } from '../domain';

export class FindSingleFeed {
  constructor(private repository: FeedRepository, private query: unknown) {}

  async run(): Promise<Feed> {
    const feed = await this.repository.findOne(this.query);

    if (!feed) {
      throw new Error('Feed not found');
    }

    return feed;
  }
}
