import { Request, Response, Router } from 'express';
import { OpenApi, Types, WebRequestSchema } from 'ts-openapi';
import { SourceTypes } from '../../context/Shared/domain/Feed/Source';
import { FeedDeleteController } from '../controllers/FeedDeleteController';
import { FeedGetController } from '../controllers/FeedGetController';
import { FeedPutController } from '../controllers/FeedPutController';
import container from '../dependency-injection';
import { validateRequest } from '../middlewares/validateRequest';

const putControllerSchema: WebRequestSchema = {
  body: Types.Object({
    description: 'Create & Update Feed',
    properties: {
      id: Types.Uuid({ description: 'Feed id', example: 'Feed id' }),
      title: Types.String({ description: 'Feed name', example: 'Feed name' }),
      description: Types.String({ description: 'Feed description', example: 'Feed description' }),
      url: Types.String({ description: 'Feed url', example: 'Feed url' }),
      image: Types.String({ description: 'Feed image', example: 'Feed image' }),
      source: SourceTypes,
      author: Types.String({ description: 'Feed author', example: 'Feed author' }),
      location: Types.String({ description: 'Feed location', example: 'Feed location' }),
      date: Date
    }
  })
};

export const register = (router: Router, _openApi: OpenApi) => {
  const controller: FeedPutController = container.get('controllers.FeedPutController');

  const getController: FeedGetController = container.get('controllers.FeedGetController');
  const deleteController: FeedDeleteController = container.get('controllers.FeedDeleteController');

  router.put('/api/feed', validateRequest(putControllerSchema), (req: Request, res: Response) =>
    controller.run(req, res)
  );

  router
    .route('/api/feed/:id')
    .get((req: Request, res: Response) => getController.run(req, res))
    .delete((req: Request, res: Response) => deleteController.run(req, res));
};
