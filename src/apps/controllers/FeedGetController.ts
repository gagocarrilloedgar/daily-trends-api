import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { FeedFinder } from '../../context/Feed/application';

import { Controller } from './Controller';

export class FeedGetController implements Controller {
  constructor(private feedFinder: FeedFinder) {}

  async run(req: Request, res: Response) {
    const id = req.params.id;

    const feed = await this.feedFinder.run(id);

    res.status(httpStatus.OK).json({ data: feed });
  }
}
