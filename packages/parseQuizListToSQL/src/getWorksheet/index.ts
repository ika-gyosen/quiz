import { importBook } from '../importBook';

type Input = {
  path: string;
  sheetNumber: number;
};

export const getWorksheet = async ({ path, sheetNumber }: Input) => {
  const workbook = await importBook(path);

  if (!workbook) {
    throw Error(`workbook path:${path} が読み込めません`);
  }

  // 単語情報が記載されているワークシートを取得
  const worksheet = workbook.worksheets[sheetNumber];

  return worksheet;
};
