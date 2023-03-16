import { Request, Response, Router } from 'express';
import { OpenApi, Types } from 'ts-openapi';

import StatusController from '../controllers/StatusGetController';
import container from '../dependency-injection';

export const register = (router: Router, openApi: OpenApi) => {
  const controller: StatusController = container.get('controllers.StatusGetController');

  const path = '/api/status';

  router.get('/api/status', (req: Request, res: Response) => controller.run(req, res));

  const sucessResponse = openApi.declareSchema('SucessResponse', responseSchema);

  openApi.addPath(
    path,
    {
      get: {
        summary: 'Get status',
        description: 'Get status',
        tags: ['Status'],
        operationId: 'StatusGetController',
        responses: {
          200: sucessResponse
        }
      }
    },
    true
  );
};

const responseSchema = Types.Object({
  description: 'Status response',
  properties: {
    message: Types.String({
      description: 'Message',
      example: 'OK'
    })
  }
});
