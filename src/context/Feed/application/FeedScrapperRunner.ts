import { SourceTypes } from '../../Shared/domain/Feed/Source';
import { Feed, FeedRepository } from '../domain';
import { FeedScrapperFactory } from '../infrastructure/FeedScrapperFactory';

export class FeedScrapperRunner {
  constructor(private feedRepository: FeedRepository) {}

  async run(type: string): Promise<Feed[]> {
    const scrapper = FeedScrapperFactory.create(type.toUpperCase() as SourceTypes);
    const feeds = await scrapper.scrap();

    const savePromise = feeds.map(async feed => {
      try {
        await this.feedRepository.findOne({
          title: feed.title,
          source: feed.source
        });
      } catch (error) {
        await this.feedRepository.save(feed);
      }
    });

    await Promise.all(savePromise);

    return feeds;
  }
}
