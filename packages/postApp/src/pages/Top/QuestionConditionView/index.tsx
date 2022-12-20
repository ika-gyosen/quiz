import { css } from '@emotion/css';
import { FC } from 'react';
import { Button } from '~/components/Button';
import { FormControlLabel } from '~/components/FormControlLabel';
import { Select, Option } from '~/components/Select';
import { TagsInput } from '~/components/TagsInput';
import { TextField } from '~/components/TextField';

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
  // inputValid,
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
            options={[]}
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
            options={[]}
            onChange={onChangeDifficulty}
          />
        }
      />
      <FormControlLabel
        label="タグ"
        required
        control={
          <TagsInput
            values={tags}
            options={[] as Option<string>[]}
            onChange={onChangeTags}
          />
        }
      />
      <FormControlLabel
        label="作問者・出典"
        required
        control={<TextField value={author} onChange={onChangeAuthor} />}
      />
      <div>ここには注釈が入ります。</div>
      <div>
        <Button
          label="問題を投稿する"
          // disabled={inputValid}
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
