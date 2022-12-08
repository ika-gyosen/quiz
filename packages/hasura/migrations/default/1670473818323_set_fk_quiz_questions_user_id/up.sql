alter table "quiz"."questions"
  add constraint "questions_user_id_fkey"
  foreign key ("user_id")
  references "quiz"."users"
  ("user_id") on update restrict on delete restrict;
