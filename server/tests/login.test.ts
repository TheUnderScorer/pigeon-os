import { createServer } from '../src/server';
import { AwilixContainer } from 'awilix';
import { FastifyInstance } from 'fastify';
import { serverRoutes } from '@lib/serverRoutes';
import { LoginInputInterface, LoginResult } from '@lib/types/user';
import { InvalidLoginCredentialsError } from '@lib/errors/InvalidLoginCredentialsError';

describe('POST /login', () => {
  let container: AwilixContainer;
  let server: FastifyInstance;

  beforeEach(async () => {
    container = await createServer({
      USER_PASS: 'test',
      USER_NAME: 'test',
      JWT_SECRET: 'test',
    });
    server = container.resolve('server');
  });

  it('should handle login', async () => {
    const response = await server.inject({
      path: serverRoutes.login,
      method: 'POST',
      payload: {
        userName: 'test',
        password: 'test',
      } as LoginInputInterface,
    });

    expect(response.statusCode).toEqual(200);

    const body = response.json<LoginResult>();

    expect(body.token).toBeDefined();
  });

  it('should throw on invalid credentials', async () => {
    const response = await server.inject({
      path: serverRoutes.login,
      method: 'POST',
      payload: {
        userName: 'test',
        password: 'test123',
      } as LoginInputInterface,
    });

    expect(response.statusCode).toEqual(400);

    const body = response.json();

    expect(body.name).toEqual(InvalidLoginCredentialsError.name);
  });
});
