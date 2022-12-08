SET check_function_bodies = false;
-- usersテーブル
INSERT INTO quiz.users (user_id, user_name) VALUES ('b94838ad-0f2d-44a2-b4d9-1e273b78995a', 'テストユーザー１');
-- tagsテーブル
INSERT INTO quiz.tags (tag_id, tag) VALUES ('a88c2605-e920-42b8-93a1-f781412feb56', 'テストタグ１');
INSERT INTO quiz.tags (tag_id, tag) VALUES ('42e4846f-b911-4a7e-a245-e82428f070a5', 'テストタグ２');
-- questionsテーブル
INSERT INTO quiz.questions (id, question, difficulty, answer_type_id, created_at, serial_number, user_id, author, category_id) VALUES ('5e6a68da-cabc-4a4b-bd94-fd609ccd8f52', '音程が半音よりも狭い音のこと', 3, 1, '2022-12-08 06:28:19.90902+00', 1, 'b94838ad-0f2d-44a2-b4d9-1e273b78995a', NULL, 8);
INSERT INTO quiz.questions (id, question, difficulty, answer_type_id, created_at, serial_number, user_id, author, category_id) VALUES ('b93cee76-cb9d-4962-918d-599bdac4938c', 'ほめて与える品物や金銭です', 2, 1, '2022-12-08 06:28:19.90902+00', 2, 'b94838ad-0f2d-44a2-b4d9-1e273b78995a', NULL, 3);
INSERT INTO quiz.questions (id, question, difficulty, answer_type_id, created_at, serial_number, user_id, author, category_id) VALUES ('26e299f8-3de6-4437-946c-f4d704275104', 'エールディビジの強豪', 2, 1, '2022-12-08 06:28:19.90902+00', 3, 'b94838ad-0f2d-44a2-b4d9-1e273b78995a', NULL, 11);
INSERT INTO quiz.questions (id, question, difficulty, answer_type_id, created_at, serial_number, user_id, author, category_id) VALUES ('a02f7e18-e97b-4ade-8281-12f2c9bd699a', 'カヤックレーシングのゲーム', 3, 1, '2022-12-08 06:28:19.90902+00', 4, 'b94838ad-0f2d-44a2-b4d9-1e273b78995a', NULL, 9);
INSERT INTO quiz.questions (id, question, difficulty, answer_type_id, created_at, serial_number, user_id, author, category_id) VALUES ('c8c9603f-40db-4b56-ad02-b9641c007d8c', '騎士アーサーが主人公', 1, 1, '2022-12-08 06:28:19.90902+00', 5, 'b94838ad-0f2d-44a2-b4d9-1e273b78995a', NULL, 9);
INSERT INTO quiz.questions (id, question, difficulty, answer_type_id, created_at, serial_number, user_id, author, category_id) VALUES ('f49b326c-c654-44d1-a492-c95bc6b75581', 'まる子の祖父「さくら○○」', 3, 1, '2022-12-08 06:28:19.90902+00', 6, 'b94838ad-0f2d-44a2-b4d9-1e273b78995a', NULL, 9);
INSERT INTO quiz.questions (id, question, difficulty, answer_type_id, created_at, serial_number, user_id, author, category_id) VALUES ('c6a8a2a2-2c5f-4cb4-8fc0-1a0c3bc494fd', '首都がアンカラの国名', 2, 1, '2022-12-08 06:28:19.90902+00', 7, 'b94838ad-0f2d-44a2-b4d9-1e273b78995a', NULL, 6);
INSERT INTO quiz.questions (id, question, difficulty, answer_type_id, created_at, serial_number, user_id, author, category_id) VALUES ('526addec-d5e0-4291-a586-ce73ccb6f4a5', '矢木沢ダムがある県は？', 2, 1, '2022-12-08 06:28:19.90902+00', 8, 'b94838ad-0f2d-44a2-b4d9-1e273b78995a', NULL, 6);
INSERT INTO quiz.questions (id, question, difficulty, answer_type_id, created_at, serial_number, user_id, author, category_id) VALUES ('f9335230-c15c-4475-8526-542dd6f90049', '欧州といえばヨーロッパを指しますが、豪州といえばどこの国を指すでしょう？', 1, 1, '2022-12-08 06:28:19.90902+00', 9, 'b94838ad-0f2d-44a2-b4d9-1e273b78995a', NULL, 6);
INSERT INTO quiz.questions (id, question, difficulty, answer_type_id, created_at, serial_number, user_id, author, category_id) VALUES ('0b08243d-69e8-4738-ad8e-bd805845efb8', '『秋風の歌』や『初恋』などがおさめられている、作家島崎藤村の処女詩集は何でしょう？', 2, 1, '2022-12-08 06:28:19.90902+00', 10, 'b94838ad-0f2d-44a2-b4d9-1e273b78995a', NULL, 2);
SELECT pg_catalog.setval('quiz.questions_serial_number_seq', 10, true);
-- tags_to_questionsテーブル
INSERT INTO quiz.tags_to_questions (tag_id, question_id) VALUES ('a88c2605-e920-42b8-93a1-f781412feb56', '5e6a68da-cabc-4a4b-bd94-fd609ccd8f52');
INSERT INTO quiz.tags_to_questions (tag_id, question_id) VALUES ('a88c2605-e920-42b8-93a1-f781412feb56', 'b93cee76-cb9d-4962-918d-599bdac4938c');
INSERT INTO quiz.tags_to_questions (tag_id, question_id) VALUES ('42e4846f-b911-4a7e-a245-e82428f070a5', '26e299f8-3de6-4437-946c-f4d704275104');
-- answersテーブル
INSERT INTO quiz.answers (id, question_id, answer, pronunciation, description) VALUES ('3332c8fb-7376-4807-b54c-f47cd3068d25', '5e6a68da-cabc-4a4b-bd94-fd609ccd8f52', '微分音', 'びぶんおん', NULL);
INSERT INTO quiz.answers (id, question_id, answer, pronunciation, description) VALUES ('884f619a-9b5a-4f6e-aec1-6863571fce29', 'b93cee76-cb9d-4962-918d-599bdac4938c', '褒美', 'ほうび', NULL);
INSERT INTO quiz.answers (id, question_id, answer, pronunciation, description) VALUES ('ae29ab0a-0ff1-4a91-8c57-8b553f6ac72d', '26e299f8-3de6-4437-946c-f4d704275104', 'アヤックス', 'あやっくす', NULL);
INSERT INTO quiz.answers (id, question_id, answer, pronunciation, description) VALUES ('d8d06658-c39f-4f00-acb1-ca97422cf7c4', 'a02f7e18-e97b-4ade-8281-12f2c9bd699a', '爆流', 'ばくりゅう', NULL);
INSERT INTO quiz.answers (id, question_id, answer, pronunciation, description) VALUES ('3fc64f24-e297-4518-98d7-9e1890ad799d', 'c8c9603f-40db-4b56-ad02-b9641c007d8c', '魔界村', 'まかいむら', NULL);
INSERT INTO quiz.answers (id, question_id, answer, pronunciation, description) VALUES ('06188d4f-fded-4f6e-a3de-5d1e525d70cb', 'f49b326c-c654-44d1-a492-c95bc6b75581', '友蔵', 'ともぞう', NULL);
INSERT INTO quiz.answers (id, question_id, answer, pronunciation, description) VALUES ('8110566d-d6fd-4273-8c48-2bd38537aef0', 'c6a8a2a2-2c5f-4cb4-8fc0-1a0c3bc494fd', 'トルコ', 'とるこ', NULL);
INSERT INTO quiz.answers (id, question_id, answer, pronunciation, description) VALUES ('697a5dd1-14f5-43ef-bbac-27cd041dbd5c', '526addec-d5e0-4291-a586-ce73ccb6f4a5', '群馬', 'ぐんま', NULL);
INSERT INTO quiz.answers (id, question_id, answer, pronunciation, description) VALUES ('ba5bc279-68fe-46f0-91b5-95b38d1288ba', 'f9335230-c15c-4475-8526-542dd6f90049', 'オーストラリア', 'おーすとらりあ', NULL);
INSERT INTO quiz.answers (id, question_id, answer, pronunciation, description) VALUES ('cea4dfe1-24a8-43fc-8948-b7f106cae296', '0b08243d-69e8-4738-ad8e-bd805845efb8', '若菜集', 'わかなしゅう', NULL);
