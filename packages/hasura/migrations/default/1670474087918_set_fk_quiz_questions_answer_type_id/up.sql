alter table "quiz"."questions"
  add constraint "questions_answer_type_id_fkey"
  foreign key ("answer_type_id")
  references "quiz"."answer_types"
  ("answer_type_id") on update restrict on delete restrict;
