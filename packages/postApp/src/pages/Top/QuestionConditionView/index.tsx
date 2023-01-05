import { css } from '@emotion/css';
import { FC } from 'react';
import { Button } from '~/components/Button';
import { FormControlLabel } from '~/components/FormControlLabel';
import { Select, Option } from '~/components/Select';
import { TagsInput } from '~/components/TagsInput';
import { TextField } from '~/components/TextField';
import { categoryOptions, difficultyOptions } from '~/constants/options';

type Props = {
  question: string;
  answer: string;
  pronunciation: string;
  description: string;
  difficulty: Option<number> | undefined;
  category: Option<number> | undefined;
  tags: Option<string>[];
  author: string;
  inputValid: boolean;
  suggestionTags: Option<string>[];
  onChangeQuestion: (item: string) => void;
  onChangeAnswer: (item: string) => void;
  onChangePronunciation: (item: string) => void;
  onChangeDescription: (item: string) => void;
  onChangeDifficulty: (item: Option<number>) => void;
  onChangeCategory: (item: Option<number>) => void;
  onChangeTags: (items: Option<string>[]) => void;
  onChangeAuthor: (item: string) => void;
  onClickConfirmation: () => void;
};
export const QuestionConditionView: FC<Props> = ({
  question,
  answer,
  pronunciation,
  description,
  difficulty,
  category,
  tags,
  author,
  inputValid,
  suggestionTags,
  onChangeQuestion,
  onChangeAnswer,
  onChangePronunciation,
  onChangeDescription,
  onChangeDifficulty,
  onChangeCategory,
  onChangeTags,
  onChangeAuthor,
  onClickConfirmation,
}) => {
  return (
    <div className={wrapper}>
      <FormControlLabel
        label="カテゴリ"
        required
        control={
          <Select
            value={category?.value}
            options={categoryOptions}
            onChange={onChangeCategory}
          />
        }
      />
      <FormControlLabel
        label="問題"
        required
        control={<TextField value={question} onChange={onChangeQuestion} />}
      />
      <FormControlLabel
        label="解答"
        required
        control={<TextField value={answer} onChange={onChangeAnswer} />}
      />
      <FormControlLabel
        label="よみがな"
        control={
          <TextField value={pronunciation} onChange={onChangePronunciation} />
        }
      />
      <FormControlLabel
        label="備考・別解"
        control={
          <TextField value={description} onChange={onChangeDescription} />
        }
      />
      <FormControlLabel
        label="難易度"
        required
        control={
          <Select
            value={difficulty?.value}
            options={difficultyOptions}
            onChange={onChangeDifficulty}
          />
        }
      />
      <FormControlLabel
        label="タグ"
        control={
          <TagsInput
            values={tags}
            options={suggestionTags}
            onChange={onChangeTags}
          />
        }
      />
      <FormControlLabel
        label="作問者・出典"
        control={<TextField value={author} onChange={onChangeAuthor} />}
      />
      <div className={fontStyle}>ここには注釈が入ります。</div>
      <div>
        <Button
          label="入力内容を確認する"
          disabled={!inputValid}
          onClick={onClickConfirmation}
        />
      </div>
    </div>
  );
};

const wrapper = css`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const fontStyle = css`
  font-size: 12px;
  color: #585656;
`;
