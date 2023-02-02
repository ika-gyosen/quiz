import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { schema } from '~/schema';

const port = process.env.PORT || 1111;

const app = express();

app.use(express.json());

const server = new ApolloServer({
  schema,
  plugins: [ApolloServerPluginLandingPageLocalDefault()],
});

const main = async () => {
  await server.start();
  server.applyMiddleware({
    app,
    path: '/graphql',
    cors: {
      origin: [
        // local 開発時の searchApp のデフォルトポート
        'http://localhost:5173',
        // apollo studio（Apolloのsandboxを利用できるように許可する）
        'https://studio.apollographql.com',
      ],
      credentials: true,
    },
  });

  app.listen({ port, host: '0.0.0.0' }, () => {
    console.log(`🙆‍♂️ http://localhost:${port}/graphql`);
  });
};

main();
