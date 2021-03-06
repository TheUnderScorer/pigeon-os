import { User } from '@lib/types/user';
import { sign } from 'jsonwebtoken';

export interface CreateTokenDependencies {
  jwtToken: string;
}

export const makeCreateTokenForUser = ({
  jwtToken,
}: CreateTokenDependencies) => (user: User) => {
  return sign(user, jwtToken);
};

export type CreateTokenForUser = ReturnType<typeof makeCreateTokenForUser>;
