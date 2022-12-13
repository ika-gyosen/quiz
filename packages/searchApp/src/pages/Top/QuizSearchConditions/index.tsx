// import Select from '@mui/material/Select';
import { css } from '@emotion/css';
import { useState, useCallback } from 'react';
import { Button } from '~/components/Button';
import { Option, Select } from '~/components/Select';
import { TextField } from '~/components/TextField';

export const QuizSearchConditions = () => {
  const [difficulty, setDifficulty] = useState(0);
  const handleChangeDifficulty = useCallback(
    (item: number) => setDifficulty(item),
    [],
  );
  const difficultyOptions: Option<number>[] = [
    { label: '指定なし', value: 0 },
    { label: '1', value: 1 },
    { label: '2', value: 2 },
    { label: '3', value: 3 },
  ];

  const [category, setCategory] = useState(0);
  const handleChangeCategory = useCallback(
    (item: number) => setCategory(item),
    [],
  );
  const categoryOptions: Option<number>[] = [
    { label: '指定なし', value: 0 },
    { label: '理系', value: 1 },
    { label: '文学', value: 2 },
    { label: '言葉', value: 3 },
    { label: '日本史', value: 4 },
    { label: '世界史', value: 5 },
    { label: '地理', value: 6 },
    { label: '公民', value: 7 },
    { label: '芸術', value: 8 },
    { label: '漫画・アニメ・ゲーム', value: 9 },
    { label: '生活', value: 10 },
    { label: 'スポーツ', value: 11 },
    { label: '芸能', value: 12 },
    { label: 'ノンセクション', value: 13 },
  ];

  const [containWord, setContainWord] = useState('');
  const handleChangeContainWord = useCallback(
    (item: string) => setContainWord(item),
    [],
  );

  const [notContainWord, setNotContainWord] = useState('');
  const handleChangeNotContainWord = useCallback(
    (item: string) => setNotContainWord(item),
    [],
  );

  const [questionsNumber, setQuestionsNumber] = useState(30);
  const handleChangeQuestionsNumber = useCallback(
    (item: number) => setQuestionsNumber(item),
    [],
  );
  const questionsNumberOptions: Option<number>[] = [
    { label: '10', value: 10 },
    { label: '30', value: 30 },
    { label: '50', value: 50 },
    { label: '100', value: 100 },
    { label: '200', value: 200 },
  ];

  return (
    <div className={searchInputWrapper}>
      <div className={searchInputRowStype}>
        <div>
          難易度:
          <Select
            value={difficulty}
            options={difficultyOptions}
            onChange={handleChangeDifficulty}
          />
        </div>
        <div>
          ジャンル:
          <Select
            value={category}
            options={categoryOptions}
            onChange={handleChangeCategory}
          />
        </div>
      </div>
      <div className={searchInputRowStype}>
        <div>
          問題文：
          <TextField value={containWord} onChange={handleChangeContainWord} />
          を含む
        </div>
        <div>
          <TextField
            value={notContainWord}
            onChange={handleChangeNotContainWord}
          />
          を含まない
        </div>
      </div>
      <div className={searchInputRowStype}>
        <div>
          表示する問題数:
          <Select
            value={questionsNumber}
            options={questionsNumberOptions}
            onChange={handleChangeQuestionsNumber}
          />
        </div>
        <div>
          <Button
            label="検索を実行"
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
