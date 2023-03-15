import { FeedRepository } from '../domain';

export class FeedFinder {
  constructor(private repository: FeedRepository) {}

  async run() {
    const feed = await this.repository.find();

    if (!feed) {
      throw new Error('There are no feeds to show');
    }

    return feed;
  }
}
