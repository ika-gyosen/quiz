
alter table "quiz"."questions" alter column "difficulty" set not null;

ALTER TABLE "quiz"."users" ALTER COLUMN "user_id" drop default;

DELETE FROM "quiz"."categories" WHERE "category_id" = 13;

DELETE FROM "quiz"."categories" WHERE "category_id" = 12;

DELETE FROM "quiz"."categories" WHERE "category_id" = 11;

DELETE FROM "quiz"."categories" WHERE "category_id" = 10;

DELETE FROM "quiz"."categories" WHERE "category_id" = 9;

DELETE FROM "quiz"."categories" WHERE "category_id" = 8;

DELETE FROM "quiz"."categories" WHERE "category_id" = 7;

DELETE FROM "quiz"."categories" WHERE "category_id" = 6;

DELETE FROM "quiz"."categories" WHERE "category_id" = 5;

DELETE FROM "quiz"."categories" WHERE "category_id" = 4;

DELETE FROM "quiz"."categories" WHERE "category_id" = 3;

DELETE FROM "quiz"."categories" WHERE "category_id" = 2;

DELETE FROM "quiz"."categories" WHERE "category_id" = 1;

DELETE FROM "quiz"."answer_types" WHERE "answer_type_id" = 1;

alter table "quiz"."questions" drop constraint "questions_answer_type_id_fkey";

alter table "quiz"."questions" drop constraint "questions_category_id_fkey";

alter table "quiz"."questions" drop constraint "questions_user_id_fkey";

DROP TABLE "quiz"."users";

alter table "quiz"."questions" rename column "user_id" to "creator_id";

DROP TABLE "quiz"."categories";

-- Could not auto-generate a down migration.
-- Please write an appropriate down migration for the SQL below:
-- alter table "quiz"."questions" add column "category_id" integer
--  null;

-- Could not auto-generate a down migration.
-- Please write an appropriate down migration for the SQL below:
-- alter table "quiz"."questions" add column "author" text
--  null;

-- Could not auto-generate a down migration.
-- Please write an appropriate down migration for the SQL below:
-- alter table "quiz"."questions" add column "creator_id" uuid
--  not null;

-- Could not auto-generate a down migration.
-- Please write an appropriate down migration for the SQL below:
-- alter table "quiz"."questions" add column "serial_number" serial
--  not null unique;

DROP TABLE "quiz"."answer_types";

DROP TABLE "quiz"."tags_to_questions";

DROP TABLE "quiz"."tags";

DROP TABLE "quiz"."answers";

DROP TABLE "quiz"."questions";

drop schema "quiz" cascade;
