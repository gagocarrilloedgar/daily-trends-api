import { Request, Response, Router } from 'express';

export const register = (router: Router) => {
  // const controller: FeedPutController = container.get('controllers.FeedPutController');

  router.put('/api/feed', (req: Request, res: Response) => {
    // controller.run(req, res);
    res.status(201).send();
  });
};
