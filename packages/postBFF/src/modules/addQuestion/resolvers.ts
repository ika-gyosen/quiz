import { Resolvers } from '~/types/graphql';
import { addQuestion } from '~/modules/addQuestion/services';

export const resolvers: Resolvers = {
  Mutation: {
    addQuestion: async (_root, { input }) => {
      return await addQuestion(input);
    },
  },
};
