import request from 'supertest';
import { Server } from '../../src/apps/server';

describe('Status', () => {
  test('should return 200', async () => {
    const server = new Server('3001');
    await request(server.getApp()).get('/api/status').expect(200);
  });
});
