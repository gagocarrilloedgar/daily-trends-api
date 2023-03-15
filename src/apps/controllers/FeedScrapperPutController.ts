import { Request, Response } from 'express';

export class FeedScrapperPutController {
  constructor() {}

  async run(req: Request, res: Response) {
    // here we need to add some logic to get the url from the request
    const url = req.params.url;
    console.log(url);
    res.status(200).send({ msg: 'OK' });
  }
}
