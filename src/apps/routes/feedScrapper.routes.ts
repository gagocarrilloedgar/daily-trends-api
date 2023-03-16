import { Request, Response, Router } from 'express';
import { OpenApi } from 'ts-openapi';

import { FeedPutController } from '../controllers/FeedPutController';
import container from '../dependency-injection';

export const register = (router: Router, _openApi: OpenApi) => {
  const controller: FeedPutController = container.get('controllers.FeedScrapperGetController');

  router.get('/api/feed-scrapper', (req: Request, res: Response) => controller.run(req, res));
};
