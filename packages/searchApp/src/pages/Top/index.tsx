import { css } from '@emotion/css';
import { QuizSearchConditions } from '~/pages/Top/QuizSearchConditions';
import { QuizSearchResultList } from '~/pages/Top/QuizSearchResultList';
import { useSearch } from '~/pages/Top/hooks/useSearch';
import { useTags } from '~/pages/Top/hooks/useTags';

export const Top = () => {
  const {
    difficulties,
    categories,
    targetTags,
    notTargetTags,
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
    onChangeTargetTags,
    onChangeNotTargetTags,
  } = useSearch();

  const { suggestionTags } = useTags();

  return (
    <div className={wrapper}>
      <QuizSearchConditions
        difficulties={difficulties}
        categories={categories}
        targetTags={targetTags}
        notTargetTags={notTargetTags}
        suggestionTags={suggestionTags}
        containWord={containWord}
        notContainWord={notContainWord}
        questionsNumber={questionsNumber}
        onChangeDifficulties={onChangeDifficulties}
        onChangeCategories={onChangeCategories}
        onChangeContainWord={onChangeContainWord}
        onChangeNotContainWord={onChangeNotContainWord}
        onChangeQuestionsNumber={onChangeQuestionsNumber}
        onChangeTargetTags={onChangeTargetTags}
        onChangeNotTargetTags={onChangeNotTargetTags}
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
