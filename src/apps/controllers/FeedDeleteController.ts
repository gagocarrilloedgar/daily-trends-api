import { Request, Response } from 'express';
import httpStatus from 'http-status';

import { FeedRemover } from '../../context/Feed/application';

import { Controller } from './Controller';

export class FeedDeleteController implements Controller {
  constructor(private feedRemover: FeedRemover) {}

  async run(req: Request, res: Response) {
    const id = req.params.id;

    await this.feedRemover.run(id);

    res.status(httpStatus.OK).json({ msg: 'Feed deleted' });
  }
}
