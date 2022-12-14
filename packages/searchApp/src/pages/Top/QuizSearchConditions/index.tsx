import { css } from '@emotion/css';
import { Select, Option } from '~/components/Select';
import { TextField } from '~/components/TextField';
import { TagsInput } from '~/components/TagsInput';
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
  targetTags: Option<string>[];
  notTargetTags: Option<string>[];
  suggestionTags: Option<string>[];
  onChangeDifficulties: (item: Option<number>[]) => void;
  onChangeCategories: (item: Option<number>[]) => void;
  onChangeContainWord: (item: string) => void;
  onChangeNotContainWord: (item: string) => void;
  onChangeQuestionsNumber: (item: number) => void;
  onChangeTargetTags: (items: Option<string>[]) => void;
  onChangeNotTargetTags: (items: Option<string>[]) => void;
};

export const QuizSearchConditions = (props: Props) => {
  const {
    difficulties,
    categories,
    targetTags,
    notTargetTags,
    suggestionTags,
    containWord,
    notContainWord,
    questionsNumber,
    onChangeDifficulties,
    onChangeCategories,
    onChangeContainWord,
    onChangeNotContainWord,
    onChangeQuestionsNumber,
    onChangeTargetTags,
    onChangeNotTargetTags,
  } = props;

  return (
    <div className={searchInputWrapper}>
      <div className={searchInputRowStype}>
        難易度:
        <TagsInput
          values={difficulties}
          options={difficultyOptions}
          onChange={onChangeDifficulties}
        />
      </div>
      <div className={searchInputRowStype}>
        ジャンル:
        <TagsInput
          values={categories}
          options={categoryOptions}
          onChange={onChangeCategories}
        />
      </div>
      <div className={searchInputRowStype}>
        タグ:
        <TagsInput
          values={targetTags}
          options={suggestionTags}
          onChange={onChangeTargetTags}
        />
      </div>
      <div className={searchInputRowStype}>
        除外するタグ:
        <TagsInput
          values={notTargetTags}
          options={suggestionTags}
          onChange={onChangeNotTargetTags}
        />
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
