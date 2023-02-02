import { createSql } from "~/index";
import { v4 as uuidv4 } from "uuid";
import { getWorksheet } from "~/getWorksheet";

describe("sqlを作成する", () => {
  it("idを指定してsqlを作成する", async () => {
    const path =
      "/Users/kanekoyoshiki/work/quiz/packages/parseQuizListToSQL/src/quiz_list.xlsx";

    const sheetNumber = 0;
    const startRowNumber = 2;
    const idColumn = 1;

    await createSql({ path, sheetNumber, startRowNumber, idColumn });
  });

  it("uuidv4", () => {
    const uuid = uuidv4();

    console.log(uuid);
  });

  it("excel上で関数が使われている場合", async () => {
    const path =
      "/Users/kanekoyoshiki/work/quiz/packages/parseQuizListToSQL/src/quiz_list.xlsx";

    const sheetNumber = 0;

    const worksheet = await getWorksheet({ path, sheetNumber });

    const row = worksheet.getRow(2);

    console.log(row);
  });
});
