import { getSdk } from '~/modules/getQuestions/getQuestions.generated';
import { hasuraClient } from '~/api/graphql';

describe('getQuestions', () => {
  it('getQuestionsWithOutTagの実行', async () => {
    const { getQuestionsWithOutTag } = getSdk(hasuraClient);
    const res = await getQuestionsWithOutTag({
      difficulties: [1, 2, 3],
      categoryIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
      containWord: null,
      notContainWord: null,
    });

    console.log(res);
  });

  it('getQuestionsの実行', async () => {
    const { getQuestions } = getSdk(hasuraClient);
    const res = await getQuestions({
      difficulties: [1, 2, 3],
      categoryIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
      targetTags: ['a88c2605-e920-42b8-93a1-f781412feb56'],
      containWord: null,
      notContainWord: null,
    });

    console.log(res);
  });
});
