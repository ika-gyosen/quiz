import { AddQuestionInput, AddQuestionResponse } from '~/types/graphql';
import { getSdk } from '~/modules/addQuestion/addQuestion.generated';
import { hasuraClient } from '~/api/graphql';

export const addQuestion = async (
  input: AddQuestionInput,
): Promise<AddQuestionResponse> => {
  const {
    question,
    answer,
    pronunciation,
    description,
    difficulty,
    categoryId,
    userId,
    author,
    tagIds,
  } = input;
  const { addQuestion, addQuestionTag } = getSdk(hasuraClient);

  const data = await addQuestion({
    question,
    answer,
    pronunciation,
    description,
    difficulty,
    categoryId,
    userId,
    author,
  });

  // 登録したクイズのquestionIdを取得する
  const questionId = data.insert_quiz_questions?.returning[0].id;

  // questionIdが得られなかった場合は失敗とする
  if (!questionId) {
    return {
      succeeded: false,
    };
  }

  // タグが設定されていない場合はこれで終了
  if (tagIds?.length === 0) {
    return {
      succeeded: true,
    };
  }

  // questionIdとtagIdのセットをtags_to_questionsテーブルに追加する
  tagIds?.forEach((tagId) =>
    addQuestionTag({
      questionId,
      tagId,
    }),
  );

  return {
    succeeded: true,
  };
};
