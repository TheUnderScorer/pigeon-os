import { FastifyInstance } from 'fastify';
import { config } from 'dotenv';
import { createServer } from './server';

config();

async function main() {
  const container = await createServer();
  const port = container.resolve<number>('port');
  const server = container.resolve<FastifyInstance>('server');

  server.listen(port).then((url) => {
    console.log(`Server started on ${url}`);
  });
}

main().catch(console.error);
