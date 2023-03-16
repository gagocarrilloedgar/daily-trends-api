import { SourceTypes } from '../../Shared/domain/Feed/Source';
import { Feed } from '../domain';
import { FeedScrapperFactory } from '../infrastructure/FeedScrapperFactory';

export class FeedScrapperRunner {
  async run(type: string): Promise<Feed[]> {
    const scrapper = FeedScrapperFactory.create(type.toUpperCase() as SourceTypes);
    const feeds = await scrapper.scrap();
    return feeds;
  }
}
