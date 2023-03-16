import { Router } from 'express';
import glob from 'glob';
import { OpenApi } from 'ts-openapi';

export function registerRoutes(router: Router, openApi: OpenApi) {
  const routes = glob.sync(__dirname + '/**/*.routes.*');
  routes.forEach(route => register(route, router, openApi));
}

function register(routePath: string, router: Router, openApi: OpenApi) {
  const route = require(routePath);
  route.register(router, openApi);
}
