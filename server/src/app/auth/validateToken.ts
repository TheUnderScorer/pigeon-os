import { verify } from 'jsonwebtoken';
import { UnauthorizedError } from '@lib/errors/UnauthorizedError';
import { User } from '@lib/types/user';

export interface ValidateTokenDependencies {
  jwtToken: string;
}

export const makeValidateToken = ({ jwtToken }: ValidateTokenDependencies) => (
  token: string
) => {
  const payload = verify(token, jwtToken) as Record<string, any> | undefined;

  if (!payload?.userName) {
    throw new UnauthorizedError();
  }

  return payload as User;
};

export type ValidateToken = ReturnType<typeof makeValidateToken>;
