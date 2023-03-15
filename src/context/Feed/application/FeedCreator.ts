import { FeedId } from '../../Shared/domain/Feed/FeedId';
import { SourceTypes } from '../../Shared/domain/Feed/Source';
import { Feed, FeedRepository } from '../domain';

export class FeedCreator {
  constructor(private feedRepository: FeedRepository) {}

  async run(
    id: string,
    title: string,
    url: string,
    description: string,
    image: string,
    source: SourceTypes,
    date: Date
  ): Promise<void> {
    const feed = new Feed(new FeedId(id), title, url, description, image, source, date);

    await this.feedRepository.save(feed);
  }
}
