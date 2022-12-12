import { Resolvers } from '~/types/graphql';
import { getQuestions } from '~/modules/getQuestions/services';

export const resolvers: Resolvers = {
  Query: {
    questions: async (_root, { input }) => {
      return await getQuestions(input);
    },
  },
};
