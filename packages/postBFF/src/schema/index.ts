import { makeExecutableSchema } from '@graphql-tools/schema';
import { resolvers, typeDefs } from '~/modules/addQuestion';

export const schema = makeExecutableSchema({
  resolvers,
  typeDefs,
});
