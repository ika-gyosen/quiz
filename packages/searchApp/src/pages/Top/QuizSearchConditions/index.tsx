import { css } from '@emotion/css';
// import { Button } from '~/components/Button';
import { Select } from '~/components/Select';
import { TextField } from '~/components/TextField';
import { useSearch } from '~/pages/hooks/useSearch';
import {
  difficultyOptions,
  categoryOptions,
  questionsNumberOptions,
} from '~/constants/options';

export const QuizSearchConditions = () => {
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
    // onClickSearchButton,
  } = useSearch();

  return (
    <div className={searchInputWrapper}>
      <div className={searchInputRowStype}>
        <div>
          難易度:
          <Select
            value={difficulty}
            options={difficultyOptions}
            onChange={onChangeDifficulty}
          />
        </div>
        <div>
          ジャンル:
          <Select
            value={category}
            options={categoryOptions}
            onChange={onChangeCategory}
          />
        </div>
      </div>
      <div className={searchInputRowStype}>
        <div>
          問題文：
          <TextField value={containWord} onChange={onChangeContainWord} />
          を含む
        </div>
        <div>
          <TextField value={notContainWord} onChange={onChangeNotContainWord} />
          を含まない
        </div>
      </div>
      <div className={searchInputRowStype}>
        <div>
          表示する問題数:
          <Select
            value={questionsNumber}
            options={questionsNumberOptions}
            onChange={onChangeQuestionsNumber}
          />
        </div>
        {/* <div>
          <Button label="検索を実行" onClick={() => onClickSearchButton()} />
        </div> */}
      </div>
    </div>
  );
};

const searchInputWrapper = css`
  width: 600px;
  display: grid;
  grid-template:
    1fr
    1fr
    1fr
    1fr / 1fr;
`;

const searchInputRowStype = css`
  padding: 0.5rem 0;
  display: flex;
  gap: 1rem;
`;
