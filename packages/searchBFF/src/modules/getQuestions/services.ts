import { GetQuestionsInput, Question } from '~/types/graphql';
import { hasuraClient } from '~/api/graphql';
import { getSdk } from '~/modules/getQuestions/getQuestions.generated';

export const getQuestions = async (
  input: GetQuestionsInput,
): Promise<Question[]> => {
  const { getQuestions } = getSdk(hasuraClient);
  const res = await getQuestions({
    difficulties: input.difficulties,
    categoryIds: input.categoryIds,
    containWord: input.containWord,
    notContainWord: input.notContainWord,
  });

  return res.quiz_questions.map(
    ({
      id,
      serial_number,
      difficulty,
      categories_to_questions,
      question,
      answers_to_questions,
      tags_to_questions_to_questions,
      users_to_questions,
      author,
    }) => {
      return {
        questionId: id,
        serialNumber: serial_number,
        difficulty: difficulty ?? '',
        category: categories_to_questions?.category ?? '',
        question,
        answers: answers_to_questions.map(
          ({ answer, pronunciation, description }) => ({
            answer,
            pronunciation: pronunciation ?? '',
            description: description ?? '',
          }),
        ),
        tags: tags_to_questions_to_questions.map(
          (o) => o.tags_to_questions_to_tags?.tag,
        ),
        userName: users_to_questions.user_name,
        author: author ?? '',
      };
    },
  );
};
