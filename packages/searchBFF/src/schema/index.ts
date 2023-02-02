import { makeExecutableSchema } from '@graphql-tools/schema';
import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge';
import { getTagsModule, getQuestionsModule } from '~/modules';
import { baseTypeDefs } from '~/schema/base/typedefs';

export const schema = makeExecutableSchema({
  resolvers: mergeResolvers([
    getTagsModule.resolvers,
    getQuestionsModule.resolvers,
  ]),
  typeDefs: mergeTypeDefs([
    baseTypeDefs,
    getTagsModule.typeDefs,
    getQuestionsModule.typeDefs,
  ]),
});
