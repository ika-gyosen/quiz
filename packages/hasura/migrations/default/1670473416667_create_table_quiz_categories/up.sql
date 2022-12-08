CREATE TABLE "quiz"."categories" ("category_id" serial NOT NULL, "category" text NOT NULL, PRIMARY KEY ("category_id") , UNIQUE ("category_id"));COMMENT ON TABLE "quiz"."categories" IS E'クイズのジャンル';
