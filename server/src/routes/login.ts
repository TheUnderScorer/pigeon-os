import { FastifyInstance } from 'fastify';
import { Authorize } from '../auth/authorize';
import { serverRoutes } from '@lib/serverRoutes';
import { bodySchemaValidator } from '../middleware/schemaValidator';
import { LoginInput } from '@lib/schema/auth/LoginInput';
import { LoginResult } from '@lib/types/user';
import { createTokenForUser } from '../auth/createToken';

export interface LoginRouteDependencies {
  authorize: Authorize;
}

export const makeLoginRoute = ({ authorize }: LoginRouteDependencies) => async (
  fastify: FastifyInstance
) => {
  fastify.route({
    url: serverRoutes.login,
    method: 'POST',
    handler: async (request) => {
      const body = request.body as LoginInput;

      authorize(body);

      return {
        token: createTokenForUser(body),
      } as LoginResult;
    },
    preHandler: [bodySchemaValidator(LoginInput)],
  });
};

export type LoginRoute = ReturnType<typeof makeLoginRoute>;
