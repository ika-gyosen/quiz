import Select from '@mui/material/Select';
import { css } from '@emotion/css';
import { MenuItem } from '@mui/material';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import { Button } from '~/components/Button';
import { Option } from '~/components/Select';
const options: Option<number>[] = [{ value: 1, label: 'test' }];
export const QuizSearchConditions = () => {
  return (
    <div className={searchInputWrapper}>
      <div className={searchInputRowStype}>
        <div>
          難易度:
          <FormControl size="small">
            <Select
              onChange={() => {
                return;
              }}>
              {options.map(({ label, value }) => (
                <MenuItem key={label} value={value}>
                  {label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div>
          ジャンル:
          <FormControl size="small">
            <Select
              onChange={() => {
                return;
              }}>
              {options.map(({ label, value }) => (
                <MenuItem key={label} value={value}>
                  {label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </div>
      <div className={searchInputRowStype}>
        <div>
          タグ：
          <TextField
            variant="standard"
            onChange={() => {
              return;
            }}
          />
          を含む
        </div>
        <div>
          <TextField
            variant="standard"
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
            variant="standard"
            onChange={() => {
              return;
            }}
          />
          を含む
        </div>
        <div>
          <TextField
            variant="standard"
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
          <FormControl size="small">
            <Select
              onChange={() => {
                return;
              }}>
              {options.map(({ label, value }) => (
                <MenuItem key={label} value={value}>
                  {label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
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
