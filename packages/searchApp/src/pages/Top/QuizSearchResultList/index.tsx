import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSearch } from '~/pages/hooks/useSearch';

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

export const QuizSearchResultList = () => {
  const { questions, loading, error } = useSearch();

  if (loading) {
    return <div>読み込み中です</div>;
  }

  if (error) {
    return <div>エラーが発生しました</div>;
  }

  if (typeof questions === 'undefined' || questions.length === 0) {
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
          {questions.map((question) => (
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
