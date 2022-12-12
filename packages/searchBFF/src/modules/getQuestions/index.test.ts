import { getSdk } from '~/modules/getQuestions/getQuestions.generated';
import { hasuraClient } from '~/api/graphql';

describe('getQuestions', () => {
  it('getSdkの実行', async () => {
    const { getQuestions } = getSdk(hasuraClient);
    const res = await getQuestions({
      difficulties: [1, 2, 3],
      categoryIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
      containWord: null,
      notContainWord: null,
    });

    console.log(res);
  });
});
