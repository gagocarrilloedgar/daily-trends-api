import 'dotenv/config';

const config = {
  port: process.env.PORT || 3000,
  database: {
    url: process.env.NODE_ENV === 'test' ? process.env.MONGO_URL_TEST : process.env.MONGO_URL
  }
};

export default config;
