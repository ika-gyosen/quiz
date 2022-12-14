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
INSERT INTO quiz.questions (id, question, difficulty, answer_type_id, created_at, serial_number, user_id, author, category_id) VALUES ('a81685eb-3546-480a-8b6a-b8ba25d8d50c', '組曲『惑星』で知られるイギリスの作曲家は誰？', 2, 1, '2022-12-08 06:28:19.90902+00', 11, 'b94838ad-0f2d-44a2-b4d9-1e273b78995a', NULL, 8);
INSERT INTO quiz.questions (id, question, difficulty, answer_type_id, created_at, serial_number, user_id, author, category_id) VALUES ('da75c6ba-b30f-480e-b972-665f37162ae7', '児童福祉法で定められる「児童」とは満何歳未満？', 2, 1, '2022-12-08 06:28:19.90902+00', 12, 'b94838ad-0f2d-44a2-b4d9-1e273b78995a', NULL, 7);
INSERT INTO quiz.questions (id, question, difficulty, answer_type_id, created_at, serial_number, user_id, author, category_id) VALUES ('c44a2062-f403-47f2-8f37-2fdd37690931', '着物などを縫うとき、仕立てがくるわないように仮にあらく縫っておく糸のことを何という？', 2, 1, '2022-12-08 06:28:19.90902+00', 13, 'b94838ad-0f2d-44a2-b4d9-1e273b78995a', NULL, 10);
INSERT INTO quiz.questions (id, question, difficulty, answer_type_id, created_at, serial_number, user_id, author, category_id) VALUES ('e2bc3e9b-3b80-43b8-9c9f-de46e7b88a36', '「３本の矢」の教訓で息子たちに結束を説いた戦国時代の武将は誰？', 2, 1, '2022-12-08 06:28:19.90902+00', 14, 'b94838ad-0f2d-44a2-b4d9-1e273b78995a', NULL, 4);
INSERT INTO quiz.questions (id, question, difficulty, answer_type_id, created_at, serial_number, user_id, author, category_id) VALUES ('677b4d8c-af3c-462c-844f-0dcaddfcd372', '幼稚園は文部省の管轄、では保育園は何省の管轄？', 2, 1, '2022-12-08 06:28:19.90902+00', 15, 'b94838ad-0f2d-44a2-b4d9-1e273b78995a', NULL, 10);
INSERT INTO quiz.questions (id, question, difficulty, answer_type_id, created_at, serial_number, user_id, author, category_id) VALUES ('6270f548-57d5-48fd-8f78-ef43621110e4', '虫歯の治療などに用いられる、水銀と他の金属との合金を何という？', 2, 1, '2022-12-08 06:28:19.90902+00', 16, 'b94838ad-0f2d-44a2-b4d9-1e273b78995a', NULL, 1);
INSERT INTO quiz.questions (id, question, difficulty, answer_type_id, created_at, serial_number, user_id, author, category_id) VALUES ('e551e81a-d247-4c40-b3aa-950c27562bbb', 'ボウリングのレーン上に描かれる７つの三角形のしるしを何という？', 2, 1, '2022-12-08 06:28:19.90902+00', 17, 'b94838ad-0f2d-44a2-b4d9-1e273b78995a', NULL, 11);
INSERT INTO quiz.questions (id, question, difficulty, answer_type_id, created_at, serial_number, user_id, author, category_id) VALUES ('f2689240-e5bd-418d-bb1d-0c8f3f5c8417', 'かつてマヤ文明の中心となっていた中央アメリカの半島は何半島？', 2, 1, '2022-12-08 06:28:19.90902+00', 18, 'b94838ad-0f2d-44a2-b4d9-1e273b78995a', NULL, 5);
INSERT INTO quiz.questions (id, question, difficulty, answer_type_id, created_at, serial_number, user_id, author, category_id) VALUES ('bea21f85-0674-4a97-aa22-8be7e57a8ed4', '海王星にちなんで名付けられた元素はネプツニウム、では冥王星にちなんで名付けられた元素は何？', 3, 1, '2022-12-08 06:28:19.90902+00', 19, 'b94838ad-0f2d-44a2-b4d9-1e273b78995a', NULL, 1);
INSERT INTO quiz.questions (id, question, difficulty, answer_type_id, created_at, serial_number, user_id, author, category_id) VALUES ('b3652975-5cff-4720-875b-fdcfb7f39dec', '「三国一の花嫁」というときの「三国」とは、日本、唐、とどこの国？', 3, 1, '2022-12-08 06:28:19.90902+00', 20, 'b94838ad-0f2d-44a2-b4d9-1e273b78995a', NULL, 3);
INSERT INTO quiz.questions (id, question, difficulty, answer_type_id, created_at, serial_number, user_id, author, category_id) VALUES ('0d590cbe-8541-48d5-82b0-3c0336275407', '河童忌は芥川龍之介の命日、では桜桃忌といえば誰の命日？', 2, 1, '2022-12-08 06:28:19.90902+00', 21, 'b94838ad-0f2d-44a2-b4d9-1e273b78995a', NULL, 1);
INSERT INTO quiz.questions (id, question, difficulty, answer_type_id, created_at, serial_number, user_id, author, category_id) VALUES ('fefe2779-aca6-44c5-a143-849ca93cbba0', '競馬で、レース前に出走馬を引き回して観客に見せる場所を何という？', 2, 1, '2022-12-08 06:28:19.90902+00', 22, 'b94838ad-0f2d-44a2-b4d9-1e273b78995a', NULL, 11);
INSERT INTO quiz.questions (id, question, difficulty, answer_type_id, created_at, serial_number, user_id, author, category_id) VALUES ('6ad7a524-27aa-4d8c-8d17-ae43d236f05b', '信用していた人に裏切られることを、「何を飲まされる」という？', 2, 1, '2022-12-08 06:28:19.90902+00', 23, 'b94838ad-0f2d-44a2-b4d9-1e273b78995a', NULL, 3);
INSERT INTO quiz.questions (id, question, difficulty, answer_type_id, created_at, serial_number, user_id, author, category_id) VALUES ('71b5ce80-601b-49fa-873d-d54ac8cc1b55', '日本語では「ザクロ石」と呼ばれる、１月の誕生石は何？', 2, 1, '2022-12-08 06:28:19.90902+00', 24, 'b94838ad-0f2d-44a2-b4d9-1e273b78995a', NULL, 10);
INSERT INTO quiz.questions (id, question, difficulty, answer_type_id, created_at, serial_number, user_id, author, category_id) VALUES ('3c8aad0e-4817-414f-8424-38377b5c22ea', '「１月の川」という意味を持つ、南米の都市といえばどこ？', 2, 1, '2022-12-08 06:28:19.90902+00', 25, 'b94838ad-0f2d-44a2-b4d9-1e273b78995a', NULL, 6);
INSERT INTO quiz.questions (id, question, difficulty, answer_type_id, created_at, serial_number, user_id, author, category_id) VALUES ('6468ba97-5a15-42f4-af14-cfca6e01ebc1', 'フグの卵巣に含まれる猛毒を何という？', 2, 1, '2022-12-08 06:28:19.90902+00', 26, 'b94838ad-0f2d-44a2-b4d9-1e273b78995a', NULL, 1);
INSERT INTO quiz.questions (id, question, difficulty, answer_type_id, created_at, serial_number, user_id, author, category_id) VALUES ('4c1e1dc0-2540-40ef-8e73-e70cd46d4513', 'インドのヘビ使いなどが使う笛のことを何という？', 3, 1, '2022-12-08 06:28:19.90902+00', 27, 'b94838ad-0f2d-44a2-b4d9-1e273b78995a', NULL, 10);
INSERT INTO quiz.questions (id, question, difficulty, answer_type_id, created_at, serial_number, user_id, author, category_id) VALUES ('b759e412-38b2-49f5-9bbc-1c1118e0d59f', '全天88星座のうち、名前に「へび」が付く4つの星座とは、へび座、うみへび座、みずへび座とあとひとつは何？', 2, 1, '2022-12-08 06:28:19.90902+00', 28, 'b94838ad-0f2d-44a2-b4d9-1e273b78995a', NULL, 1);
INSERT INTO quiz.questions (id, question, difficulty, answer_type_id, created_at, serial_number, user_id, author, category_id) VALUES ('46ec1505-5fba-4a1a-8eba-abf1f601467d', '「自然を愛し、生物をいつくしむ日」と定義されている国民の祝日は何の日？', 3, 1, '2022-12-08 06:28:19.90902+00', 29, 'b94838ad-0f2d-44a2-b4d9-1e273b78995a', NULL, 10);
INSERT INTO quiz.questions (id, question, difficulty, answer_type_id, created_at, serial_number, user_id, author, category_id) VALUES ('8f6779a4-9d3f-4c70-82a2-359d76137935', '「ブルータス、お前もか」の言葉で知られるローマの政治家は誰？', 2, 1, '2022-12-08 06:28:19.90902+00', 30, 'b94838ad-0f2d-44a2-b4d9-1e273b78995a', NULL, 5);
SELECT pg_catalog.setval('quiz.questions_serial_number_seq', 10, true);
-- tags_to_questionsテーブル
INSERT INTO quiz.tags_to_questions (tag_id, question_id) VALUES ('a88c2605-e920-42b8-93a1-f781412feb56', '5e6a68da-cabc-4a4b-bd94-fd609ccd8f52');
INSERT INTO quiz.tags_to_questions (tag_id, question_id) VALUES ('a88c2605-e920-42b8-93a1-f781412feb56', 'b93cee76-cb9d-4962-918d-599bdac4938c');
INSERT INTO quiz.tags_to_questions (tag_id, question_id) VALUES ('42e4846f-b911-4a7e-a245-e82428f070a5', '26e299f8-3de6-4437-946c-f4d704275104');
-- answersテーブル
INSERT INTO quiz.answers (id, question_id, answer, pronunciation, description) VALUES ('3332c8fb-7376-4807-b54c-f47cd3068d25', '5e6a68da-cabc-4a4b-bd94-fd609ccd8f52', '微分音', 'びぶんおん', NULL);
INSERT INTO quiz.answers (id, question_id, answer, pronunciation, description) VALUES ('884f619a-9b5a-4f6e-aec1-6863571fce29', 'b93cee76-cb9d-4962-918d-599bdac4938c', '褒美', 'ほうび', NULL);
INSERT INTO quiz.answers (id, question_id, answer, pronunciation, description) VALUES ('ae29ab0a-0ff1-4a91-8c57-8b553f6ac72d', '26e299f8-3de6-4437-946c-f4d704275104', 'アヤックス', NULL, NULL);
INSERT INTO quiz.answers (id, question_id, answer, pronunciation, description) VALUES ('d8d06658-c39f-4f00-acb1-ca97422cf7c4', 'a02f7e18-e97b-4ade-8281-12f2c9bd699a', '爆流', 'ばくりゅう', NULL);
INSERT INTO quiz.answers (id, question_id, answer, pronunciation, description) VALUES ('3fc64f24-e297-4518-98d7-9e1890ad799d', 'c8c9603f-40db-4b56-ad02-b9641c007d8c', '魔界村', 'まかいむら', NULL);
INSERT INTO quiz.answers (id, question_id, answer, pronunciation, description) VALUES ('06188d4f-fded-4f6e-a3de-5d1e525d70cb', 'f49b326c-c654-44d1-a492-c95bc6b75581', '友蔵', 'ともぞう', NULL);
INSERT INTO quiz.answers (id, question_id, answer, pronunciation, description) VALUES ('8110566d-d6fd-4273-8c48-2bd38537aef0', 'c6a8a2a2-2c5f-4cb4-8fc0-1a0c3bc494fd', 'トルコ', NULL, NULL);
INSERT INTO quiz.answers (id, question_id, answer, pronunciation, description) VALUES ('697a5dd1-14f5-43ef-bbac-27cd041dbd5c', '526addec-d5e0-4291-a586-ce73ccb6f4a5', '群馬', 'ぐんま', NULL);
INSERT INTO quiz.answers (id, question_id, answer, pronunciation, description) VALUES ('ba5bc279-68fe-46f0-91b5-95b38d1288ba', 'f9335230-c15c-4475-8526-542dd6f90049', 'オーストラリア', NULL, NULL);
INSERT INTO quiz.answers (id, question_id, answer, pronunciation, description) VALUES ('cea4dfe1-24a8-43fc-8948-b7f106cae296', '0b08243d-69e8-4738-ad8e-bd805845efb8', '若菜集', 'わかなしゅう', NULL);
INSERT INTO quiz.answers (id, question_id, answer, pronunciation, description) VALUES ('d766961a-44cd-4832-b785-c7cf0168207c', 'a81685eb-3546-480a-8b6a-b8ba25d8d50c', 'ホルスト', NULL, 'それぞれの惑星をテーマに構成されていますが、地球と冥王星は登場しません。');
INSERT INTO quiz.answers (id, question_id, answer, pronunciation, description) VALUES ('2b8fff0a-ba91-412b-9f9c-a4d258ecdfeb', 'da75c6ba-b30f-480e-b972-665f37162ae7', '18歳', NULL, NULL);
INSERT INTO quiz.answers (id, question_id, answer, pronunciation, description) VALUES ('228f3114-4000-4dce-b2cb-e15e532189eb', 'c44a2062-f403-47f2-8f37-2fdd37690931', 'しつけ糸', NULL, NULL);
INSERT INTO quiz.answers (id, question_id, answer, pronunciation, description) VALUES ('b893ce6d-f8a1-4427-a1c0-f7660207103e', 'e2bc3e9b-3b80-43b8-9c9f-de46e7b88a36', '毛利元就', 'もうりもとなり', NULL);
INSERT INTO quiz.answers (id, question_id, answer, pronunciation, description) VALUES ('ef82d284-aee9-4b41-a260-5cdaf55db037', '677b4d8c-af3c-462c-844f-0dcaddfcd372', '厚生労働省', 'こうせいろうどうしょう', NULL);
INSERT INTO quiz.answers (id, question_id, answer, pronunciation, description) VALUES ('0c33326f-cc11-421c-8a8e-f37276a32a78', '6270f548-57d5-48fd-8f78-ef43621110e4', 'アマルガム', NULL, NULL);
INSERT INTO quiz.answers (id, question_id, answer, pronunciation, description) VALUES ('29be2590-514d-446a-8b26-d6846e13f2e1', 'e551e81a-d247-4c40-b3aa-950c27562bbb', 'スパット', NULL, NULL);
INSERT INTO quiz.answers (id, question_id, answer, pronunciation, description) VALUES ('c19c8516-6a9c-4c27-8b99-b65661ca681a', 'f2689240-e5bd-418d-bb1d-0c8f3f5c8417', 'ユカタン半島', NULL, NULL);
INSERT INTO quiz.answers (id, question_id, answer, pronunciation, description) VALUES ('17f3fadd-a17c-4cf1-9253-ef4c845152c2', 'bea21f85-0674-4a97-aa22-8be7e57a8ed4', 'プルトニウム', 'ぷるとにうむ', '天王星にちなんだ元素はウラン、地球にちなんだ元素はテルル。');
INSERT INTO quiz.answers (id, question_id, answer, pronunciation, description) VALUES ('4b2fbc8a-4d72-472c-ac83-a76319997408', 'b3652975-5cff-4720-875b-fdcfb7f39dec', '天竺', 'てんじく', NULL);
INSERT INTO quiz.answers (id, question_id, answer, pronunciation, description) VALUES ('f861f391-8a0c-44bc-a357-9678e06e9030', '0d590cbe-8541-48d5-82b0-3c0336275407', '太宰治', 'だざいおさむ', NULL);
INSERT INTO quiz.answers (id, question_id, answer, pronunciation, description) VALUES ('0e34d736-b199-4f1e-9d2f-48b1564d4a4d', 'fefe2779-aca6-44c5-a143-849ca93cbba0', 'パドック', NULL, NULL);
INSERT INTO quiz.answers (id, question_id, answer, pronunciation, description) VALUES ('a9164c58-3de3-420a-afd3-88fff506dba4', '6ad7a524-27aa-4d8c-8d17-ae43d236f05b', '煮え湯', 'にえゆ', NULL);
INSERT INTO quiz.answers (id, question_id, answer, pronunciation, description) VALUES ('25871137-bf95-4734-9204-05d27aee912e', '71b5ce80-601b-49fa-873d-d54ac8cc1b55', 'ガーネット', NULL, NULL);
INSERT INTO quiz.answers (id, question_id, answer, pronunciation, description) VALUES ('57bfc1cb-8fdb-4472-8cd0-3f3a967fed02', '3c8aad0e-4817-414f-8424-38377b5c22ea', 'リオ・デ・ジャネイロ', NULL, NULL);
INSERT INTO quiz.answers (id, question_id, answer, pronunciation, description) VALUES ('cbf9ed85-701a-4150-8b68-76b53c532d47', '6468ba97-5a15-42f4-af14-cfca6e01ebc1', 'テトロドトキシン', NULL, NULL);
INSERT INTO quiz.answers (id, question_id, answer, pronunciation, description) VALUES ('229717ae-4b27-4239-a7e5-2043b3bcfa39', '4c1e1dc0-2540-40ef-8e73-e70cd46d4513', 'プーンギ', NULL, NULL);
INSERT INTO quiz.answers (id, question_id, answer, pronunciation, description) VALUES ('233f9db6-e79c-4546-9377-471ae85e7c05', 'b759e412-38b2-49f5-9bbc-1c1118e0d59f', 'へびつかい座', NULL, NULL);
INSERT INTO quiz.answers (id, question_id, answer, pronunciation, description) VALUES ('66a7cb6e-65c2-41e5-8fe7-3bbd15c174a0', '46ec1505-5fba-4a1a-8eba-abf1f601467d', '春分の日', 'しゅんぶんのひ', NULL);
INSERT INTO quiz.answers (id, question_id, answer, pronunciation, description) VALUES ('037ada22-69d1-4885-ae0b-65b0557f4d61', '8f6779a4-9d3f-4c70-82a2-359d76137935', 'ジュリアス・シーザー', NULL, '「(ガイウス・)ユリウス・カエサル」でも可');


