import 'fastify';
import { User } from '@lib/types/user';

declare module 'fastify' {
  export interface FastifyRequest {
    user?: User;
  }
}
