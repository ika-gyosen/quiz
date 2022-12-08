CREATE TABLE "quiz"."users" ("user_id" uuid NOT NULL, "user_name" text NOT NULL, PRIMARY KEY ("user_id") , UNIQUE ("user_id"));COMMENT ON TABLE "quiz"."users" IS E'ユーザー';
