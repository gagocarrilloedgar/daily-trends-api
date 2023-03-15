import { Request, Response } from 'express';
import httpStatus from 'http-status';

import { Feed, FeedRepository } from '../../context/Feed/domain';
import { FeedId } from '../../context/Shared/domain/Feed/FeedId';

import { Controller } from './Controller';

export class FeedPutController implements Controller {
  constructor(private feedRepository: FeedRepository) {}

  async run(req: Request, res: Response) {
    const { id, title, url, description, image, source, date } = req.body;

    const feed = new Feed(new FeedId(id), title, url, description, image, source, date);

    await this.feedRepository.save(feed);

    res.status(httpStatus.CREATED).send();
  }
}
