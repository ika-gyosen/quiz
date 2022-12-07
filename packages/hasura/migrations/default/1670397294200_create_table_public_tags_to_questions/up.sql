CREATE TABLE "public"."tags_to_questions" ("tag_id" uuid NOT NULL, "question_id" uuid NOT NULL, PRIMARY KEY ("tag_id","question_id") );
