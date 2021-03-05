import { User } from '@lib/types/user';
import { sign } from 'jsonwebtoken';

export const createTokenForUser = (user: User) => {
  return sign(user, process.env.JWT_SECRET!);
};
