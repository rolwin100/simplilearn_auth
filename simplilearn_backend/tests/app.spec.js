const request = require('supertest');
const container = require('../src/container');

describe('Health check', () => {
  const { server } = container.cradle;
  const app = request(server.app);

  it('should return OK.', async () => {
    const response = await app.get('/health');
    expect(response.statusCode).toBe(200);
  });

  // test('user listing api without token should return Unauthorized.', (done) => {
  //   app.get('/v1/users').then((response) => {
  //     expect(response.statusCode).toBe(401);
  //     done();
  //   });
  // });
});
