import bodyParser from 'body-parser';
import compress from 'compression';
import express, { NextFunction, Request, Response } from 'express';
import PromiseRouter from 'express-promise-router';
import helmet from 'helmet';
import * as http from 'http';
import httpStatus from 'http-status';
import { errorConverter, errorHandler } from './middlewares/error';
import { registerRoutes } from './routes';

export class Server {
  private express: express.Express;
  private port: string;
  private httpServer?: http.Server;

  constructor(port: string) {
    this.port = port;
    this.express = express();
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: true }));
    this.express.use(helmet.xssFilter());
    this.express.use(helmet.noSniff());
    this.express.use(compress());
    this.express.use(helmet.hidePoweredBy());
    this.express.use(helmet.frameguard({ action: 'deny' }));

    const router = PromiseRouter();
    this.express.use(router);

    registerRoutes(router);

    router.use(errorConverter);

    router.use(errorHandler);

    router.use((_req: Request, res: Response, next: NextFunction) => {
      res.status(httpStatus.NOT_FOUND).json({ error: 'Not found' });
    });
  }

  async listen(): Promise<void> {
    return new Promise(resolve => {
      this.httpServer = this.express.listen(this.port, () => {
        console.log(`Api is running at http://localhost:${this.port} in ${this.express.get('env')} mode`);
        console.log('Press CTRL-C to stop\n');
        resolve();
      });
    });
  }

  getHTTPServer() {
    return this.httpServer;
  }

  getApp() {
    return this.express;
  }

  async stop(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this.httpServer) {
        this.httpServer.close(error => {
          if (error) {
            return reject(error);
          }
          return resolve();
        });
      }

      return resolve();
    });
  }
}
