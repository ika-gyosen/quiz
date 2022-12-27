
CREATE TABLE "quiz"."sub_categories" ("sub_category_id" serial NOT NULL, "sub_category" text NOT NULL, "category_id" integer NOT NULL, PRIMARY KEY ("sub_category_id") , UNIQUE ("sub_category_id"), UNIQUE ("sub_category"));

INSERT INTO "quiz"."sub_categories"("sub_category_id", "sub_category", "category_id") VALUES (1, E'日本史', 1);

INSERT INTO "quiz"."sub_categories"("sub_category_id", "sub_category", "category_id") VALUES (2, E'世界史', 1);

INSERT INTO "quiz"."sub_categories"("sub_category_id", "sub_category", "category_id") VALUES (3, E'日本文学', 2);

INSERT INTO "quiz"."sub_categories"("sub_category_id", "sub_category", "category_id") VALUES (4, E'外国文学', 2);

INSERT INTO "quiz"."sub_categories"("sub_category_id", "sub_category", "category_id") VALUES (5, E'クラシック音楽', 3);

INSERT INTO "quiz"."sub_categories"("sub_category_id", "sub_category", "category_id") VALUES (6, E'美術', 3);

INSERT INTO "quiz"."sub_categories"("sub_category_id", "sub_category", "category_id") VALUES (7, E'神話', 4);

INSERT INTO "quiz"."sub_categories"("sub_category_id", "sub_category", "category_id") VALUES (8, E'宗教・文化', 4);

INSERT INTO "quiz"."sub_categories"("sub_category_id", "sub_category", "category_id") VALUES (9, E'日本語', 5);

INSERT INTO "quiz"."sub_categories"("sub_category_id", "sub_category", "category_id") VALUES (10, E'漢字・熟語', 5);

INSERT INTO "quiz"."sub_categories"("sub_category_id", "sub_category", "category_id") VALUES (11, E'外国語', 5);

INSERT INTO "quiz"."sub_categories"("sub_category_id", "sub_category", "category_id") VALUES (12, E'日本地理', 6);

INSERT INTO "quiz"."sub_categories"("sub_category_id", "sub_category", "category_id") VALUES (13, E'世界地理', 6);

INSERT INTO "quiz"."sub_categories"("sub_category_id", "sub_category", "category_id") VALUES (14, E'政治', 7);

INSERT INTO "quiz"."sub_categories"("sub_category_id", "sub_category", "category_id") VALUES (15, E'経済・産業', 7);

INSERT INTO "quiz"."sub_categories"("sub_category_id", "sub_category", "category_id") VALUES (16, E'現代社会', 8);

INSERT INTO "quiz"."sub_categories"("sub_category_id", "sub_category", "category_id") VALUES (17, E'哲学', 8);

INSERT INTO "quiz"."sub_categories"("sub_category_id", "sub_category", "category_id") VALUES (18, E'物理', 9);

INSERT INTO "quiz"."sub_categories"("sub_category_id", "sub_category", "category_id") VALUES (19, E'化学', 9);

INSERT INTO "quiz"."sub_categories"("sub_category_id", "sub_category", "category_id") VALUES (20, E'天文', 10);

INSERT INTO "quiz"."sub_categories"("sub_category_id", "sub_category", "category_id") VALUES (21, E'気象', 10);

INSERT INTO "quiz"."sub_categories"("sub_category_id", "sub_category", "category_id") VALUES (22, E'地学', 10);

INSERT INTO "quiz"."sub_categories"("sub_category_id", "sub_category", "category_id") VALUES (23, E'生物', 11);

INSERT INTO "quiz"."sub_categories"("sub_category_id", "sub_category", "category_id") VALUES (24, E'医学', 11);

INSERT INTO "quiz"."sub_categories"("sub_category_id", "sub_category", "category_id") VALUES (25, E'数学', 12);

INSERT INTO "quiz"."sub_categories"("sub_category_id", "sub_category", "category_id") VALUES (26, E'情報技術', 12);

INSERT INTO "quiz"."sub_categories"("sub_category_id", "sub_category", "category_id") VALUES (27, E'球技', 13);

INSERT INTO "quiz"."sub_categories"("sub_category_id", "sub_category", "category_id") VALUES (28, E'団体競技(球技以外)', 13);

INSERT INTO "quiz"."sub_categories"("sub_category_id", "sub_category", "category_id") VALUES (29, E'格闘技・武道', 13);

INSERT INTO "quiz"."sub_categories"("sub_category_id", "sub_category", "category_id") VALUES (30, E'陸上・レース', 13);

INSERT INTO "quiz"."sub_categories"("sub_category_id", "sub_category", "category_id") VALUES (31, E'スポーツその他', 13);

INSERT INTO "quiz"."sub_categories"("sub_category_id", "sub_category", "category_id") VALUES (32, E'グルメ', 14);

INSERT INTO "quiz"."sub_categories"("sub_category_id", "sub_category", "category_id") VALUES (33, E'ファッション', 14);

INSERT INTO "quiz"."sub_categories"("sub_category_id", "sub_category", "category_id") VALUES (34, E'生活', 14);

INSERT INTO "quiz"."sub_categories"("sub_category_id", "sub_category", "category_id") VALUES (35, E'現代芸能', 15);

INSERT INTO "quiz"."sub_categories"("sub_category_id", "sub_category", "category_id") VALUES (36, E'音楽(クラシック以外)', 15);

INSERT INTO "quiz"."sub_categories"("sub_category_id", "sub_category", "category_id") VALUES (37, E'古典芸能', 16);

INSERT INTO "quiz"."sub_categories"("sub_category_id", "sub_category", "category_id") VALUES (38, E'唱歌・民謡', 16);

INSERT INTO "quiz"."sub_categories"("sub_category_id", "sub_category", "category_id") VALUES (39, E'ホビー', 17);

INSERT INTO "quiz"."sub_categories"("sub_category_id", "sub_category", "category_id") VALUES (40, E'デジタルゲーム', 17);

INSERT INTO "quiz"."sub_categories"("sub_category_id", "sub_category", "category_id") VALUES (41, E'漫画・アニメ', 18);

INSERT INTO "quiz"."sub_categories"("sub_category_id", "sub_category", "category_id") VALUES (42, E'ノンセクション', 19);
