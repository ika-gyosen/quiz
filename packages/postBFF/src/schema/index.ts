import { makeExecutableSchema } from '@graphql-tools/schema';
import { resolvers, typeDefs } from '~/modules/postQuestion';

export const schema = makeExecutableSchema({
  resolvers,
  typeDefs,
});
