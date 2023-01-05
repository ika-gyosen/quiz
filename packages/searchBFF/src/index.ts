import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { schema } from '~/schema';

const port = process.env.PORT || 8080;

const app = express();

app.use(express.json());
app.get('/', (req, res) => {
  res.send('running');
});

const server = new ApolloServer({
  schema,
  plugins: [ApolloServerPluginLandingPageLocalDefault()],
});

const main = async () => {
  await server.start();
  server.applyMiddleware({
    app,
    path: '/graphql',
  });

  app.listen({ port, host: '0.0.0.0' }, () => {
    console.log(`🙆‍♂️ http://localhost:${port}/graphql`);
  });
};

main();
