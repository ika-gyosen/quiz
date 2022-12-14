import { css } from '@emotion/css';
import { QuizSearchConditions } from '~/pages/Top/QuizSearchConditions';
import { QuizSearchResultList } from '~/pages/Top/QuizSearchResultList';
import { useSearch } from '~/pages/Top/hooks/useSearch';

export const Top = () => {
  const {
    difficulties,
    categories,
    containWord,
    notContainWord,
    questionsNumber,
    questions,
    loading,
    error,
    onChangeDifficulties,
    onChangeCategories,
    onChangeContainWord,
    onChangeNotContainWord,
    onChangeQuestionsNumber,
  } = useSearch();

  return (
    <div className={wrapper}>
      <QuizSearchConditions
        difficulties={difficulties}
        categories={categories}
        containWord={containWord}
        notContainWord={notContainWord}
        questionsNumber={questionsNumber}
        onChangeDifficulties={onChangeDifficulties}
        onChangeCategories={onChangeCategories}
        onChangeContainWord={onChangeContainWord}
        onChangeNotContainWord={onChangeNotContainWord}
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
