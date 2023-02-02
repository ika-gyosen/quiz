import { Resolvers } from '~/types/graphql';
import { getTags } from '~/modules/getTags/services';

export const resolvers: Resolvers = {
  Query: {
    getTags: async (_root, _args) => {
      const res = await getTags();
      return res;
    },
  },
};
