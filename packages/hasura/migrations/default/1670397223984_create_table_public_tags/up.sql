CREATE TABLE "quiz"."tags" ("tag_id" uuid NOT NULL DEFAULT gen_random_uuid(), "tag" text NOT NULL, PRIMARY KEY ("tag_id") , UNIQUE ("tag_id"));
CREATE EXTENSION IF NOT EXISTS pgcrypto;
