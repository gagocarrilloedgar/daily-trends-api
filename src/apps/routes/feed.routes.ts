import { Request, Response, Router } from 'express';
import { FeedPutController } from '../controllers/FeedPutController';
import container from '../dependency-injection';

export const register = (router: Router) => {
  const controller: FeedPutController = container.get('controllers.FeedPutController');

  router.put('/api/feed', (req: Request, res: Response) => controller.run(req, res));
};
