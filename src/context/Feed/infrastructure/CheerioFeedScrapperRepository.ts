import axios from 'axios';
import { CheerioAPI, load } from 'cheerio';

export class BaseCheerioFeedScrapper {
  async load(url: string): Promise<CheerioAPI> {
    const feedResponse = await axios(url);
    const tags = load(feedResponse.data);
    return tags;
  }
}