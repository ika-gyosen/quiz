import { Resolvers } from '~/types/graphql';
import { addQuestion } from '~/modules/addQuestion/services';

export const resolvers: Resolvers = {
  AddQuestionResult: {
    __resolveType: ({ __typename }) => {
      if (__typename === 'AddQuestionSuccessResponse') {
        return 'AddQuestionSuccessResponse';
      }
      if (__typename === 'AddQuestionFailResponse') {
        return 'AddQuestionFailResponse';
      }
    },
  },
  Mutation: {
    addQuestion: async (_root, { input }) => {
      return await addQuestion(input);
    },
  },
};
