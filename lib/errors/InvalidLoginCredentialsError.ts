import { HttpError } from '@lib/errors/HttpError';

export class InvalidLoginCredentialsError extends HttpError {
  readonly name = 'InvalidLoginCredentialsError';
  statusCode = 400;

  constructor() {
    super('Invalid login or password entered.');
  }
}
