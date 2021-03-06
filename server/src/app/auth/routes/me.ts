import { FastifyInstance } from 'fastify';
import { serverRoutes } from '@lib/serverRoutes';
import { EnsureAuth } from '../../../middleware/ensureAuth';

export interface MeRouteDependencies {
  ensureAuth: EnsureAuth;
}

export const makeMeRoute = ({ ensureAuth }: MeRouteDependencies) => async (
  fastify: FastifyInstance
) => {
  fastify.route({
    url: serverRoutes.me,
    method: 'GET',
    preHandler: [ensureAuth],
    handler: async (request) => {
      return request.user;
    },
  });
};

export type MeRoute = ReturnType<typeof makeMeRoute>;
