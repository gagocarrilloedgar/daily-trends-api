import { Router } from 'express';
import glob from 'glob';

export function registerRoutes(router: Router) {
  const routes = glob.sync(__dirname + '/**/*.routes.*');
  routes.forEach(route => register(route, router));
}

function register(routePath: string, router: Router) {
  const route = require(routePath);
  route.register(router);
}
