import 'dotenv/config';

const config = {
  port: process.env.PORT || 3000,
  isProduction: process.env.NODE_ENV === 'production',
  isDevelopment: process.env.NODE_ENV === 'dev',
  isTest: process.env.NODE_ENV === 'test',
  database: {
    url: process.env.NODE_ENV === 'test' ? process.env.MONGO_URL_TEST : process.env.MONGO_URL
  }
};

export default config;
