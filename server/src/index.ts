import fastify, { FastifyInstance, FastifyRegister } from 'fastify';
import { config } from 'dotenv';
import { LoginRoute, makeLoginRoute } from './routes/login';
import { makeAuthorize } from './auth/authorize';
import { asFunction, asValue, createContainer } from 'awilix';
import { makeValidateToken } from './auth/validateToken';
import { makeEnsureAuth } from './middleware/ensureAuth';
import { makeMeRoute, MeRoute } from './routes/me';

config();

const container = createContainer();

const server = fastify({
  logger: true,
});
const port = process.env.PORT || 5000;

const appUser = {
  password: process.env.USER_PASS!,
  userName: process.env.USER_NAME!,
};

container.register({
  appUser: asValue(appUser),
  authorize: asFunction(makeAuthorize).singleton(),
  ensureAuth: asFunction(makeEnsureAuth).singleton(),
  port: asValue(port),
  loginRoute: asFunction(makeLoginRoute).singleton(),
  meRoute: asFunction(makeMeRoute).singleton(),
  jwtSecret: asValue(process.env.JWT_SECRET),
  validateToken: asFunction(makeValidateToken).singleton(),
});

server.setErrorHandler(async (error, request, reply) => {
  if (error.statusCode) {
    reply.statusCode = error.statusCode;
  }

  return {
    name: error.name,
    message: error.message,
    details: (error as Record<string, any>).details,
  };
});

server.decorateRequest('user', '');

server.register(container.resolve<LoginRoute>('loginRoute'));
server.register(container.resolve<MeRoute>('meRoute'));

server.listen(port).then((url) => {
  console.log(`Server started on ${url}`);
});
