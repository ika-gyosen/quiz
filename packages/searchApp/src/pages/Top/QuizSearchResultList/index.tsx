import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import { css } from '@emotion/css';
import { ApolloError } from '@apollo/client';
import { Question } from '~/pages/Top/hooks/useSearch';

type Props = {
  questions: Question[];
  loading: boolean;
  error: ApolloError | undefined;
};

export const QuizSearchResultList = (props: Props) => {
  const { questions, loading, error } = props;

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
            <TableCell className={difficultyTableHeadTextStyle}>
              難易度
            </TableCell>
            <TableCell>ジャンル</TableCell>
            <TableCell>タグ</TableCell>
            <TableCell>問題</TableCell>
            <TableCell>解答</TableCell>
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
              <TableCell component="th" scope="row"></TableCell>
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

const difficultyTableHeadTextStyle = css`
  white-space: nowrap;
`;
