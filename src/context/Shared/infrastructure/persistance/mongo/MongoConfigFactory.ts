import config from '../../config';
import { MongoConfig } from './MongoConfig';

const mongoConfig = {
  url: config.database.url
} as MongoConfig;

export class MongoConfigFactory {
  static create(): MongoConfig {
    return mongoConfig;
  }
}
