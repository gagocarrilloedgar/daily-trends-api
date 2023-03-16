import { Request, Response, Router } from 'express';

import swaggerUi from 'swagger-ui-express';
import { OpenApi, Types } from 'ts-openapi';

// Create an OpenApi instance to store definitions
// Tutorial at: https://medium.com/pipedrive-engineering/maintaining-rest-api-documentation-with-node-js-part-i-65e9700e3b30
// More examples at: https://github.com/nelsongomes/server

export const openApiInstance = new OpenApi(
  'v1.0', // API version
  'DailyTrends', // API title
  'Need feed API for DailyTrends', // API description
  'readme.edgar@nuwe.io' // API maintainer
);

// Declare servers for the API
openApiInstance.setServers([{ url: 'http://localhost:3001', description: 'Local server' }]);

// Set API license
openApiInstance.setLicense(
  'MIT', // API license name
  '', // TODO To be defined
  '' //  Terms of service
);

export function initOpenApi(router: Router, openApi: OpenApi) {
  // generate our OpenApi schema
  const openApiJson = openApi.generateJson();

  // we'll create an endpoint to reply with openapi schema
  router.get('/openapi.json', function (_req: Request, res: Response) {
    res.json(openApiJson);
  });
  // this will make openapi UI available with our definition
  router.use('/docs', swaggerUi.serve, swaggerUi.setup(openApiJson));
}

export const errorSchema = Types.Object({
  description: 'Error Object',
  properties: {
    code: Types.Integer({ description: 'Error Code' }),
    message: Types.String({ description: 'Error Message' }),
    stack: Types.String({ description: 'Error Stack' })
  },
  example: {
    code: 121,
    message: 'Internal Server Error',
    stack: 'Error: Internal Server Error'
  },
  modelName: 'ErrorResponse'
});
