import fastify from 'fastify';
import { config } from 'dotenv';
import { LoginRoute, makeLoginRoute } from './app/auth/routes/login';
import { makeAuthorize } from './app/auth/authorize';
import { asFunction, asValue, createContainer } from 'awilix';
import { makeValidateToken } from './app/auth/validateToken';
import { makeEnsureAuth } from './middleware/ensureAuth';
import { makeMeRoute, MeRoute } from './app/auth/routes/me';
import { makeCreateTokenForUser } from './app/auth/createToken';
import { createGoogleOauth2 } from './google/oauth2';
import { errorHandler } from './middleware/errorHandler';

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
  jwtToken: asValue(process.env.JWT_SECRET),
  googleClientId: asValue(process.env.GOOGLE_CLIENT_ID),
  googleSecret: asValue(process.env.GOOGLE_CLIENT_SECRET),
  googleRedirectUrl: asValue(process.env.GOOGLE_REDIRECT_URL ?? ''),
  googleRefreshToken: asValue(process.env.GOOGLE_REFRESH_TOKEN),
  googleAccessToken: asValue(process.env.GOOGLE_ACCESS_TOKEN),
  appUser: asValue(appUser),
  authorize: asFunction(makeAuthorize).singleton(),
  ensureAuth: asFunction(makeEnsureAuth).singleton(),
  port: asValue(port),
  loginRoute: asFunction(makeLoginRoute).singleton(),
  meRoute: asFunction(makeMeRoute).singleton(),
  jwtSecret: asValue(process.env.JWT_SECRET),
  validateToken: asFunction(makeValidateToken).singleton(),
  server: asValue(server),
  createToken: asFunction(makeCreateTokenForUser).singleton(),
  googleOauth: asFunction(createGoogleOauth2).singleton(),
});

server.setErrorHandler(errorHandler);

server.decorateRequest('user', '');

server.register(container.resolve<LoginRoute>('loginRoute'));
server.register(container.resolve<MeRoute>('meRoute'));

server.listen(port).then((url) => {
  console.log(`Server started on ${url}`);
});
