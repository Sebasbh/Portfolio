import request from 'supertest';
import app from '../index.js';

describe('Auth endpoints', () => {
  test('POST /api/auth/register', async () => {
    const res = await request(app)
      .post('/api/auth/register')
      .send({ name: 'Test', email: 'test@example.com', password: '123456' });
    expect(res.statusCode).toBe(201);
});
    test('POST /api/auth/login', async () => {
        const res = await request(app)
        .post('/api/auth/login')
        .send({ email: 'test@example.com', password: '123456' });
    expect(res.statusCode).toBe(200);
  });
});