// import axios from 'axios';
import { CheerioAPI, load } from 'cheerio';
import puppeteer from 'puppeteer';

export class CheerioFeedScrapperRepository {
  async load(url: string): Promise<CheerioAPI> {
    /**
     * Neither puppeter nor axios are working with the El Mundo encoding (UTF-8)
    /*const feedResponse = await axios.get(url, {
      responseEncoding: 'uft8',
      headers: { 'Accept-Encoding': 'text/html; charset=UTF-8' }
    });/**/

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    const body = await page.evaluate(() => document.body.outerHTML);
    await browser.close();

    const tags = load(body);
    return tags;
  }
}
