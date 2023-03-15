import { Request, Response, Router } from 'express';
import { FeedDeleteController } from '../controllers/FeedDeleteController';
import { FeedGetController } from '../controllers/FeedGetController';
import { FeedPutController } from '../controllers/FeedPutController';
import container from '../dependency-injection';

export const register = (router: Router) => {
  const controller: FeedPutController = container.get('controllers.FeedPutController');

  const getController: FeedGetController = container.get('controllers.FeedGetController');
  const deleteController: FeedDeleteController = container.get('controllers.FeedDeleteController');

  router.put('/api/feed', (req: Request, res: Response) => controller.run(req, res));

  router
    .route('/api/feed/:id')
    .get((req: Request, res: Response) => getController.run(req, res))
    .delete((req: Request, res: Response) => deleteController.run(req, res));
};
