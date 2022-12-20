import { css } from '@emotion/css';
import { useTopPage } from '~/pages/Top/hooks';
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
  } = useTopPage();
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
        />
      )}
    </div>
  );
};

const wrapper = css`
  display: flex;
  flex-direction: column;
`;
