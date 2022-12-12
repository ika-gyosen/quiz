import { Test } from '~/Test';

export type QuizSearchResultItem = {
  id: string;
  serial_number: number;
  difficulty: string;
  category: string;
  question: string;
  answer: string;
  pronunciation: string;
  description: string;
};

const dummyQuizData: QuizSearchResultItem[] = [
  {
    id: '1',
    serial_number: 1,
    difficulty: '普通',
    category: '文学',
    question: '『坊っちゃん』の作者は？',
    answer: '夏目漱石',
    pronunciation: 'なつめそうせき',
    description: '夏目金之助',
  },
  {
    id: '2',
    serial_number: 2,
    difficulty: '普通',
    category: '地理',
    question: 'トルコの首都は？',
    answer: 'アンカラ',
    pronunciation: 'あんから',
    description: '',
  },
];
export const QuizSearchResultList = () => {
  // return (
  //   <table>
  //     <tr>
  //       <th>No.</th>
  //       <th>難易度</th>
  //       <th>ジャンル</th>
  //       <th>問題</th>
  //       <th>解答</th>
  //       <th>読み方</th>
  //       <th>別解・備考</th>
  //     </tr>
  //     {dummyQuizData.map((question) => {
  //       return (
  //         <tr key={question.id}>
  //           <td>{question.serial_number}</td>
  //           <td>{question.difficulty}</td>
  //           <td>{question.category}</td>
  //           <td>{question.question}</td>
  //           <td>{question.answer}</td>
  //           <td>{question.pronunciation}</td>
  //           <td>{question.description}</td>
  //         </tr>
  //       );
  //     })}
  //   </table>
  // );
  return <Test />;
};
