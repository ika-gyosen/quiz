import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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
          {dummyQuizData.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.serial_number}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.difficulty}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.category}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.question}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.answer}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.pronunciation}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.description}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
