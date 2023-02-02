import { Option } from '~/components/Select';

export const difficultyOptions: Option<number>[] = [
  { label: '1', value: 1 },
  { label: '2', value: 2 },
  { label: '3', value: 3 },
  { label: '4', value: 4 },
  { label: '5', value: 5 },
];

export const categoryOptions: Option<number>[] = [
  { label: '歴史', value: 1 },
  { label: '文学', value: 2 },
  { label: '芸術', value: 3 },
  { label: '文化', value: 4 },
  { label: '言葉', value: 5 },
  { label: '地理', value: 6 },
  { label: '政治経済', value: 7 },
  { label: '公民', value: 8 },
  { label: '物理・化学', value: 9 },
  { label: '天文・気象', value: 10 },
  { label: '生物・医学', value: 11 },
  { label: '数学・情報', value: 12 },
  { label: 'スポーツ', value: 13 },
  { label: 'ライフスタイル', value: 14 },
  { label: '芸能', value: 15 },
  { label: '古典芸能', value: 16 },
  { label: 'ホビー・ゲーム', value: 17 },
  { label: '漫画・アニメ', value: 18 },
  { label: 'ノンセクション', value: 19 },
];

export const questionsNumberOptions: Option<number>[] = [
  { label: '10', value: 10 },
  { label: '30', value: 30 },
  { label: '50', value: 50 },
  { label: '100', value: 100 },
  { label: '200', value: 200 },
];
