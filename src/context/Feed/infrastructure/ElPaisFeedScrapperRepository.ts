import { FeedId } from '../../Shared/domain/Feed/FeedId';
import { SourceTypes } from '../../Shared/domain/Feed/Source';
import { Feed } from '../domain';
import { FeedScrapperRepository } from '../domain/FeedScrapperRepository';
import { BaseCheerioFeedScrapper } from './CheerioFeedScrapperRepository';

export class ElPaisFeedScrapperRepository extends BaseCheerioFeedScrapper implements FeedScrapperRepository {
  private readonly BASE_URL = 'https://elpais.com';
  private readonly type: SourceTypes = SourceTypes.ELPAIS;
  private readonly today = new Date();
  private readonly BASE_BLOCK = 'section._g._g-md._g-o.b.b-d.b--o';
  private readonly MAX_FEEDS = 5;

  async scrap(): Promise<Feed[]> {
    const tags = await this.load(this.BASE_URL);

    const feeds = [] as Feed[];
    const baseBlockTags = tags(this.BASE_BLOCK);

    const articles = tags(baseBlockTags)
      .find('article')
      .map((_i, el) => el)
      .slice(0, this.MAX_FEEDS);

    articles.map((_i: any, el: any) => {
      const title = tags(el).find('h2').text();
      const link = tags(el).find('a').attr('href');
      const img = tags(el).find('img').attr('src');
      const description = tags(el).find('p').text();
      const authorName = tags(el)
        .map((_i, el) => tags(el).find('span.c_a_n').text())
        .get(0);

      const location = tags('span.c_a_l')
        .map((_i, el) => tags(el).text())
        .get(0);

      const newFeed = new Feed(
        FeedId.generate(),
        title,
        link || '',
        img || '',
        description,
        this.type,
        authorName || '',
        location || '',
        this.today
      );

      feeds.push(newFeed);
    });

    return feeds;
  }
}

/*
          let authorName, authorUrl;

          tags('div.c_a').map((i, el) => {
            const elems = tags(el);
            authorName = elems.find('a').text();
            authorUrl = elems.find('a').attr('href');
          });


          const location = tags('span.c_a_l')
            .map((_i, el) => tags(el).text())
            .get(0);

          const author = {
            name: authorName,
            url: authorUrl
          };
          */

/**
 * tags('section._g._g-md._g-o.b.b-d.b--o').map((i, el) => {
      tags(el)
        .find('article')
        .map((_i, el) => {
          const title = tags(el).find('h2').text();
          const link = tags(el).find('a').attr('href');
          const img = tags(el).find('img').attr('src');
          const description = tags(el).find('p').text();

          console.log({ title });

          const newFeed = new Feed(FeedId.generate(), title, link || '', img || '', description, this.type, this.today);

          feeds.push(newFeed);
        });
    });
 */
