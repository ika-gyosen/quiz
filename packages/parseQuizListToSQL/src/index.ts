import { writeFileSync } from "fs";
import jsStringEscape from "js-string-escape";
import { v4 as uuidv4 } from "uuid";
import { getWorksheet } from "~/getWorksheet";
import { getCurrentTimeFileName } from "~/getCurrentTimeFileName";

type Input = {
  path: string;
  sheetNumber: number;
  startRowNumber: number;
  idColumn: number;
};

type QuestionsTableInfo = {
  id: string; // uuid
  question: string; // 問題文
  difficulty: number; // 1-5?
  answer_type_id: number; // 1で固定
  created_at: Date; // とりあえず固定値でよい
  serial_number: number;
  user_id: string; // uuid
  author: string; // 作者 ユーザーのidだが、ログイン機能がないのでこれも固定値でよい
  category_id: number; // カテゴリーのid
  sub_category_id: number; // サブカテゴリーのid
};

export const createSql = async (input: Input) => {
  const { path, sheetNumber, startRowNumber, idColumn } = input;
  const worksheet = await getWorksheet({ path, sheetNumber });

  let sqlArray: string[] = [];
  let questionsSerialNumber = 1;

  const userId = uuidv4();

  const userSQL = `INSERT INTO "quiz"."users"("user_id", "user_name") VALUES ('${userId}', E'default');`;

  sqlArray.push(userSQL);

  for (let i = startRowNumber; ; i++) {
    const row = worksheet.getRow(i);

    if (row.getCell(idColumn).value === null) {
      break;
    }

    // questions テーブルに登録するsql文を作成する
    const questionId = uuidv4();

    const question = row.getCell(9).value;

    const difficulty = row.getCell(2).value;

    const answerTypeId = 1;

    const createdAt = "2022-02-03 07:00:00.90902+00";

    // エクセルのA列にある「番号」の値を取得して使おうと思ったが、３が全角数字だったためinteger判定されず、エラーが出た。
    // そのため、こちらで連番を発行する。
    // const serialNumber = row.getCell(1).value;
    const serialNumber = questionsSerialNumber;

    const author = row.getCell(12).value;

    // G列にサブカテゴリー番号が入っているが、これは数字ではなく、F列の「34-生活」を参照して数字部分を切り出す関数が入っている。
    // getCell()でG列のcellの値をとっても、Objectにしかならない。
    // よって、F列の値をハイフン区切りで配列に分け、その1つ目の要素を取得し、数字に変換する。
    const subCategoryId = Number(
      row.getCell(6).value?.toString().split("-")[0]
    );

    const questionSQL = `INSERT INTO "quiz"."questions"("id", "question", "difficulty", "answer_type_id", "created_at", "serial_number", "user_id", "author", "category_id") VALUES ('${questionId}', E'${jsStringEscape(
      question
    )}', ${difficulty}, ${answerTypeId}, '${createdAt}', ${serialNumber}, '${userId}', E'${author}', ${subCategoryId});`;
    // 補足: 問題のサブカテゴリーが何かわかればカテゴリーも一つに定まるため、questionsテーブルにはサブカテゴリーの情報のみ持たせている

    sqlArray.push(questionSQL);

    // answers テーブルに登録するsql文を作成する
    const answerId = uuidv4();

    const answer = row.getCell(10).value;

    // const pronunciation = "null";

    const description = row.getCell(11).value
      ? `E'${jsStringEscape(row.getCell(11).value)}'`
      : "null";

    const answerSQL = `INSERT INTO "quiz"."answers"("id", "question_id", "answer", "pronunciation", "description") VALUES ('${answerId}', '${questionId}', E'${jsStringEscape(
      answer
    )}', null, ${description});`;

    sqlArray.push(answerSQL);

    questionsSerialNumber += 1;
  }

  // categoriesテーブルを登録するsql文
  // sub_categoriesテーブルを登録するsql文

  const defaultSqlFileName = getCurrentTimeFileName();
  writeFileSync(
    `${__dirname}/${defaultSqlFileName}.generated.sql`,
    sqlArray.join(`\n`)
  );
};
