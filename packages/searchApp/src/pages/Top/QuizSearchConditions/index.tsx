import { css } from '@emotion/css';
import { Button } from '~/components/Button';
import { Select, Option } from '~/components/Select';
import { TextField } from '~/components/TextField';

const options: Option<number>[] = [{ value: 1, label: 'test' }];
export const QuizSearchConditions = () => {
  return (
    <div className={searchInputWrapper}>
      <div className={searchInputRowStype}>
        <div>
          難易度:
          <Select
            value={1}
            options={options}
            onChange={() => {
              return;
            }}
          />
        </div>
        <div>
          難易度:
          <Select
            value={1}
            options={options}
            onChange={() => {
              return;
            }}
          />
        </div>
      </div>
      <div className={searchInputRowStype}>
        <div>
          タグ：
          <TextField
            value={''}
            onChange={() => {
              return;
            }}
          />
          を含む
        </div>
        <div>
          <TextField
            value={''}
            onChange={() => {
              return;
            }}
          />
          を含まない
        </div>
      </div>
      <div className={searchInputRowStype}>
        <div>
          問題文：
          <TextField
            value={''}
            onChange={() => {
              return;
            }}
          />
          を含む
        </div>
        <div>
          <TextField
            value={''}
            onChange={() => {
              return;
            }}
          />
          を含まない
        </div>
      </div>
      <div className={searchInputRowStype}>
        <div>
          表示する問題数:
          <Select
            value={1}
            options={options}
            onChange={() => {
              return;
            }}
          />
        </div>
        <div>
          <Button
            text="検索を実行"
            onClick={() => {
              return;
            }}
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
