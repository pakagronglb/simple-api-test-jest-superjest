// tests/app.test.ts
const request = require('supertest');
const appServer = require('../src/app'); // Rename this variable to avoid conflicts

describe('GET /api/hello', () => {
  it('should return a message', async () => {
    const res = await request(appServer).get('/api/hello'); // Use `appServer` here
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message', 'Hello, world!');
  });
});
