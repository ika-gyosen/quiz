import { css } from '@emotion/css';
import { Select, Option } from '~/components/Select';
import { TextField } from '~/components/TextField';
import { MultiSelect } from '~/components/MultiSelect';
import {
  difficultyOptions,
  categoryOptions,
  questionsNumberOptions,
} from '~/constants/options';

type Props = {
  difficulties: Option<number>[];
  categories: Option<number>[];
  containWord: string;
  notContainWord: string;
  questionsNumber: number;
  onChangeDifficulties: (item: Option<number>[]) => void;
  onChangeCategories: (item: Option<number>[]) => void;
  onChangeContainWord: (item: string) => void;
  onChangeNotContainWord: (item: string) => void;
  onChangeQuestionsNumber: (item: number) => void;
};

export const QuizSearchConditions = (props: Props) => {
  const {
    containWord,
    notContainWord,
    questionsNumber,
    onChangeDifficulties,
    onChangeCategories,
    onChangeContainWord,
    onChangeNotContainWord,
    onChangeQuestionsNumber,
  } = props;

  return (
    <div className={searchInputWrapper}>
      <div className={searchInputRowStype}>
        難易度:
        <MultiSelect
          options={difficultyOptions}
          onChange={onChangeDifficulties}
        />
      </div>
      <div className={searchInputRowStype}>
        ジャンル:
        <MultiSelect options={categoryOptions} onChange={onChangeCategories} />
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
        表示する問題数:
        <Select
          value={questionsNumber}
          options={questionsNumberOptions}
          onChange={onChangeQuestionsNumber}
        />
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
  align-items: center;
  gap: 1rem;
`;
