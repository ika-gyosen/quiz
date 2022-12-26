import { AddQuestionInput, AddQuestionResult } from '~/types/graphql';
import { getSdk } from '~/modules/addQuestion/addQuestion.generated';
import { hasuraClient } from '~/api/graphql';

export const addQuestion = async (
  input: AddQuestionInput,
): Promise<AddQuestionResult> => {
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

  // questionIdが得られなかった場合はエラーを返す
  if (!questionId) {
    return {
      __typename: 'AddQuestionFailResponse',
      message: 'エラーが発生しました。',
    };
  }

  // タグが設定されていない場合はタグの追加を行わない
  if (!tagIds || tagIds?.length === 0) {
    return {
      __typename: 'AddQuestionSuccessResponse',
      id: questionId,
      succeeded: true, // TODO 生成された型定義にsucceededが含まれているので記述しているが、本来は存在しないはずなので、型定義を修正したのち削除する
    };
  }

  // questionIdとtagIdのセットをtags_to_questionsテーブルに追加する
  Promise.all(
    tagIds.map(async (tagId) => await addQuestionTag({ questionId, tagId })),
  );

  return {
    __typename: 'AddQuestionSuccessResponse',
    id: questionId,
    succeeded: true, // TODO 生成された型定義にsucceededが含まれているので記述しているが、本来は存在しないはずなので、型定義を修正したのち削除する
  };
};
