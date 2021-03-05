import { RouteHandler } from 'fastify';
import { UnauthorizedError } from '@lib/errors/UnauthorizedError';
import { ValidateToken } from '../auth/validateToken';

export interface AuthorizedDependencies {
  validateToken: ValidateToken;
}

export const makeEnsureAuth = ({
  validateToken,
}: AuthorizedDependencies): RouteHandler => async (request) => {
  const token = request.headers.authorization?.replace('Bearer ', '') ?? '';

  if (!token) {
    throw new UnauthorizedError();
  }

  request.user = validateToken(token);
};

export type EnsureAuth = ReturnType<typeof makeEnsureAuth>;
