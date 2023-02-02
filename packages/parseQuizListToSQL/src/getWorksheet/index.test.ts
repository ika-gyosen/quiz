import { getWorksheet } from '.';

describe('test', () => {
  it('getWorksheet', async () => {
    const path = '/Users/kanekoyoshiki/work/gset-pronunciation-check/packages/testKanekoExcelImport/src/gset.xlsx';

    const worksheet = await getWorksheet({ path, sheetNumber: 2 });

    const row = worksheet.getRow(3);

    const blar = row.getCell(13);

    console.log(blar.value === null);
  });
});
