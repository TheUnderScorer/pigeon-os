import fastify from 'fastify';
import { sum } from '@lib/math';

const server = fastify({
  logger: true,
});

const port = process.env.PORT || 5000;

// Dummy function to keep correct imports
sum(1, 2);

server.route({
  url: '/',
  method: 'GET',
  handler: async () => {
    return {
      hello: 'world',
    };
  },
});

server.listen(port).then((url) => {
  console.log(`Server started on ${url}`);
});
