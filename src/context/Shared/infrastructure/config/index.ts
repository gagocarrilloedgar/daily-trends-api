import convict from 'convict';
import 'dotenv/config';

const moocConfig = convict({
  env: {
    doc: 'The application environment.',
    format: ['production', 'development', 'staging', 'test'],
    default: 'default',
    env: 'NODE_ENV'
  },
  mongo: {
    url: {
      doc: 'The Mongo connection URL',
      format: String,
      env: 'MONGO_URL',
      default: process.env.MONGO_URL
    }
  }
});

moocConfig.loadFile([__dirname + '/' + moocConfig.get('env') + '.json']);

export default moocConfig;
