import { FetchPhotos } from '../fetchPhotos';
import { FastifyInstance } from 'fastify';
import { serverRoutes } from '@lib/serverRoutes';
import { querySchemaValidator } from '../../../middleware/schemaValidator';
import { FetchPhotosPayload } from '@lib/schema/photos/FetchPhotosPayload';
import { EnsureAuth } from '../../../middleware/ensureAuth';

export interface GetPhotosRouteDependencies {
  fetchPhotos: FetchPhotos;
  ensureAuth: EnsureAuth;
}

export const makeGetPhotosRoute = ({
  fetchPhotos,
  ensureAuth,
}: GetPhotosRouteDependencies) => async (fastify: FastifyInstance) => {
  fastify.route({
    url: serverRoutes.getPhotos,
    method: 'GET',
    preHandler: [ensureAuth, querySchemaValidator(FetchPhotosPayload)],
    handler: async (request) => {
      return fetchPhotos(request.query as FetchPhotosPayload);
    },
  });
};

export type GetPhotosRoute = ReturnType<typeof makeGetPhotosRoute>;
