import { FeedId } from '../../Shared/domain/Feed/FeedId';
import { Feed, FeedRepository, Source } from '../domain';

export class FeedCreator {
  constructor(private feedRepository: FeedRepository) {}

  async run(
    id: string,
    title: string,
    url: string,
    description: string,
    image: string,
    source: Source,
    date: Date
  ): Promise<void> {
    const feed = new Feed(new FeedId(id), title, url, description, image, source, date);

    await this.feedRepository.save(feed);
  }
}
