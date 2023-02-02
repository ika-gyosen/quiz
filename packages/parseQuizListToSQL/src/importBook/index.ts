import ExcelJS from 'exceljs';

export const importBook = async (path: string) => {
  const workbook = new ExcelJS.Workbook();
  const filename = path;
  return await workbook.xlsx.readFile(filename);
};
