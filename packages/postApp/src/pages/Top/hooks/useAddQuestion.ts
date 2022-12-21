import { useAddQuestionMutation } from '~/pages/Top/hooks/addQuestion.generated';

export const useAddQuestion = () => {
  const [startAddQuestion, { loading: startAddQuestionLoading }] =
    useAddQuestionMutation();

  return {
    startAddQuestion,
    startAddQuestionLoading,
  };
};
