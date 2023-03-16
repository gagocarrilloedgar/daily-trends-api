import { Request, Response } from 'express';
import { FeedScrapperRunner } from '../../context/Feed/application/FeedScrapperRunner';

export class FeedScrapperGetController {
  constructor(private runner: FeedScrapperRunner) {}

  async run(req: Request, res: Response) {
    const type = req.query?.type as string;
    const feed = await this.runner.run(type);
    res.status(200).send({ feed });
  }
}
