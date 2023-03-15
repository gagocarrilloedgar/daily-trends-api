import config from '../../config';
import { MongoConfig } from './MongoConfig';

const mongoConfig = {
  url: config.get('mongo.url')
} as MongoConfig;

export class MongoConfigFactory {
  static create(): MongoConfig {
    return mongoConfig;
  }
}
