import { Feed, FeedRepository } from '../domain';

export class FeedFinder {
  constructor(private repository: FeedRepository) {}

  async run(id: string) {
    // This _id should be transform to isolate the mongo infrastructure
    const feed = await this.repository.findOne(id);

    const feedConverted = new Feed(
      feed.id,
      feed.title,
      feed.url,
      feed.description,
      feed.image,
      feed.source.value,
      feed.date
    );

    return feedConverted.toPrimitives();
  }
}
