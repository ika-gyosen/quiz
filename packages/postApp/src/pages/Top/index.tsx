import { css } from '@emotion/css';
import { useTopPage } from '~/pages/Top/hooks';
import { useTags } from '~/pages/Top/hooks/useTags';
import { QuestionConditionView } from '~/pages/Top/QuestionConditionView';
import { QuestionConfirmationView } from '~/pages/Top/QuestionConfirmationView';

export const Top = () => {
  const {
    question,
    answer,
    pronunciation,
    description,
    difficulty,
    category,
    tags,
    author,
    inputValid,
    isConfirmation,
    onChangeQuestion,
    onChangeAnswer,
    onChangePronunciation,
    onChangeDescription,
    onChangeDifficulty,
    onChangeCategory,
    onChangeTags,
    onChangeAuthor,
    onClickConfirmation,
    onClickReturnPageButton,
    onSubmit,
  } = useTopPage();

  const { suggestionTags } = useTags();

  return (
    <div className={wrapper}>
      {!isConfirmation ? (
        <QuestionConditionView
          question={question}
          answer={answer}
          pronunciation={pronunciation}
          description={description}
          difficulty={difficulty}
          category={category}
          tags={tags}
          author={author}
          suggestionTags={suggestionTags}
          onChangeQuestion={onChangeQuestion}
          onChangeAnswer={onChangeAnswer}
          onChangePronunciation={onChangePronunciation}
          onChangeDescription={onChangeDescription}
          onChangeDifficulty={onChangeDifficulty}
          onChangeCategory={onChangeCategory}
          onChangeTags={onChangeTags}
          onChangeAuthor={onChangeAuthor}
          inputValid={inputValid}
          onClickConfirmation={onClickConfirmation}
        />
      ) : (
        <QuestionConfirmationView
          question={question}
          answer={answer}
          pronunciation={pronunciation}
          description={description}
          difficulty={difficulty}
          category={category}
          tags={tags}
          author={author}
          onClickReturnPageButton={onClickReturnPageButton}
          onSubmit={onSubmit}
        />
      )}
    </div>
  );
};

const wrapper = css`
  display: flex;
  flex-direction: column;
`;
