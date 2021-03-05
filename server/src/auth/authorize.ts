import { LoginInput, User } from '@lib/types/user';
import { InvalidLoginCredentialsError } from '@lib/errors/InvalidLoginCredentialsError';

export interface HandleLoginDependencies {
  appUser: User;
}

export const makeAuthorize = ({ appUser }: HandleLoginDependencies) => (
  input?: LoginInput
) => {
  if (
    !input ||
    input.userName !== appUser.userName ||
    input.password !== appUser.password
  ) {
    throw new InvalidLoginCredentialsError();
  }
};

export type Authorize = ReturnType<typeof makeAuthorize>;
