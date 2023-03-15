import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { FeedCreator } from '../../context/Feed/application';

import { Controller } from './Controller';

export class FeedPutController implements Controller {
  constructor(private feedCreator: FeedCreator) {}

  async run(req: Request, res: Response) {
    const { id, title, url, description, image, source, date } = req.body;

    await this.feedCreator.run(id, title, url, description, image, source, new Date(date));

    res.status(httpStatus.CREATED).json({ msg: 'Feed created' });
  }
}
