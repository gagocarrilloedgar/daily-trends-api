export interface Scrapper<T> {
  scrap(url: string): Promise<T[]>;
}

export class FeedScrapper {
  public async scrap(url: string): Promise<unknown> {
    throw new Error('Method not implemented.');
  }
}
