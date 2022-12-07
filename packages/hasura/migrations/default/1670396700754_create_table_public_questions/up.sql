CREATE TABLE "public"."questions" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "question" text NOT NULL, "difficulty" integer NOT NULL, "answer_type_id" integer NOT NULL, "created_at" timestamptz NOT NULL DEFAULT now(), PRIMARY KEY ("id") , UNIQUE ("id"));
CREATE EXTENSION IF NOT EXISTS pgcrypto;
