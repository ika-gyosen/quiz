import { Resolvers } from '~/types/graphql';
import { addTag } from '~/modules/addTag/services';

export const resolvers: Resolvers = {
  Mutation: {
    addTag: async (_root, { input }) => {
      return await addTag(input);
    },
  },
};
