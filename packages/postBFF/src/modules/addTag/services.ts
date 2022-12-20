import { AddTagInput, AddTagResponse } from '~/types/graphql';
import { getSdk } from '~/modules/addTag/addTag.generated';
import { hasuraClient } from '~/api/graphql';

export const addTag = async (input: AddTagInput): Promise<AddTagResponse> => {
  const { tag } = input;

  const { addTag } = getSdk(hasuraClient);

  const data = await addTag({ tag });

  if (!data.insert_quiz_tags) {
    return {
      succeeded: false,
    };
  }

  return {
    succeeded: true,
  };
};
