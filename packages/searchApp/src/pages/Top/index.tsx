import { css } from '@emotion/css';
import { QuizSearchConditions } from '~/pages/Top/QuizSearchConditions';
import { QuizSearchResultList } from '~/pages/Top/QuizSearchResultList';

export const Top = () => {
  return (
    <div className={wrapper}>
      <QuizSearchConditions />
      <QuizSearchResultList />
    </div>
  );
};

const wrapper = css`
  display: flex;
  flex-direction: column;
`;
