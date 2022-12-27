
create schema "quiz";

CREATE TABLE "quiz"."questions" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "question" text NOT NULL, "difficulty" integer NOT NULL, "answer_type_id" integer NOT NULL, "created_at" timestamptz NOT NULL DEFAULT now(), PRIMARY KEY ("id") , UNIQUE ("id"));
CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE "quiz"."answers" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "question_id" uuid NOT NULL, "answer" text NOT NULL, "pronunciation" text, "description" text, PRIMARY KEY ("id") , FOREIGN KEY ("question_id") REFERENCES "quiz"."questions"("id") ON UPDATE cascade ON DELETE cascade, UNIQUE ("id"));
CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE "quiz"."tags" ("tag_id" uuid NOT NULL DEFAULT gen_random_uuid(), "tag" text NOT NULL, PRIMARY KEY ("tag_id") , UNIQUE ("tag_id"));
CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE "quiz"."tags_to_questions" ("tag_id" uuid NOT NULL, "question_id" uuid NOT NULL, PRIMARY KEY ("tag_id","question_id") );

CREATE TABLE "quiz"."answer_types" ("answer_type_id" serial NOT NULL, "answer_type" text NOT NULL, PRIMARY KEY ("answer_type_id") , UNIQUE ("answer_type_id"));

alter table "quiz"."questions" add column "serial_number" serial
 not null unique;

alter table "quiz"."questions" add column "creator_id" uuid
 not null;

alter table "quiz"."questions" add column "author" text
 null;

alter table "quiz"."questions" add column "category_id" integer
 null;

CREATE TABLE "quiz"."categories" ("category_id" serial NOT NULL, "category" text NOT NULL, PRIMARY KEY ("category_id") , UNIQUE ("category_id"));COMMENT ON TABLE "quiz"."categories" IS E'クイズのジャンル';

alter table "quiz"."questions" rename column "creator_id" to "user_id";

CREATE TABLE "quiz"."users" ("user_id" uuid NOT NULL, "user_name" text NOT NULL, PRIMARY KEY ("user_id") , UNIQUE ("user_id"));COMMENT ON TABLE "quiz"."users" IS E'ユーザー';

alter table "quiz"."questions"
  add constraint "questions_user_id_fkey"
  foreign key ("user_id")
  references "quiz"."users"
  ("user_id") on update restrict on delete restrict;

alter table "quiz"."questions"
  add constraint "questions_category_id_fkey"
  foreign key ("category_id")
  references "quiz"."categories"
  ("category_id") on update restrict on delete restrict;

alter table "quiz"."questions"
  add constraint "questions_answer_type_id_fkey"
  foreign key ("answer_type_id")
  references "quiz"."answer_types"
  ("answer_type_id") on update restrict on delete restrict;

INSERT INTO "quiz"."answer_types"("answer_type_id", "answer_type") VALUES (1, E'一問一答');

INSERT INTO "quiz"."categories"("category_id", "category") VALUES (1, E'歴史');

INSERT INTO "quiz"."categories"("category_id", "category") VALUES (2, E'文学');

INSERT INTO "quiz"."categories"("category_id", "category") VALUES (3, E'芸術');

INSERT INTO "quiz"."categories"("category_id", "category") VALUES (4, E'文化');

INSERT INTO "quiz"."categories"("category_id", "category") VALUES (5, E'言葉');

INSERT INTO "quiz"."categories"("category_id", "category") VALUES (6, E'地理');

INSERT INTO "quiz"."categories"("category_id", "category") VALUES (7, E'政治経済');

INSERT INTO "quiz"."categories"("category_id", "category") VALUES (8, E'公民');

INSERT INTO "quiz"."categories"("category_id", "category") VALUES (9, E'物理・化学');

INSERT INTO "quiz"."categories"("category_id", "category") VALUES (10, E'天文・気象');

INSERT INTO "quiz"."categories"("category_id", "category") VALUES (11, E'生物・医学');

INSERT INTO "quiz"."categories"("category_id", "category") VALUES (12, E'数学・情報');

INSERT INTO "quiz"."categories"("category_id", "category") VALUES (13, E'スポーツ');

INSERT INTO "quiz"."categories"("category_id", "category") VALUES (14, E'ライフスタイル');

INSERT INTO "quiz"."categories"("category_id", "category") VALUES (15, E'芸能');

INSERT INTO "quiz"."categories"("category_id", "category") VALUES (16, E'古典芸能');

INSERT INTO "quiz"."categories"("category_id", "category") VALUES (17, E'ホビー・ゲーム');

INSERT INTO "quiz"."categories"("category_id", "category") VALUES (18, E'漫画・アニメ');

INSERT INTO "quiz"."categories"("category_id", "category") VALUES (19, E'ノンセクション');

alter table "quiz"."users" alter column "user_id" set default gen_random_uuid();

alter table "quiz"."questions" alter column "difficulty" drop not null;
