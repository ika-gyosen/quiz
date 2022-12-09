import { useState } from 'react';
import { TextField } from '~/components/TextField';
import { Select, Option } from '~/components/Select';
import { Button } from '~/components/Button';

const App = () => {
  const [text, setText] = useState('');
  const [category, setCategory] = useState(0);

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

  const handleClick = () => {
    alert(`テキストフィールド: ${text}\nプルダウン: ${category}`);
  };

  return (
    <div>
      <div>テキストフィールド</div>
      <TextField value={text} onChange={setText} />
      {text}
      <div>プルダウン</div>
      <Select
        value={category}
        options={categoryOptions}
        onChange={setCategory}
      />
      {category}
      <Button text="検索を実行する" onClick={handleClick} />
    </div>
  );
};

export default App;
