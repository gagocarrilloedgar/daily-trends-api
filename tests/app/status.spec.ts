import request from 'supertest';
import { Server } from '../../src/apps/server';

let server: Server;

beforeAll(async () => {
  server = new Server('3001');
});

afterAll(async () => {
  await server.stop();
});

describe('Status', () => {
  test('should return 200', async () => {
    await request(server.getApp()).get('/api/status').expect(200);
  });
});
