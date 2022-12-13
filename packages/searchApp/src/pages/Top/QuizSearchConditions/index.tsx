import { css } from '@emotion/css';
import { Select } from '~/components/Select';
import { TextField } from '~/components/TextField';
import {
  difficultyOptions,
  categoryOptions,
  questionsNumberOptions,
} from '~/constants/options';

type Props = {
  difficulty: number;
  onChangeDifficulty: (item: number) => void;
  category: number;
  onChangeCategory: (item: number) => void;
  containWord: string;
  onChangeContainWord: (item: string) => void;
  notContainWord: string;
  onChangeNotContainWord: (item: string) => void;
  questionsNumber: number;
  onChangeQuestionsNumber: (item: number) => void;
};

export const QuizSearchConditions = (props: Props) => {
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
  } = props;

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
