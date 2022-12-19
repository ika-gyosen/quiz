import { PostQuestionInput, PostQuestionResponse } from '~/types/graphql';
import { getSdk } from '~/modules/postQuestion/postQuestion.generated';
import { hasuraClient } from '~/api/graphql';

export const postQuestion = async (
  input: PostQuestionInput,
): Promise<PostQuestionResponse> => {
  const {
    question,
    answer,
    pronunciation,
    description,
    difficulty,
    categoryId,
    userId,
    author,
  } = input;
  const { postQuestion } = getSdk(hasuraClient);

  await postQuestion({
    question,
    answer,
    pronunciation,
    description,
    difficulty,
    categoryId,
    userId,
    author,
  });

  return {
    succeeded: true,
  };
};
