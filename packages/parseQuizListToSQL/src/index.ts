import { writeFileSync } from "fs";
import jsStringEscape from "js-string-escape";
import { v4 as uuidv4 } from "uuid";
import { getWorksheet } from "~/getWorksheet";
import { getCurrentTimeFileName } from "~/getCurrentTimeFileName";
import { addCategorySQL } from "~/addCategorySQL";
import { addSubCategorySQL } from "~/addSubCategorySQL";
import { addAnswerTypesSQL } from "~/addAnswerTypesSQL";

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

  const sqlArray: string[] = [];

  addAnswerTypesSQL({ sqlArray });

  addCategorySQL({ sqlArray });

  addSubCategorySQL({ sqlArray });

  const userId = uuidv4();

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

    const serialNumber = row.getCell(1).value;

    const author = row.getCell(12).value;

    // D列にカテゴリー番号が入っているが、これは数字ではなく、C列の「14-ライフスタイル」を参照して数字部分を切り出す関数が入っている。
    // getCell()でD列のcellの値をとっても、Objectにしかならない。
    // よって、C列の値をハイフン区切りで配列に分け、その1つ目の要素を取得し、数字に変換する。
    const categoryId = Number(row.getCell(3).value?.toString().split("-")[0]);

    // サブカテゴリー番号についても、カテゴリー番号と同様。
    // G列にカテゴリー番号が入っているが、これは数字ではなく、F列の「34-生活」を参照して数字部分を切り出す関数が入っている。
    // getCell()でG列のcellの値をとっても、Objectにしかならない。
    // よって、F列の値をハイフン区切りで配列に分け、その1つ目の要素を取得し、数字に変換する。
    const subCategoryId = Number(
      row.getCell(6).value?.toString().split("-")[0]
    );

    const questionSQL = `INSERT INTO "quiz"."questions"("id", "question", "difficulty", "answer_type_id", "created_at", "serial_number", "user_id", "author", "category_id", "sub_category_id") VALUES ('${questionId}', E'${jsStringEscape(
      question
    )}', ${difficulty}, ${answerTypeId}, '${createdAt}', ${serialNumber}, '${userId}', E'${author}', ${categoryId}, ${subCategoryId});`;

    sqlArray.push(questionSQL);

    // answers テーブルに登録するsql文を作成する
    const answerId = uuidv4();

    const answer = row.getCell(10).value;

    const pronunciation = "NULL";

    const description = row.getCell(11).value;

    const answerSQL = `INSERT INTO "quiz"."answers"("id", "question_id", "answer", "pronunciation", "description") VALUES ('${answerId}', '${questionId}', E'${jsStringEscape(
      answer
    )}', ${pronunciation}, E'${jsStringEscape(description)}');`;

    sqlArray.push(answerSQL);
  }

  // categoriesテーブルを登録するsql文
  // sub_categoriesテーブルを登録するsql文

  const defaultSqlFileName = getCurrentTimeFileName();
  writeFileSync(
    `${__dirname}/${defaultSqlFileName}.generated.sql`,
    sqlArray.join(`\n`)
  );
};
