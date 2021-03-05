import { decode } from 'jsonwebtoken';
import { Authorize } from './authorize';
import { UnauthorizedError } from '@lib/errors/UnauthorizedError';
import { LoginInput } from '@lib/types/user';

export interface ValidateTokenDependencies {
  authorize: Authorize;
}

export const makeValidateToken = ({ authorize }: ValidateTokenDependencies) => (
  token: string
) => {
  const payload = decode(token);

  if (typeof payload !== 'object') {
    throw new UnauthorizedError();
  }

  authorize(payload as LoginInput);

  return payload as LoginInput;
};

export type ValidateToken = ReturnType<typeof makeValidateToken>;
