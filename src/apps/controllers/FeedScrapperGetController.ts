import { Request, Response } from 'express';
import { FeedScrapperRunner } from '../../context/Feed/application/FeedScrapperRunner';

export class FeedScrapperGetController {
  constructor(private runner: FeedScrapperRunner) {}

  async run(_req: Request, res: Response) {
    // here we need to add some logic to get the url from the request
    const feed = await this.runner.run();
    res.status(200).send({ feed });
  }
}
