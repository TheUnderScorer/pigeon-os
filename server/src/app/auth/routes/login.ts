import { FastifyInstance } from 'fastify';
import { Authorize } from '../authorize';
import { serverRoutes } from '@lib/serverRoutes';
import { bodySchemaValidator } from '../../../middleware/schemaValidator';
import { LoginInput } from '@lib/schema/auth/LoginInput';
import { LoginResult } from '@lib/types/user';
import { CreateTokenForUser } from '../createToken';

export interface LoginRouteDependencies {
  authorize: Authorize;
  createToken: CreateTokenForUser;
  googleToken: string;
}

export const makeLoginRoute = ({
  authorize,
  createToken,
}: LoginRouteDependencies) => async (fastify: FastifyInstance) => {
  

  fastify.route({
    url: serverRoutes.login,
    method: 'POST',
    handler: async (request) => {
      const input = request.body as LoginInput;

      authorize(input);

      return {
        token: createToken({
          userName: input.userName,
        }),
      } as LoginResult;
    },
    preHandler: [bodySchemaValidator(LoginInput)],
  });
};

export type LoginRoute = ReturnType<typeof makeLoginRoute>;
