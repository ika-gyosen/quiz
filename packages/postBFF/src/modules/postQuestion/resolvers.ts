import { Resolvers } from '~/types/graphql';
import { postQuestion } from '~/modules/postQuestion/services';

export const resolvers: Resolvers = {
  Mutation: {
    postQuestion: async (_root, { input }) => {
      return await postQuestion(input);
    },
  },
};
