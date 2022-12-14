import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge';
import { makeExecutableSchema } from '@graphql-tools/schema';
import {
  resolvers as addQuestionResolvers,
  typeDefs as addQuestionTypeDefs,
} from '~/modules/addQuestion';
import {
  resolvers as addTagResolvers,
  typeDefs as addTagTypeDefs,
} from '~/modules/addTag';
import { baseTypeDefs } from '~/schema/base/typedefs';

export const schema = makeExecutableSchema({
  resolvers: mergeResolvers([addQuestionResolvers, addTagResolvers]),
  typeDefs: mergeTypeDefs([baseTypeDefs, addQuestionTypeDefs, addTagTypeDefs]),
});
