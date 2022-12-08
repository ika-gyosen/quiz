alter table "quiz"."questions"
  add constraint "questions_category_id_fkey"
  foreign key ("category_id")
  references "quiz"."categories"
  ("category_id") on update restrict on delete restrict;
