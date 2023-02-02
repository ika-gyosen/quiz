type Input = {
  sqlArray: string[];
};

const answerTypeSQLArray = [
  `INSERT INTO "quiz"."answer_types"("answer_type_id", "answer_type") VALUES (1, E'一問一答');`,
];

export const addAnswerTypesSQL = (input: Input) => {
  const { sqlArray } = input;

  answerTypeSQLArray.forEach((sql) => {
    sqlArray.push(sql);
  });
};
