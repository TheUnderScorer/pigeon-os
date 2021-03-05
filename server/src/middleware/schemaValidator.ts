import { RouteHandler } from 'fastify';
import { BaseSchemaConstructor } from '@lib/schema/BaseSchema';

export const bodySchemaValidator = <T extends BaseSchemaConstructor<any>>(
  schema: T
): RouteHandler => async (request) => {
  request.body = schema.validate(request.body);
};
