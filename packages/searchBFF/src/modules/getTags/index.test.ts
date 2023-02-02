import { getSdk } from '~/modules/getTags/getTags.generated';
import { hasuraClient } from '~/api/graphql';

describe('tag', () => {
  it('tag 一覧取得', async () => {
    const { getTags } = getSdk(hasuraClient);
    const res = await getTags();

    console.log(res);
  });

  it('試しにクイズ全問取得', async () => {
    const { testGetQuiz } = getSdk(hasuraClient);
    const res = await testGetQuiz();

    console.log(res);
  });
});
