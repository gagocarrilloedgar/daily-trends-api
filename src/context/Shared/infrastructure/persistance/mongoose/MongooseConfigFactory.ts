import config from '../../config';
import { MongooseConfig } from './MongooseConfig';

const mongoConfig = {
  url: config.get('mongo.url')
} as MongooseConfig;

export class MongooseConfigFactory {
  static createConfig(): MongooseConfig {
    return mongoConfig;
  }
}
