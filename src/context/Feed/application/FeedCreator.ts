import { Feed, FeedId, FeedRepository, Source } from '../domain';

export class FeedCreator {
  constructor(private feedRepository: FeedRepository) {}

  async run(
    id: FeedId,
    title: string,
    url: string,
    description: string,
    image: string,
    source: Source,
    date: Date
  ): Promise<void> {
    const feed = new Feed(id, title, url, description, image, source, date);

    await this.feedRepository.save(feed);
  }
}
