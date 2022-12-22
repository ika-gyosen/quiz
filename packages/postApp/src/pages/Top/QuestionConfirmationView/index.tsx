import { css } from '@emotion/css';
import { FC } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
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
  onClickReturnPageButton: () => void;
  onSubmit: () => void;
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
  onClickReturnPageButton,
  onSubmit,
}) => {
  return (
    <div className={baseWrapper}>
      <div className={fieldStyle}>
        <div className={labelStyle}>カテゴリ</div>
        <div className={userInputStyle}>{category?.label ?? ''}</div>
      </div>
      <div className={fieldStyle}>
        <div className={labelStyle}>問題</div>
        <div className={userInputStyle}>{question ?? ''}</div>
      </div>
      <div className={fieldStyle}>
        <div className={labelStyle}>解答</div>
        <div className={userInputStyle}>{answer ?? ''}</div>
      </div>
      <div className={fieldStyle}>
        <div className={labelStyle}>よみがな</div>
        <div className={userInputStyle}>{pronunciation ?? ''}</div>
      </div>
      <div className={fieldStyle}>
        <div className={labelStyle}>備考・別解</div>
        <div className={userInputStyle}>{description ?? ''}</div>
      </div>
      <div className={fieldStyle}>
        <div className={labelStyle}>難易度</div>
        <div className={userInputStyle}>{difficulty?.label ?? ''}</div>
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
        <div className={userInputStyle}>{author ?? ''}</div>
      </div>
      <div className={buttonsWrapper}>
        <Button
          label="入力内容を修正する"
          onClick={onClickReturnPageButton}
          variant="text"
          startIcon={<ArrowBackIcon />}
        />
        <Button label="問題を投稿する" onClick={onSubmit} />
      </div>
    </div>
  );
};

const baseWrapper = css``;

const fieldStyle = css`
  margin: 16px 8px;
`;

const labelStyle = css`
  font-weight: bold;
`;

const userInputStyle = css`
  font-size: 1.3rem;
`;

const buttonsWrapper = css`
  display: flex;
  flex-direction: column;
  width: 200px;
  gap: 20px;
  margin: 20px 40px;
`;
