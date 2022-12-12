import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useGetQuestionsQuery } from '~/getQuestions.generated';

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

// const dummyQuizData: QuizSearchResultItem[] = [
//   {
//     id: '1',
//     serial_number: 1,
//     difficulty: '普通',
//     category: '文学',
//     question: '『坊っちゃん』の作者は？',
//     answer: '夏目漱石',
//     pronunciation: 'なつめそうせき',
//     description: '夏目金之助',
//   },
//   {
//     id: '2',
//     serial_number: 2,
//     difficulty: '普通',
//     category: '地理',
//     question: 'トルコの首都は？',
//     answer: 'アンカラ',
//     pronunciation: 'あんから',
//     description: '',
//   },
// ];

export const QuizSearchResultList = () => {
  const { data, loading, error } = useGetQuestionsQuery({
    variables: {
      difficulties: [1, 2],
      categoryIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
    },
  });

  if (loading) {
    return <div>読み込み中です</div>;
  }

  if (error) {
    return <div>エラーが発生しました</div>;
  }

  if (!data) {
    return (
      <div>
        お探しの条件に当てはまる問題はありませんでした。検索条件を変えて再度検索してください。
      </div>
    );
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>No.</TableCell>
            <TableCell>難易度</TableCell>
            <TableCell>ジャンル</TableCell>
            <TableCell>問題</TableCell>
            <TableCell>回答</TableCell>
            <TableCell>読み方</TableCell>
            <TableCell>別解・備考</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.questions.map((question) => (
            <TableRow key={question?.questionId}>
              <TableCell component="th" scope="row">
                {question?.serialNumber}
              </TableCell>
              <TableCell component="th" scope="row">
                {question?.difficulty ?? ''}
              </TableCell>
              <TableCell component="th" scope="row">
                {question?.category ?? ''}
              </TableCell>
              <TableCell component="th" scope="row">
                {question?.question}
              </TableCell>
              <TableCell component="th" scope="row">
                {question?.answers[0].answer}
              </TableCell>
              <TableCell component="th" scope="row">
                {question?.answers[0].pronunciation ?? ''}
              </TableCell>
              <TableCell component="th" scope="row">
                {question?.answers[0].description ?? ''}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
