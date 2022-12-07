CREATE TABLE "quiz"."answers" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "question_id" uuid NOT NULL, "answer" text NOT NULL, "pronunciation" text, "description" text, PRIMARY KEY ("id") , FOREIGN KEY ("question_id") REFERENCES "quiz"."questions"("id") ON UPDATE cascade ON DELETE cascade, UNIQUE ("id"));
CREATE EXTENSION IF NOT EXISTS pgcrypto;
