import { Option } from '~/components/Select';

export const difficultyOptions: Option<number>[] = [
  { label: '1', value: 1 },
  { label: '2', value: 2 },
  { label: '3', value: 3 },
  { label: '4', value: 4 },
  { label: '5', value: 5 },
];

export const categoryOptions: Option<number>[] = [
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

export const questionsNumberOptions: Option<number>[] = [
  { label: '10', value: 10 },
  { label: '30', value: 30 },
  { label: '50', value: 50 },
  { label: '100', value: 100 },
  { label: '200', value: 200 },
];
