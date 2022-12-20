import { css } from '@emotion/css';
import { FC } from 'react';
import { Button } from '~/components/Button';
import { Option } from '~/components/Select';

type Props = {
  question: string;
  answer: string;
  pronunciation: string;
  description: string;
  difficulty: Option<number> | undefined;
  category: Option<number> | undefined;
  tags: Option<string>[];
  author: string;
};
export const QuestionConfirmationView: FC<Props> = ({
  question,
  answer,
  pronunciation,
  description,
  difficulty,
  category,
  tags,
  author,
}) => {
  return (
    <div className={baseWrapper}>
      <div className={fieldStyle}>
        <div className={labelStyle}>カテゴリ</div>
        <div>{category?.label ?? ''}</div>
      </div>
      <div className={fieldStyle}>
        <div className={labelStyle}>問題</div>
        <div>{question ?? ''}</div>
      </div>
      <div className={fieldStyle}>
        <div className={labelStyle}>解答</div>
        <div>{answer ?? ''}</div>
      </div>
      <div className={fieldStyle}>
        <div className={labelStyle}>よみがな</div>
        <div>{pronunciation ?? ''}</div>
      </div>
      <div className={fieldStyle}>
        <div className={labelStyle}>備考・別解</div>
        <div>{description ?? ''}</div>
      </div>
      <div className={fieldStyle}>
        <div className={labelStyle}>難易度</div>
        <div>{difficulty?.label ?? ''}</div>
      </div>
      <div className={fieldStyle}>
        <div className={labelStyle}>タグ</div>
        <div>
          {tags.map(({ label }) => {
            return `${label} `;
          }) ?? ''}
        </div>
      </div>
      <div className={fieldStyle}>
        <div className={labelStyle}>作問者・出典</div>
        <div>{author ?? ''}</div>
      </div>

      <div>
        <Button
          label="問題を投稿する"
          onClick={() => {
            return;
          }}
        />
      </div>
    </div>
  );
};

const baseWrapper = css``;

const fieldStyle = css``;

const labelStyle = css`
  font-weight: bold;
`;
