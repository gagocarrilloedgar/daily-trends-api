import { Request, Response, Router } from 'express';

import StatusController from '../controllers/StatusGetController';
import container from '../dependency-injection';

export const register = (router: Router) => {
  const controller: StatusController = container.get('controllers.StatusGetController');
  router.get('/api/status', (req: Request, res: Response) => controller.run(req, res));
};