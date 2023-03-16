import { FeedId } from '../../Shared/domain/Feed/FeedId';
import { SourceTypes } from '../../Shared/domain/Feed/Source';
import { Feed } from '../domain';
import { FeedScrapperRepository } from '../domain/FeedScrapperRepository';
import { BaseCheerioFeedScrapper } from './CheerioFeedScrapperRepository';

export class ElMundoFeedScrapperRepository extends BaseCheerioFeedScrapper implements FeedScrapperRepository {
  private readonly BASE_URL = 'https://www.elmundo.es/';
  private readonly type: SourceTypes = SourceTypes.ELMUNDO;
  private readonly BASE_BLOCK = 'div.ue-l-cg__block';
  private readonly MAX_FEEDS = 5;
  private readonly today = new Date();

  async scrap(): Promise<Feed[]> {
    const tags = await this.load(this.BASE_URL);

    const feeds = [] as Feed[];

    const articles = tags(this.BASE_BLOCK)
      .map((_i, el) =>
        tags(el)
          .find('article')
          .map((_i, el) => el)
      )
      .slice(0, this.MAX_FEEDS);

    articles.map((_i, el) => {
      const title = tags(el).find('h2').text();
      const link = tags(el).find('a').attr('href');
      const img = tags(el).find('img').attr('src');
      const description = tags(el).find('p').text();
      const name = tags(el).find('span.ue-c-cover-content__byline-name').text();
      const location = tags(el).find('span.ue-c-cover-content__byline-location').text();

      const newFeed = new Feed(
        FeedId.generate(),
        title,
        link || '',
        img || '',
        description,
        this.type,
        name,
        location,
        this.today
      );

      feeds.push(newFeed);
    });

    return feeds;
  }
}
