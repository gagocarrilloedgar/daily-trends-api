import { Request, Response, Router } from 'express';
import StatusController from '../controllers/StatusGetController';

export const register = (router: Router) => {
  const controller: StatusController = new StatusController();
  router.get('/api/status', (req: Request, res: Response) => controller.run(req, res));
};
