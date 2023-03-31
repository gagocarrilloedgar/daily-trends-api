import { Cheerio, CheerioAPI, Element, load } from 'cheerio';
import puppeteer from 'puppeteer';

export class CheerioFeedScrapperRepository {
  async load(url: string): Promise<CheerioAPI> {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    const body = await page.evaluate(() => document.body.outerHTML);
    await browser.close();

    const tags = load(body);
    return tags;
  }

  public getArticles(tags: CheerioAPI, BASE_BLOCK: string, MAX_FEEDS: number): Cheerio<Element> {
    const baseBlockTags = tags(BASE_BLOCK);

    const articles = tags(baseBlockTags)
      .find('article')
      .map((_i, el) => el)
      .slice(0, MAX_FEEDS);

    return articles;
  }
}
