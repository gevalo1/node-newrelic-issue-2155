
import fastify from 'fastify';

const start = async () => {
  const app = fastify();

  app.listen({ host: 'localhost', port: 4000 }, (error, url) => {
    if (error) {
      console.log({ error });

      process.exit(1);
    }

    console.log(`Server is listening on ${url}`);
  });
};

start().catch((error) => {
  console.log('Server error', { error });

  process.exit(1);
});
