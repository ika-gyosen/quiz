import { GraphQLClient } from 'graphql-request';

export const hasuraClient = new GraphQLClient(
  'http://localhost:8080/v1/graphql',
  { headers: {} },
);
