import request from 'supertest';
import { Server } from '../../../src/apps/server';

const newFeed = {
  id: '0766c602-d4d4-48b6-9d50-d3253123273e',
  title: 'Feed title',
  description: 'Feed description',
  url: 'https://example.com',
  image: 'https://example.com/image.png',
  source: 'ELMUNDO',
  author: 'John Doe',
  location: 'Spain',
  date: '2021/03/07'
};

let server: Server;

beforeAll(async () => {
  server = new Server('3001');
});

afterAll(async () => {
  await server.stop();
});

describe('PUT', () => {
  test('should return 201', async () => {
    await request(server.getApp()).put('/api/feed').send(newFeed).expect(201);
  });
});
