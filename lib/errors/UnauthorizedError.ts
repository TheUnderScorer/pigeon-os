import { HttpError } from '@lib/errors/HttpError';

export class UnauthorizedError extends HttpError {
  name = 'UnauthorizedError';
  statusCode = 400;

  constructor() {
    super('Unauthorized access');
  }
}
