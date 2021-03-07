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
import { OAuth2Client } from 'google-auth-library';
import { createPhotos } from './google/photos';
import {
  GetPhotosRoute,
  makeGetPhotosRoute,
} from './app/photos/routes/getPhotos';
import { makeFetchPhotos } from './app/photos/fetchPhotos';
import fastifyCors from 'fastify-cors';

export const createServer = async (env: Record<string, any>) => {
  const container = createContainer();

  const server = fastify({
    logger: true,
  });

  const port = env.PORT || 5000;

  const appUser = {
    password: env.USER_PASS!,
    userName: env.USER_NAME!,
  };

  container.register({
    jwtToken: asValue(env.JWT_SECRET),
    googleClientId: asValue(env.GOOGLE_CLIENT_ID),
    googleSecret: asValue(env.GOOGLE_CLIENT_SECRET),
    googleRedirectUrl: asValue(env.GOOGLE_REDIRECT_URL ?? ''),
    googleRefreshToken: asValue(env.GOOGLE_REFRESH_TOKEN),
    googleAccessToken: asValue(env.GOOGLE_ACCESS_TOKEN),
    googlePhotosAlbumId: asValue(env.GOOGLE_PHOTOS_ALBUM_ID),
    appUser: asValue(appUser),
    authorize: asFunction(makeAuthorize).singleton(),
    ensureAuth: asFunction(makeEnsureAuth).singleton(),
    port: asValue(port),
    loginRoute: asFunction(makeLoginRoute).singleton(),
    meRoute: asFunction(makeMeRoute).singleton(),
    getPhotosRoute: asFunction(makeGetPhotosRoute).singleton(),
    jwtSecret: asValue(env.JWT_SECRET),
    validateToken: asFunction(makeValidateToken).singleton(),
    server: asValue(server),
    createToken: asFunction(makeCreateTokenForUser).singleton(),
    googleOauth: asFunction(createGoogleOauth2).singleton(),
    googlePhotos: asFunction(createPhotos),
    fetchPhotos: asFunction(makeFetchPhotos),
  });

  const googleOauth = container.resolve<OAuth2Client>('googleOauth');
  const accessToken = await googleOauth.refreshAccessToken();

  googleOauth.on('tokens', (tokens) => {
    if (tokens.access_token) {
      container.register({
        googleAccessToken: asValue(tokens.access_token),
      });
    }
  });

  container.register({
    googleAccessToken: asValue(accessToken.credentials.access_token),
  });

  server.setErrorHandler(errorHandler);

  server.register(fastifyCors);

  server.decorateRequest('user', '');

  server.register(container.resolve<LoginRoute>('loginRoute'));
  server.register(container.resolve<MeRoute>('meRoute'));
  server.register(container.resolve<GetPhotosRoute>('getPhotosRoute'));

  return container;
};
