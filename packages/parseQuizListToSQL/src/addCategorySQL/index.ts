type Input = {
  sqlArray: string[];
};

const categorySQLArray = [
  `INSERT INTO "quiz"."categories"("category_id", "category") VALUES (1, E'歴史');`,
  `INSERT INTO "quiz"."categories"("category_id", "category") VALUES (2, E'文学');`,
  `INSERT INTO "quiz"."categories"("category_id", "category") VALUES (3, E'芸術');`,
  `INSERT INTO "quiz"."categories"("category_id", "category") VALUES (4, E'文化');`,
  `INSERT INTO "quiz"."categories"("category_id", "category") VALUES (5, E'言葉');`,
  `INSERT INTO "quiz"."categories"("category_id", "category") VALUES (6, E'地理');`,
  `INSERT INTO "quiz"."categories"("category_id", "category") VALUES (7, E'政治経済');`,
  `INSERT INTO "quiz"."categories"("category_id", "category") VALUES (8, E'公民');`,
  `INSERT INTO "quiz"."categories"("category_id", "category") VALUES (9, E'物理・化学');`,
  `INSERT INTO "quiz"."categories"("category_id", "category") VALUES (10, E'天文・気象');`,
  `INSERT INTO "quiz"."categories"("category_id", "category") VALUES (11, E'生物・医学');`,
  `INSERT INTO "quiz"."categories"("category_id", "category") VALUES (12, E'数学・情報');`,
  `INSERT INTO "quiz"."categories"("category_id", "category") VALUES (13, E'スポーツ');`,
  `INSERT INTO "quiz"."categories"("category_id", "category") VALUES (14, E'ライフスタイル');`,
  `INSERT INTO "quiz"."categories"("category_id", "category") VALUES (15, E'芸能');`,
  `INSERT INTO "quiz"."categories"("category_id", "category") VALUES (16, E'古典芸能');`,
  `INSERT INTO "quiz"."categories"("category_id", "category") VALUES (17, E'ホビー・ゲーム');`,
  `INSERT INTO "quiz"."categories"("category_id", "category") VALUES (18, E'漫画・アニメ');`,
  `INSERT INTO "quiz"."categories"("category_id", "category") VALUES (19, E'ノンセクション');`,
];

export const addCategorySQL = (input: Input) => {
  const { sqlArray } = input;

  categorySQLArray.forEach((sql) => {
    sqlArray.push(sql);
  });
};
