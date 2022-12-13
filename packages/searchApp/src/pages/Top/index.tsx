import { css } from '@emotion/css';
import { QuizSearchConditions } from '~/pages/Top/QuizSearchConditions';
import { QuizSearchResultList } from '~/pages/Top/QuizSearchResultList';
import { useSearch } from '~/pages/Top/hooks/useSearch';

export const Top = () => {
  const {
    difficulty,
    onChangeDifficulty,
    category,
    onChangeCategory,
    containWord,
    onChangeContainWord,
    notContainWord,
    onChangeNotContainWord,
    questionsNumber,
    onChangeQuestionsNumber,
    questions,
    loading,
    error,
  } = useSearch();

  return (
    <div className={wrapper}>
      <QuizSearchConditions
        difficulty={difficulty}
        onChangeDifficulty={onChangeDifficulty}
        category={category}
        onChangeCategory={onChangeCategory}
        containWord={containWord}
        onChangeContainWord={onChangeContainWord}
        notContainWord={notContainWord}
        onChangeNotContainWord={onChangeNotContainWord}
        questionsNumber={questionsNumber}
        onChangeQuestionsNumber={onChangeQuestionsNumber}
      />
      <QuizSearchResultList
        questions={questions}
        loading={loading}
        error={error}
      />
    </div>
  );
};

const wrapper = css`
  display: flex;
  flex-direction: column;
`;
