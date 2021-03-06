import { asFunction, asValue, createContainer } from 'awilix';
import fastify from 'fastify';
import { makeAuthorize } from './app/auth/authorize';
import { makeEnsureAuth } from './middleware/ensureAuth';
import { LoginRoute, makeLoginRoute } from './app/auth/routes/login';
import { makeMeRoute, MeRoute } from './app/auth/routes/me';
import { makeValidateToken } from './app/auth/validateToken';
import { makeCreateTokenForUser } from './app/auth/createToken';
import { createGoogleOauth2 } from './google/oauth2';
import { errorHandler } from './middleware/errorHandler';

export const createServer = async () => {
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

  return container;
};
