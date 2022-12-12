import { makeExecutableSchema } from '@graphql-tools/schema';
import { resolvers, typeDefs } from '~/modules/getQuestions';

export const schema = makeExecutableSchema({
  resolvers,
  typeDefs,
});
