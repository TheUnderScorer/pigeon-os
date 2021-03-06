import { FastifyInstance } from 'fastify';

export const errorHandler: FastifyInstance['errorHandler'] = async (
  error,
  request,
  reply
) => {
  if (error.statusCode) {
    reply.statusCode = error.statusCode;
  }

  return {
    name: error.name,
    message: error.message,
    details: (error as Record<string, any>).details,
  };
};
