import {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig,
} from 'graphql';
export type Maybe<T> = T | undefined | null;
export type InputMaybe<T> = T | undefined | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
  [P in K]-?: NonNullable<T[P]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: string;
  uuid: string;
};

/** エラーレスポンス: エラーメッセージを返す */
export type AddQuestionFailResponse = {
  __typename?: 'AddQuestionFailResponse';
  message: Scalars['String'];
};

export type AddQuestionInput = {
  /** 解答 */
  answer: Scalars['String'];
  /** 出典/作問者 */
  author?: InputMaybe<Scalars['String']>;
  /** ジャンル */
  categoryId?: InputMaybe<Scalars['Int']>;
  /** 備考 */
  description?: InputMaybe<Scalars['String']>;
  /** 難易度 */
  difficulty?: InputMaybe<Scalars['Int']>;
  /** 解答の読み方(ふりがな) */
  pronunciation?: InputMaybe<Scalars['String']>;
  /** 問題文 */
  question: Scalars['String'];
  /** タグID */
  tagIds?: InputMaybe<Array<Scalars['String']>>;
  /** 投稿者 */
  userId: Scalars['String'];
};

export type AddQuestionResult =
  | AddQuestionFailResponse
  | AddQuestionSuccessResponse;

/** 成功レスポンス: succeededを返す */
export type AddQuestionSuccessResponse = {
  __typename?: 'AddQuestionSuccessResponse';
  id: Scalars['String'];
  succeeded: Scalars['Boolean'];
};

export type AddTagInput = {
  /** タグID */
  tag: Scalars['String'];
};

export type AddTagResponse = {
  __typename?: 'AddTagResponse';
  succeeded: Scalars['Boolean'];
};

export type Answer = {
  __typename?: 'Answer';
  answer: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  pronunciation?: Maybe<Scalars['String']>;
};

export type GetQuestionsInput = {
  /** ジャンル */
  categoryIds?: InputMaybe<Array<Scalars['Int']>>;
  /** 含んでいると検索対象となる単語 */
  containWord?: InputMaybe<Scalars['String']>;
  /** 難易度 */
  difficulties?: InputMaybe<Array<Scalars['Int']>>;
  /** 含んでいると検索対象外となる単語 */
  notContainWord?: InputMaybe<Scalars['String']>;
  /** 除くべきタグ */
  notTargetTags?: InputMaybe<Array<Scalars['String']>>;
  /** タグ */
  targetTags?: InputMaybe<Array<Scalars['String']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type IntComparisonExp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  _dummy?: Maybe<Scalars['Boolean']>;
  addQuestion: AddQuestionResult;
  addTag: AddTagResponse;
};

export type MutationAddQuestionArgs = {
  input: AddQuestionInput;
};

export type MutationAddTagArgs = {
  input: AddTagInput;
};

export type Query = {
  __typename?: 'Query';
  _dummy?: Maybe<Scalars['Boolean']>;
};

export type Question = {
  __typename?: 'Question';
  answers: Array<Answer>;
  author?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  difficulty?: Maybe<Scalars['Int']>;
  question: Scalars['String'];
  questionId: Scalars['String'];
  serialNumber: Scalars['Int'];
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  userName: Scalars['String'];
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type StringComparisonExp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  _dummy?: Maybe<Scalars['Boolean']>;
};

/** ordering argument of a cursor */
export type CursorOrdering =
  /** ascending ordering of the cursor */
  | 'ASC'
  /** descending ordering of the cursor */
  | 'DESC';

/** mutation root */
export type MutationRoot = {
  __typename?: 'mutation_root';
  _dummy?: Maybe<Scalars['Boolean']>;
  addQuestion: AddQuestionResult;
  addTag: AddTagResponse;
  /** delete data from the table: "quiz.answer_types" */
  delete_quiz_answer_types?: Maybe<QuizAnswerTypesMutationResponse>;
  /** delete single row from the table: "quiz.answer_types" */
  delete_quiz_answer_types_by_pk?: Maybe<QuizAnswerTypes>;
  /** delete data from the table: "quiz.answers" */
  delete_quiz_answers?: Maybe<QuizAnswersMutationResponse>;
  /** delete single row from the table: "quiz.answers" */
  delete_quiz_answers_by_pk?: Maybe<QuizAnswers>;
  /** delete data from the table: "quiz.categories" */
  delete_quiz_categories?: Maybe<QuizCategoriesMutationResponse>;
  /** delete single row from the table: "quiz.categories" */
  delete_quiz_categories_by_pk?: Maybe<QuizCategories>;
  /** delete data from the table: "quiz.questions" */
  delete_quiz_questions?: Maybe<QuizQuestionsMutationResponse>;
  /** delete single row from the table: "quiz.questions" */
  delete_quiz_questions_by_pk?: Maybe<QuizQuestions>;
  /** delete data from the table: "quiz.tags" */
  delete_quiz_tags?: Maybe<QuizTagsMutationResponse>;
  /** delete single row from the table: "quiz.tags" */
  delete_quiz_tags_by_pk?: Maybe<QuizTags>;
  /** delete data from the table: "quiz.tags_to_questions" */
  delete_quiz_tags_to_questions?: Maybe<QuizTagsToQuestionsMutationResponse>;
  /** delete single row from the table: "quiz.tags_to_questions" */
  delete_quiz_tags_to_questions_by_pk?: Maybe<QuizTagsToQuestions>;
  /** delete data from the table: "quiz.users" */
  delete_quiz_users?: Maybe<QuizUsersMutationResponse>;
  /** delete single row from the table: "quiz.users" */
  delete_quiz_users_by_pk?: Maybe<QuizUsers>;
  /** insert data into the table: "quiz.answer_types" */
  insert_quiz_answer_types?: Maybe<QuizAnswerTypesMutationResponse>;
  /** insert a single row into the table: "quiz.answer_types" */
  insert_quiz_answer_types_one?: Maybe<QuizAnswerTypes>;
  /** insert data into the table: "quiz.answers" */
  insert_quiz_answers?: Maybe<QuizAnswersMutationResponse>;
  /** insert a single row into the table: "quiz.answers" */
  insert_quiz_answers_one?: Maybe<QuizAnswers>;
  /** insert data into the table: "quiz.categories" */
  insert_quiz_categories?: Maybe<QuizCategoriesMutationResponse>;
  /** insert a single row into the table: "quiz.categories" */
  insert_quiz_categories_one?: Maybe<QuizCategories>;
  /** insert data into the table: "quiz.questions" */
  insert_quiz_questions?: Maybe<QuizQuestionsMutationResponse>;
  /** insert a single row into the table: "quiz.questions" */
  insert_quiz_questions_one?: Maybe<QuizQuestions>;
  /** insert data into the table: "quiz.tags" */
  insert_quiz_tags?: Maybe<QuizTagsMutationResponse>;
  /** insert a single row into the table: "quiz.tags" */
  insert_quiz_tags_one?: Maybe<QuizTags>;
  /** insert data into the table: "quiz.tags_to_questions" */
  insert_quiz_tags_to_questions?: Maybe<QuizTagsToQuestionsMutationResponse>;
  /** insert a single row into the table: "quiz.tags_to_questions" */
  insert_quiz_tags_to_questions_one?: Maybe<QuizTagsToQuestions>;
  /** insert data into the table: "quiz.users" */
  insert_quiz_users?: Maybe<QuizUsersMutationResponse>;
  /** insert a single row into the table: "quiz.users" */
  insert_quiz_users_one?: Maybe<QuizUsers>;
  /** update data of the table: "quiz.answer_types" */
  update_quiz_answer_types?: Maybe<QuizAnswerTypesMutationResponse>;
  /** update single row of the table: "quiz.answer_types" */
  update_quiz_answer_types_by_pk?: Maybe<QuizAnswerTypes>;
  /** update multiples rows of table: "quiz.answer_types" */
  update_quiz_answer_types_many?: Maybe<
    Array<Maybe<QuizAnswerTypesMutationResponse>>
  >;
  /** update data of the table: "quiz.answers" */
  update_quiz_answers?: Maybe<QuizAnswersMutationResponse>;
  /** update single row of the table: "quiz.answers" */
  update_quiz_answers_by_pk?: Maybe<QuizAnswers>;
  /** update multiples rows of table: "quiz.answers" */
  update_quiz_answers_many?: Maybe<Array<Maybe<QuizAnswersMutationResponse>>>;
  /** update data of the table: "quiz.categories" */
  update_quiz_categories?: Maybe<QuizCategoriesMutationResponse>;
  /** update single row of the table: "quiz.categories" */
  update_quiz_categories_by_pk?: Maybe<QuizCategories>;
  /** update multiples rows of table: "quiz.categories" */
  update_quiz_categories_many?: Maybe<
    Array<Maybe<QuizCategoriesMutationResponse>>
  >;
  /** update data of the table: "quiz.questions" */
  update_quiz_questions?: Maybe<QuizQuestionsMutationResponse>;
  /** update single row of the table: "quiz.questions" */
  update_quiz_questions_by_pk?: Maybe<QuizQuestions>;
  /** update multiples rows of table: "quiz.questions" */
  update_quiz_questions_many?: Maybe<
    Array<Maybe<QuizQuestionsMutationResponse>>
  >;
  /** update data of the table: "quiz.tags" */
  update_quiz_tags?: Maybe<QuizTagsMutationResponse>;
  /** update single row of the table: "quiz.tags" */
  update_quiz_tags_by_pk?: Maybe<QuizTags>;
  /** update multiples rows of table: "quiz.tags" */
  update_quiz_tags_many?: Maybe<Array<Maybe<QuizTagsMutationResponse>>>;
  /** update data of the table: "quiz.tags_to_questions" */
  update_quiz_tags_to_questions?: Maybe<QuizTagsToQuestionsMutationResponse>;
  /** update single row of the table: "quiz.tags_to_questions" */
  update_quiz_tags_to_questions_by_pk?: Maybe<QuizTagsToQuestions>;
  /** update multiples rows of table: "quiz.tags_to_questions" */
  update_quiz_tags_to_questions_many?: Maybe<
    Array<Maybe<QuizTagsToQuestionsMutationResponse>>
  >;
  /** update data of the table: "quiz.users" */
  update_quiz_users?: Maybe<QuizUsersMutationResponse>;
  /** update single row of the table: "quiz.users" */
  update_quiz_users_by_pk?: Maybe<QuizUsers>;
  /** update multiples rows of table: "quiz.users" */
  update_quiz_users_many?: Maybe<Array<Maybe<QuizUsersMutationResponse>>>;
};

/** mutation root */
export type MutationRootAddQuestionArgs = {
  input: AddQuestionInput;
};

/** mutation root */
export type MutationRootAddTagArgs = {
  input: AddTagInput;
};

/** mutation root */
export type MutationRootDeleteQuizAnswerTypesArgs = {
  where: QuizAnswerTypesBoolExp;
};

/** mutation root */
export type MutationRootDeleteQuizAnswerTypesByPkArgs = {
  answer_type_id: Scalars['Int'];
};

/** mutation root */
export type MutationRootDeleteQuizAnswersArgs = {
  where: QuizAnswersBoolExp;
};

/** mutation root */
export type MutationRootDeleteQuizAnswersByPkArgs = {
  id: Scalars['uuid'];
};

/** mutation root */
export type MutationRootDeleteQuizCategoriesArgs = {
  where: QuizCategoriesBoolExp;
};

/** mutation root */
export type MutationRootDeleteQuizCategoriesByPkArgs = {
  category_id: Scalars['Int'];
};

/** mutation root */
export type MutationRootDeleteQuizQuestionsArgs = {
  where: QuizQuestionsBoolExp;
};

/** mutation root */
export type MutationRootDeleteQuizQuestionsByPkArgs = {
  id: Scalars['uuid'];
};

/** mutation root */
export type MutationRootDeleteQuizTagsArgs = {
  where: QuizTagsBoolExp;
};

/** mutation root */
export type MutationRootDeleteQuizTagsByPkArgs = {
  tag_id: Scalars['uuid'];
};

/** mutation root */
export type MutationRootDeleteQuizTagsToQuestionsArgs = {
  where: QuizTagsToQuestionsBoolExp;
};

/** mutation root */
export type MutationRootDeleteQuizTagsToQuestionsByPkArgs = {
  question_id: Scalars['uuid'];
  tag_id: Scalars['uuid'];
};

/** mutation root */
export type MutationRootDeleteQuizUsersArgs = {
  where: QuizUsersBoolExp;
};

/** mutation root */
export type MutationRootDeleteQuizUsersByPkArgs = {
  user_id: Scalars['uuid'];
};

/** mutation root */
export type MutationRootInsertQuizAnswerTypesArgs = {
  objects: Array<QuizAnswerTypesInsertInput>;
  on_conflict?: InputMaybe<QuizAnswerTypesOnConflict>;
};

/** mutation root */
export type MutationRootInsertQuizAnswerTypesOneArgs = {
  object: QuizAnswerTypesInsertInput;
  on_conflict?: InputMaybe<QuizAnswerTypesOnConflict>;
};

/** mutation root */
export type MutationRootInsertQuizAnswersArgs = {
  objects: Array<QuizAnswersInsertInput>;
  on_conflict?: InputMaybe<QuizAnswersOnConflict>;
};

/** mutation root */
export type MutationRootInsertQuizAnswersOneArgs = {
  object: QuizAnswersInsertInput;
  on_conflict?: InputMaybe<QuizAnswersOnConflict>;
};

/** mutation root */
export type MutationRootInsertQuizCategoriesArgs = {
  objects: Array<QuizCategoriesInsertInput>;
  on_conflict?: InputMaybe<QuizCategoriesOnConflict>;
};

/** mutation root */
export type MutationRootInsertQuizCategoriesOneArgs = {
  object: QuizCategoriesInsertInput;
  on_conflict?: InputMaybe<QuizCategoriesOnConflict>;
};

/** mutation root */
export type MutationRootInsertQuizQuestionsArgs = {
  objects: Array<QuizQuestionsInsertInput>;
  on_conflict?: InputMaybe<QuizQuestionsOnConflict>;
};

/** mutation root */
export type MutationRootInsertQuizQuestionsOneArgs = {
  object: QuizQuestionsInsertInput;
  on_conflict?: InputMaybe<QuizQuestionsOnConflict>;
};

/** mutation root */
export type MutationRootInsertQuizTagsArgs = {
  objects: Array<QuizTagsInsertInput>;
  on_conflict?: InputMaybe<QuizTagsOnConflict>;
};

/** mutation root */
export type MutationRootInsertQuizTagsOneArgs = {
  object: QuizTagsInsertInput;
  on_conflict?: InputMaybe<QuizTagsOnConflict>;
};

/** mutation root */
export type MutationRootInsertQuizTagsToQuestionsArgs = {
  objects: Array<QuizTagsToQuestionsInsertInput>;
  on_conflict?: InputMaybe<QuizTagsToQuestionsOnConflict>;
};

/** mutation root */
export type MutationRootInsertQuizTagsToQuestionsOneArgs = {
  object: QuizTagsToQuestionsInsertInput;
  on_conflict?: InputMaybe<QuizTagsToQuestionsOnConflict>;
};

/** mutation root */
export type MutationRootInsertQuizUsersArgs = {
  objects: Array<QuizUsersInsertInput>;
  on_conflict?: InputMaybe<QuizUsersOnConflict>;
};

/** mutation root */
export type MutationRootInsertQuizUsersOneArgs = {
  object: QuizUsersInsertInput;
  on_conflict?: InputMaybe<QuizUsersOnConflict>;
};

/** mutation root */
export type MutationRootUpdateQuizAnswerTypesArgs = {
  _inc?: InputMaybe<QuizAnswerTypesIncInput>;
  _set?: InputMaybe<QuizAnswerTypesSetInput>;
  where: QuizAnswerTypesBoolExp;
};

/** mutation root */
export type MutationRootUpdateQuizAnswerTypesByPkArgs = {
  _inc?: InputMaybe<QuizAnswerTypesIncInput>;
  _set?: InputMaybe<QuizAnswerTypesSetInput>;
  pk_columns: QuizAnswerTypesPkColumnsInput;
};

/** mutation root */
export type MutationRootUpdateQuizAnswerTypesManyArgs = {
  updates: Array<QuizAnswerTypesUpdates>;
};

/** mutation root */
export type MutationRootUpdateQuizAnswersArgs = {
  _set?: InputMaybe<QuizAnswersSetInput>;
  where: QuizAnswersBoolExp;
};

/** mutation root */
export type MutationRootUpdateQuizAnswersByPkArgs = {
  _set?: InputMaybe<QuizAnswersSetInput>;
  pk_columns: QuizAnswersPkColumnsInput;
};

/** mutation root */
export type MutationRootUpdateQuizAnswersManyArgs = {
  updates: Array<QuizAnswersUpdates>;
};

/** mutation root */
export type MutationRootUpdateQuizCategoriesArgs = {
  _inc?: InputMaybe<QuizCategoriesIncInput>;
  _set?: InputMaybe<QuizCategoriesSetInput>;
  where: QuizCategoriesBoolExp;
};

/** mutation root */
export type MutationRootUpdateQuizCategoriesByPkArgs = {
  _inc?: InputMaybe<QuizCategoriesIncInput>;
  _set?: InputMaybe<QuizCategoriesSetInput>;
  pk_columns: QuizCategoriesPkColumnsInput;
};

/** mutation root */
export type MutationRootUpdateQuizCategoriesManyArgs = {
  updates: Array<QuizCategoriesUpdates>;
};

/** mutation root */
export type MutationRootUpdateQuizQuestionsArgs = {
  _inc?: InputMaybe<QuizQuestionsIncInput>;
  _set?: InputMaybe<QuizQuestionsSetInput>;
  where: QuizQuestionsBoolExp;
};

/** mutation root */
export type MutationRootUpdateQuizQuestionsByPkArgs = {
  _inc?: InputMaybe<QuizQuestionsIncInput>;
  _set?: InputMaybe<QuizQuestionsSetInput>;
  pk_columns: QuizQuestionsPkColumnsInput;
};

/** mutation root */
export type MutationRootUpdateQuizQuestionsManyArgs = {
  updates: Array<QuizQuestionsUpdates>;
};

/** mutation root */
export type MutationRootUpdateQuizTagsArgs = {
  _set?: InputMaybe<QuizTagsSetInput>;
  where: QuizTagsBoolExp;
};

/** mutation root */
export type MutationRootUpdateQuizTagsByPkArgs = {
  _set?: InputMaybe<QuizTagsSetInput>;
  pk_columns: QuizTagsPkColumnsInput;
};

/** mutation root */
export type MutationRootUpdateQuizTagsManyArgs = {
  updates: Array<QuizTagsUpdates>;
};

/** mutation root */
export type MutationRootUpdateQuizTagsToQuestionsArgs = {
  _set?: InputMaybe<QuizTagsToQuestionsSetInput>;
  where: QuizTagsToQuestionsBoolExp;
};

/** mutation root */
export type MutationRootUpdateQuizTagsToQuestionsByPkArgs = {
  _set?: InputMaybe<QuizTagsToQuestionsSetInput>;
  pk_columns: QuizTagsToQuestionsPkColumnsInput;
};

/** mutation root */
export type MutationRootUpdateQuizTagsToQuestionsManyArgs = {
  updates: Array<QuizTagsToQuestionsUpdates>;
};

/** mutation root */
export type MutationRootUpdateQuizUsersArgs = {
  _set?: InputMaybe<QuizUsersSetInput>;
  where: QuizUsersBoolExp;
};

/** mutation root */
export type MutationRootUpdateQuizUsersByPkArgs = {
  _set?: InputMaybe<QuizUsersSetInput>;
  pk_columns: QuizUsersPkColumnsInput;
};

/** mutation root */
export type MutationRootUpdateQuizUsersManyArgs = {
  updates: Array<QuizUsersUpdates>;
};

/** column ordering options */
export type OrderBy =
  /** in ascending order, nulls last */
  | 'asc'
  /** in ascending order, nulls first */
  | 'asc_nulls_first'
  /** in ascending order, nulls last */
  | 'asc_nulls_last'
  /** in descending order, nulls first */
  | 'desc'
  /** in descending order, nulls first */
  | 'desc_nulls_first'
  /** in descending order, nulls last */
  | 'desc_nulls_last';

export type QueryRoot = {
  __typename?: 'query_root';
  _dummy?: Maybe<Scalars['Boolean']>;
  questions: Array<Maybe<Question>>;
  /** fetch data from the table: "quiz.answer_types" */
  quiz_answer_types: Array<QuizAnswerTypes>;
  /** fetch aggregated fields from the table: "quiz.answer_types" */
  quiz_answer_types_aggregate: QuizAnswerTypesAggregate;
  /** fetch data from the table: "quiz.answer_types" using primary key columns */
  quiz_answer_types_by_pk?: Maybe<QuizAnswerTypes>;
  /** fetch data from the table: "quiz.answers" */
  quiz_answers: Array<QuizAnswers>;
  /** fetch aggregated fields from the table: "quiz.answers" */
  quiz_answers_aggregate: QuizAnswersAggregate;
  /** fetch data from the table: "quiz.answers" using primary key columns */
  quiz_answers_by_pk?: Maybe<QuizAnswers>;
  /** fetch data from the table: "quiz.categories" */
  quiz_categories: Array<QuizCategories>;
  /** fetch aggregated fields from the table: "quiz.categories" */
  quiz_categories_aggregate: QuizCategoriesAggregate;
  /** fetch data from the table: "quiz.categories" using primary key columns */
  quiz_categories_by_pk?: Maybe<QuizCategories>;
  /** fetch data from the table: "quiz.questions" */
  quiz_questions: Array<QuizQuestions>;
  /** fetch aggregated fields from the table: "quiz.questions" */
  quiz_questions_aggregate: QuizQuestionsAggregate;
  /** fetch data from the table: "quiz.questions" using primary key columns */
  quiz_questions_by_pk?: Maybe<QuizQuestions>;
  /** fetch data from the table: "quiz.tags" */
  quiz_tags: Array<QuizTags>;
  /** fetch aggregated fields from the table: "quiz.tags" */
  quiz_tags_aggregate: QuizTagsAggregate;
  /** fetch data from the table: "quiz.tags" using primary key columns */
  quiz_tags_by_pk?: Maybe<QuizTags>;
  /** fetch data from the table: "quiz.tags_to_questions" */
  quiz_tags_to_questions: Array<QuizTagsToQuestions>;
  /** fetch aggregated fields from the table: "quiz.tags_to_questions" */
  quiz_tags_to_questions_aggregate: QuizTagsToQuestionsAggregate;
  /** fetch data from the table: "quiz.tags_to_questions" using primary key columns */
  quiz_tags_to_questions_by_pk?: Maybe<QuizTagsToQuestions>;
  /** fetch data from the table: "quiz.users" */
  quiz_users: Array<QuizUsers>;
  /** fetch aggregated fields from the table: "quiz.users" */
  quiz_users_aggregate: QuizUsersAggregate;
  /** fetch data from the table: "quiz.users" using primary key columns */
  quiz_users_by_pk?: Maybe<QuizUsers>;
};

export type QueryRootQuestionsArgs = {
  input: GetQuestionsInput;
};

export type QueryRootQuizAnswerTypesArgs = {
  distinct_on?: InputMaybe<Array<QuizAnswerTypesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<QuizAnswerTypesOrderBy>>;
  where?: InputMaybe<QuizAnswerTypesBoolExp>;
};

export type QueryRootQuizAnswerTypesAggregateArgs = {
  distinct_on?: InputMaybe<Array<QuizAnswerTypesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<QuizAnswerTypesOrderBy>>;
  where?: InputMaybe<QuizAnswerTypesBoolExp>;
};

export type QueryRootQuizAnswerTypesByPkArgs = {
  answer_type_id: Scalars['Int'];
};

export type QueryRootQuizAnswersArgs = {
  distinct_on?: InputMaybe<Array<QuizAnswersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<QuizAnswersOrderBy>>;
  where?: InputMaybe<QuizAnswersBoolExp>;
};

export type QueryRootQuizAnswersAggregateArgs = {
  distinct_on?: InputMaybe<Array<QuizAnswersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<QuizAnswersOrderBy>>;
  where?: InputMaybe<QuizAnswersBoolExp>;
};

export type QueryRootQuizAnswersByPkArgs = {
  id: Scalars['uuid'];
};

export type QueryRootQuizCategoriesArgs = {
  distinct_on?: InputMaybe<Array<QuizCategoriesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<QuizCategoriesOrderBy>>;
  where?: InputMaybe<QuizCategoriesBoolExp>;
};

export type QueryRootQuizCategoriesAggregateArgs = {
  distinct_on?: InputMaybe<Array<QuizCategoriesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<QuizCategoriesOrderBy>>;
  where?: InputMaybe<QuizCategoriesBoolExp>;
};

export type QueryRootQuizCategoriesByPkArgs = {
  category_id: Scalars['Int'];
};

export type QueryRootQuizQuestionsArgs = {
  distinct_on?: InputMaybe<Array<QuizQuestionsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<QuizQuestionsOrderBy>>;
  where?: InputMaybe<QuizQuestionsBoolExp>;
};

export type QueryRootQuizQuestionsAggregateArgs = {
  distinct_on?: InputMaybe<Array<QuizQuestionsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<QuizQuestionsOrderBy>>;
  where?: InputMaybe<QuizQuestionsBoolExp>;
};

export type QueryRootQuizQuestionsByPkArgs = {
  id: Scalars['uuid'];
};

export type QueryRootQuizTagsArgs = {
  distinct_on?: InputMaybe<Array<QuizTagsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<QuizTagsOrderBy>>;
  where?: InputMaybe<QuizTagsBoolExp>;
};

export type QueryRootQuizTagsAggregateArgs = {
  distinct_on?: InputMaybe<Array<QuizTagsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<QuizTagsOrderBy>>;
  where?: InputMaybe<QuizTagsBoolExp>;
};

export type QueryRootQuizTagsByPkArgs = {
  tag_id: Scalars['uuid'];
};

export type QueryRootQuizTagsToQuestionsArgs = {
  distinct_on?: InputMaybe<Array<QuizTagsToQuestionsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<QuizTagsToQuestionsOrderBy>>;
  where?: InputMaybe<QuizTagsToQuestionsBoolExp>;
};

export type QueryRootQuizTagsToQuestionsAggregateArgs = {
  distinct_on?: InputMaybe<Array<QuizTagsToQuestionsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<QuizTagsToQuestionsOrderBy>>;
  where?: InputMaybe<QuizTagsToQuestionsBoolExp>;
};

export type QueryRootQuizTagsToQuestionsByPkArgs = {
  question_id: Scalars['uuid'];
  tag_id: Scalars['uuid'];
};

export type QueryRootQuizUsersArgs = {
  distinct_on?: InputMaybe<Array<QuizUsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<QuizUsersOrderBy>>;
  where?: InputMaybe<QuizUsersBoolExp>;
};

export type QueryRootQuizUsersAggregateArgs = {
  distinct_on?: InputMaybe<Array<QuizUsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<QuizUsersOrderBy>>;
  where?: InputMaybe<QuizUsersBoolExp>;
};

export type QueryRootQuizUsersByPkArgs = {
  user_id: Scalars['uuid'];
};

/** columns and relationships of "quiz.answer_types" */
export type QuizAnswerTypes = {
  __typename?: 'quiz_answer_types';
  answer_type: Scalars['String'];
  answer_type_id: Scalars['Int'];
};

/** aggregated selection of "quiz.answer_types" */
export type QuizAnswerTypesAggregate = {
  __typename?: 'quiz_answer_types_aggregate';
  aggregate?: Maybe<QuizAnswerTypesAggregateFields>;
  nodes: Array<QuizAnswerTypes>;
};

/** aggregate fields of "quiz.answer_types" */
export type QuizAnswerTypesAggregateFields = {
  __typename?: 'quiz_answer_types_aggregate_fields';
  avg?: Maybe<QuizAnswerTypesAvgFields>;
  count: Scalars['Int'];
  max?: Maybe<QuizAnswerTypesMaxFields>;
  min?: Maybe<QuizAnswerTypesMinFields>;
  stddev?: Maybe<QuizAnswerTypesStddevFields>;
  stddev_pop?: Maybe<QuizAnswerTypesStddevPopFields>;
  stddev_samp?: Maybe<QuizAnswerTypesStddevSampFields>;
  sum?: Maybe<QuizAnswerTypesSumFields>;
  var_pop?: Maybe<QuizAnswerTypesVarPopFields>;
  var_samp?: Maybe<QuizAnswerTypesVarSampFields>;
  variance?: Maybe<QuizAnswerTypesVarianceFields>;
};

/** aggregate fields of "quiz.answer_types" */
export type QuizAnswerTypesAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<QuizAnswerTypesSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type QuizAnswerTypesAvgFields = {
  __typename?: 'quiz_answer_types_avg_fields';
  answer_type_id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "quiz.answer_types". All fields are combined with a logical 'AND'. */
export type QuizAnswerTypesBoolExp = {
  _and?: InputMaybe<Array<QuizAnswerTypesBoolExp>>;
  _not?: InputMaybe<QuizAnswerTypesBoolExp>;
  _or?: InputMaybe<Array<QuizAnswerTypesBoolExp>>;
  answer_type?: InputMaybe<StringComparisonExp>;
  answer_type_id?: InputMaybe<IntComparisonExp>;
};

/** unique or primary key constraints on table "quiz.answer_types" */
export type QuizAnswerTypesConstraint =
  /** unique or primary key constraint on columns "answer_type_id" */
  'answer_types_pkey';

/** input type for incrementing numeric columns in table "quiz.answer_types" */
export type QuizAnswerTypesIncInput = {
  answer_type_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "quiz.answer_types" */
export type QuizAnswerTypesInsertInput = {
  answer_type?: InputMaybe<Scalars['String']>;
  answer_type_id?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type QuizAnswerTypesMaxFields = {
  __typename?: 'quiz_answer_types_max_fields';
  answer_type?: Maybe<Scalars['String']>;
  answer_type_id?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type QuizAnswerTypesMinFields = {
  __typename?: 'quiz_answer_types_min_fields';
  answer_type?: Maybe<Scalars['String']>;
  answer_type_id?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "quiz.answer_types" */
export type QuizAnswerTypesMutationResponse = {
  __typename?: 'quiz_answer_types_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<QuizAnswerTypes>;
};

/** input type for inserting object relation for remote table "quiz.answer_types" */
export type QuizAnswerTypesObjRelInsertInput = {
  data: QuizAnswerTypesInsertInput;
  /** upsert condition */
  on_conflict?: InputMaybe<QuizAnswerTypesOnConflict>;
};

/** on_conflict condition type for table "quiz.answer_types" */
export type QuizAnswerTypesOnConflict = {
  constraint: QuizAnswerTypesConstraint;
  update_columns?: Array<QuizAnswerTypesUpdateColumn>;
  where?: InputMaybe<QuizAnswerTypesBoolExp>;
};

/** Ordering options when selecting data from "quiz.answer_types". */
export type QuizAnswerTypesOrderBy = {
  answer_type?: InputMaybe<OrderBy>;
  answer_type_id?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: quiz.answer_types */
export type QuizAnswerTypesPkColumnsInput = {
  answer_type_id: Scalars['Int'];
};

/** select columns of table "quiz.answer_types" */
export type QuizAnswerTypesSelectColumn =
  /** column name */
  | 'answer_type'
  /** column name */
  | 'answer_type_id';

/** input type for updating data in table "quiz.answer_types" */
export type QuizAnswerTypesSetInput = {
  answer_type?: InputMaybe<Scalars['String']>;
  answer_type_id?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type QuizAnswerTypesStddevFields = {
  __typename?: 'quiz_answer_types_stddev_fields';
  answer_type_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type QuizAnswerTypesStddevPopFields = {
  __typename?: 'quiz_answer_types_stddev_pop_fields';
  answer_type_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type QuizAnswerTypesStddevSampFields = {
  __typename?: 'quiz_answer_types_stddev_samp_fields';
  answer_type_id?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "quiz_answer_types" */
export type QuizAnswerTypesStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: QuizAnswerTypesStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type QuizAnswerTypesStreamCursorValueInput = {
  answer_type?: InputMaybe<Scalars['String']>;
  answer_type_id?: InputMaybe<Scalars['Int']>;
};

/** aggregate sum on columns */
export type QuizAnswerTypesSumFields = {
  __typename?: 'quiz_answer_types_sum_fields';
  answer_type_id?: Maybe<Scalars['Int']>;
};

/** update columns of table "quiz.answer_types" */
export type QuizAnswerTypesUpdateColumn =
  /** column name */
  | 'answer_type'
  /** column name */
  | 'answer_type_id';

export type QuizAnswerTypesUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<QuizAnswerTypesIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<QuizAnswerTypesSetInput>;
  where: QuizAnswerTypesBoolExp;
};

/** aggregate var_pop on columns */
export type QuizAnswerTypesVarPopFields = {
  __typename?: 'quiz_answer_types_var_pop_fields';
  answer_type_id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type QuizAnswerTypesVarSampFields = {
  __typename?: 'quiz_answer_types_var_samp_fields';
  answer_type_id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type QuizAnswerTypesVarianceFields = {
  __typename?: 'quiz_answer_types_variance_fields';
  answer_type_id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "quiz.answers" */
export type QuizAnswers = {
  __typename?: 'quiz_answers';
  answer: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  pronunciation?: Maybe<Scalars['String']>;
  question_id: Scalars['uuid'];
};

/** aggregated selection of "quiz.answers" */
export type QuizAnswersAggregate = {
  __typename?: 'quiz_answers_aggregate';
  aggregate?: Maybe<QuizAnswersAggregateFields>;
  nodes: Array<QuizAnswers>;
};

export type QuizAnswersAggregateBoolExp = {
  count?: InputMaybe<QuizAnswersAggregateBoolExpCount>;
};

export type QuizAnswersAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<QuizAnswersSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<QuizAnswersBoolExp>;
  predicate: IntComparisonExp;
};

/** aggregate fields of "quiz.answers" */
export type QuizAnswersAggregateFields = {
  __typename?: 'quiz_answers_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<QuizAnswersMaxFields>;
  min?: Maybe<QuizAnswersMinFields>;
};

/** aggregate fields of "quiz.answers" */
export type QuizAnswersAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<QuizAnswersSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "quiz.answers" */
export type QuizAnswersAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<QuizAnswersMaxOrderBy>;
  min?: InputMaybe<QuizAnswersMinOrderBy>;
};

/** input type for inserting array relation for remote table "quiz.answers" */
export type QuizAnswersArrRelInsertInput = {
  data: Array<QuizAnswersInsertInput>;
  /** upsert condition */
  on_conflict?: InputMaybe<QuizAnswersOnConflict>;
};

/** Boolean expression to filter rows from the table "quiz.answers". All fields are combined with a logical 'AND'. */
export type QuizAnswersBoolExp = {
  _and?: InputMaybe<Array<QuizAnswersBoolExp>>;
  _not?: InputMaybe<QuizAnswersBoolExp>;
  _or?: InputMaybe<Array<QuizAnswersBoolExp>>;
  answer?: InputMaybe<StringComparisonExp>;
  description?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  pronunciation?: InputMaybe<StringComparisonExp>;
  question_id?: InputMaybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "quiz.answers" */
export type QuizAnswersConstraint =
  /** unique or primary key constraint on columns "id" */
  'answers_pkey';

/** input type for inserting data into table "quiz.answers" */
export type QuizAnswersInsertInput = {
  answer?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  pronunciation?: InputMaybe<Scalars['String']>;
  question_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type QuizAnswersMaxFields = {
  __typename?: 'quiz_answers_max_fields';
  answer?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  pronunciation?: Maybe<Scalars['String']>;
  question_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "quiz.answers" */
export type QuizAnswersMaxOrderBy = {
  answer?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  pronunciation?: InputMaybe<OrderBy>;
  question_id?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type QuizAnswersMinFields = {
  __typename?: 'quiz_answers_min_fields';
  answer?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  pronunciation?: Maybe<Scalars['String']>;
  question_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "quiz.answers" */
export type QuizAnswersMinOrderBy = {
  answer?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  pronunciation?: InputMaybe<OrderBy>;
  question_id?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "quiz.answers" */
export type QuizAnswersMutationResponse = {
  __typename?: 'quiz_answers_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<QuizAnswers>;
};

/** on_conflict condition type for table "quiz.answers" */
export type QuizAnswersOnConflict = {
  constraint: QuizAnswersConstraint;
  update_columns?: Array<QuizAnswersUpdateColumn>;
  where?: InputMaybe<QuizAnswersBoolExp>;
};

/** Ordering options when selecting data from "quiz.answers". */
export type QuizAnswersOrderBy = {
  answer?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  pronunciation?: InputMaybe<OrderBy>;
  question_id?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: quiz.answers */
export type QuizAnswersPkColumnsInput = {
  id: Scalars['uuid'];
};

/** select columns of table "quiz.answers" */
export type QuizAnswersSelectColumn =
  /** column name */
  | 'answer'
  /** column name */
  | 'description'
  /** column name */
  | 'id'
  /** column name */
  | 'pronunciation'
  /** column name */
  | 'question_id';

/** input type for updating data in table "quiz.answers" */
export type QuizAnswersSetInput = {
  answer?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  pronunciation?: InputMaybe<Scalars['String']>;
  question_id?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "quiz_answers" */
export type QuizAnswersStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: QuizAnswersStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type QuizAnswersStreamCursorValueInput = {
  answer?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  pronunciation?: InputMaybe<Scalars['String']>;
  question_id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "quiz.answers" */
export type QuizAnswersUpdateColumn =
  /** column name */
  | 'answer'
  /** column name */
  | 'description'
  /** column name */
  | 'id'
  /** column name */
  | 'pronunciation'
  /** column name */
  | 'question_id';

export type QuizAnswersUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<QuizAnswersSetInput>;
  where: QuizAnswersBoolExp;
};

/** クイズのジャンル */
export type QuizCategories = {
  __typename?: 'quiz_categories';
  category: Scalars['String'];
  category_id: Scalars['Int'];
};

/** aggregated selection of "quiz.categories" */
export type QuizCategoriesAggregate = {
  __typename?: 'quiz_categories_aggregate';
  aggregate?: Maybe<QuizCategoriesAggregateFields>;
  nodes: Array<QuizCategories>;
};

/** aggregate fields of "quiz.categories" */
export type QuizCategoriesAggregateFields = {
  __typename?: 'quiz_categories_aggregate_fields';
  avg?: Maybe<QuizCategoriesAvgFields>;
  count: Scalars['Int'];
  max?: Maybe<QuizCategoriesMaxFields>;
  min?: Maybe<QuizCategoriesMinFields>;
  stddev?: Maybe<QuizCategoriesStddevFields>;
  stddev_pop?: Maybe<QuizCategoriesStddevPopFields>;
  stddev_samp?: Maybe<QuizCategoriesStddevSampFields>;
  sum?: Maybe<QuizCategoriesSumFields>;
  var_pop?: Maybe<QuizCategoriesVarPopFields>;
  var_samp?: Maybe<QuizCategoriesVarSampFields>;
  variance?: Maybe<QuizCategoriesVarianceFields>;
};

/** aggregate fields of "quiz.categories" */
export type QuizCategoriesAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<QuizCategoriesSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type QuizCategoriesAvgFields = {
  __typename?: 'quiz_categories_avg_fields';
  category_id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "quiz.categories". All fields are combined with a logical 'AND'. */
export type QuizCategoriesBoolExp = {
  _and?: InputMaybe<Array<QuizCategoriesBoolExp>>;
  _not?: InputMaybe<QuizCategoriesBoolExp>;
  _or?: InputMaybe<Array<QuizCategoriesBoolExp>>;
  category?: InputMaybe<StringComparisonExp>;
  category_id?: InputMaybe<IntComparisonExp>;
};

/** unique or primary key constraints on table "quiz.categories" */
export type QuizCategoriesConstraint =
  /** unique or primary key constraint on columns "category_id" */
  'categories_pkey';

/** input type for incrementing numeric columns in table "quiz.categories" */
export type QuizCategoriesIncInput = {
  category_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "quiz.categories" */
export type QuizCategoriesInsertInput = {
  category?: InputMaybe<Scalars['String']>;
  category_id?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type QuizCategoriesMaxFields = {
  __typename?: 'quiz_categories_max_fields';
  category?: Maybe<Scalars['String']>;
  category_id?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type QuizCategoriesMinFields = {
  __typename?: 'quiz_categories_min_fields';
  category?: Maybe<Scalars['String']>;
  category_id?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "quiz.categories" */
export type QuizCategoriesMutationResponse = {
  __typename?: 'quiz_categories_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<QuizCategories>;
};

/** input type for inserting object relation for remote table "quiz.categories" */
export type QuizCategoriesObjRelInsertInput = {
  data: QuizCategoriesInsertInput;
  /** upsert condition */
  on_conflict?: InputMaybe<QuizCategoriesOnConflict>;
};

/** on_conflict condition type for table "quiz.categories" */
export type QuizCategoriesOnConflict = {
  constraint: QuizCategoriesConstraint;
  update_columns?: Array<QuizCategoriesUpdateColumn>;
  where?: InputMaybe<QuizCategoriesBoolExp>;
};

/** Ordering options when selecting data from "quiz.categories". */
export type QuizCategoriesOrderBy = {
  category?: InputMaybe<OrderBy>;
  category_id?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: quiz.categories */
export type QuizCategoriesPkColumnsInput = {
  category_id: Scalars['Int'];
};

/** select columns of table "quiz.categories" */
export type QuizCategoriesSelectColumn =
  /** column name */
  | 'category'
  /** column name */
  | 'category_id';

/** input type for updating data in table "quiz.categories" */
export type QuizCategoriesSetInput = {
  category?: InputMaybe<Scalars['String']>;
  category_id?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type QuizCategoriesStddevFields = {
  __typename?: 'quiz_categories_stddev_fields';
  category_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type QuizCategoriesStddevPopFields = {
  __typename?: 'quiz_categories_stddev_pop_fields';
  category_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type QuizCategoriesStddevSampFields = {
  __typename?: 'quiz_categories_stddev_samp_fields';
  category_id?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "quiz_categories" */
export type QuizCategoriesStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: QuizCategoriesStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type QuizCategoriesStreamCursorValueInput = {
  category?: InputMaybe<Scalars['String']>;
  category_id?: InputMaybe<Scalars['Int']>;
};

/** aggregate sum on columns */
export type QuizCategoriesSumFields = {
  __typename?: 'quiz_categories_sum_fields';
  category_id?: Maybe<Scalars['Int']>;
};

/** update columns of table "quiz.categories" */
export type QuizCategoriesUpdateColumn =
  /** column name */
  | 'category'
  /** column name */
  | 'category_id';

export type QuizCategoriesUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<QuizCategoriesIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<QuizCategoriesSetInput>;
  where: QuizCategoriesBoolExp;
};

/** aggregate var_pop on columns */
export type QuizCategoriesVarPopFields = {
  __typename?: 'quiz_categories_var_pop_fields';
  category_id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type QuizCategoriesVarSampFields = {
  __typename?: 'quiz_categories_var_samp_fields';
  category_id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type QuizCategoriesVarianceFields = {
  __typename?: 'quiz_categories_variance_fields';
  category_id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "quiz.questions" */
export type QuizQuestions = {
  __typename?: 'quiz_questions';
  answer_type_id: Scalars['Int'];
  /** An object relationship */
  answer_types_to_questions?: Maybe<QuizAnswerTypes>;
  /** An array relationship */
  answers_to_questions: Array<QuizAnswers>;
  /** An aggregate relationship */
  answers_to_questions_aggregate: QuizAnswersAggregate;
  author?: Maybe<Scalars['String']>;
  /** An object relationship */
  categories_to_questions?: Maybe<QuizCategories>;
  category_id?: Maybe<Scalars['Int']>;
  created_at: Scalars['timestamptz'];
  difficulty?: Maybe<Scalars['Int']>;
  id: Scalars['uuid'];
  question: Scalars['String'];
  serial_number: Scalars['Int'];
  /** An array relationship */
  tags_to_questions_to_questions: Array<QuizTagsToQuestions>;
  /** An aggregate relationship */
  tags_to_questions_to_questions_aggregate: QuizTagsToQuestionsAggregate;
  user_id: Scalars['uuid'];
  /** An object relationship */
  users_to_questions: QuizUsers;
};

/** columns and relationships of "quiz.questions" */
export type QuizQuestionsAnswersToQuestionsArgs = {
  distinct_on?: InputMaybe<Array<QuizAnswersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<QuizAnswersOrderBy>>;
  where?: InputMaybe<QuizAnswersBoolExp>;
};

/** columns and relationships of "quiz.questions" */
export type QuizQuestionsAnswersToQuestionsAggregateArgs = {
  distinct_on?: InputMaybe<Array<QuizAnswersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<QuizAnswersOrderBy>>;
  where?: InputMaybe<QuizAnswersBoolExp>;
};

/** columns and relationships of "quiz.questions" */
export type QuizQuestionsTagsToQuestionsToQuestionsArgs = {
  distinct_on?: InputMaybe<Array<QuizTagsToQuestionsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<QuizTagsToQuestionsOrderBy>>;
  where?: InputMaybe<QuizTagsToQuestionsBoolExp>;
};

/** columns and relationships of "quiz.questions" */
export type QuizQuestionsTagsToQuestionsToQuestionsAggregateArgs = {
  distinct_on?: InputMaybe<Array<QuizTagsToQuestionsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<QuizTagsToQuestionsOrderBy>>;
  where?: InputMaybe<QuizTagsToQuestionsBoolExp>;
};

/** aggregated selection of "quiz.questions" */
export type QuizQuestionsAggregate = {
  __typename?: 'quiz_questions_aggregate';
  aggregate?: Maybe<QuizQuestionsAggregateFields>;
  nodes: Array<QuizQuestions>;
};

/** aggregate fields of "quiz.questions" */
export type QuizQuestionsAggregateFields = {
  __typename?: 'quiz_questions_aggregate_fields';
  avg?: Maybe<QuizQuestionsAvgFields>;
  count: Scalars['Int'];
  max?: Maybe<QuizQuestionsMaxFields>;
  min?: Maybe<QuizQuestionsMinFields>;
  stddev?: Maybe<QuizQuestionsStddevFields>;
  stddev_pop?: Maybe<QuizQuestionsStddevPopFields>;
  stddev_samp?: Maybe<QuizQuestionsStddevSampFields>;
  sum?: Maybe<QuizQuestionsSumFields>;
  var_pop?: Maybe<QuizQuestionsVarPopFields>;
  var_samp?: Maybe<QuizQuestionsVarSampFields>;
  variance?: Maybe<QuizQuestionsVarianceFields>;
};

/** aggregate fields of "quiz.questions" */
export type QuizQuestionsAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<QuizQuestionsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type QuizQuestionsAvgFields = {
  __typename?: 'quiz_questions_avg_fields';
  answer_type_id?: Maybe<Scalars['Float']>;
  category_id?: Maybe<Scalars['Float']>;
  difficulty?: Maybe<Scalars['Float']>;
  serial_number?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "quiz.questions". All fields are combined with a logical 'AND'. */
export type QuizQuestionsBoolExp = {
  _and?: InputMaybe<Array<QuizQuestionsBoolExp>>;
  _not?: InputMaybe<QuizQuestionsBoolExp>;
  _or?: InputMaybe<Array<QuizQuestionsBoolExp>>;
  answer_type_id?: InputMaybe<IntComparisonExp>;
  answer_types_to_questions?: InputMaybe<QuizAnswerTypesBoolExp>;
  answers_to_questions?: InputMaybe<QuizAnswersBoolExp>;
  answers_to_questions_aggregate?: InputMaybe<QuizAnswersAggregateBoolExp>;
  author?: InputMaybe<StringComparisonExp>;
  categories_to_questions?: InputMaybe<QuizCategoriesBoolExp>;
  category_id?: InputMaybe<IntComparisonExp>;
  created_at?: InputMaybe<TimestamptzComparisonExp>;
  difficulty?: InputMaybe<IntComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  question?: InputMaybe<StringComparisonExp>;
  serial_number?: InputMaybe<IntComparisonExp>;
  tags_to_questions_to_questions?: InputMaybe<QuizTagsToQuestionsBoolExp>;
  tags_to_questions_to_questions_aggregate?: InputMaybe<QuizTagsToQuestionsAggregateBoolExp>;
  user_id?: InputMaybe<UuidComparisonExp>;
  users_to_questions?: InputMaybe<QuizUsersBoolExp>;
};

/** unique or primary key constraints on table "quiz.questions" */
export type QuizQuestionsConstraint =
  /** unique or primary key constraint on columns "id" */
  | 'questions_pkey'
  /** unique or primary key constraint on columns "serial_number" */
  | 'questions_serial_number_key';

/** input type for incrementing numeric columns in table "quiz.questions" */
export type QuizQuestionsIncInput = {
  answer_type_id?: InputMaybe<Scalars['Int']>;
  category_id?: InputMaybe<Scalars['Int']>;
  difficulty?: InputMaybe<Scalars['Int']>;
  serial_number?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "quiz.questions" */
export type QuizQuestionsInsertInput = {
  answer_type_id?: InputMaybe<Scalars['Int']>;
  answer_types_to_questions?: InputMaybe<QuizAnswerTypesObjRelInsertInput>;
  answers_to_questions?: InputMaybe<QuizAnswersArrRelInsertInput>;
  author?: InputMaybe<Scalars['String']>;
  categories_to_questions?: InputMaybe<QuizCategoriesObjRelInsertInput>;
  category_id?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  difficulty?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['uuid']>;
  question?: InputMaybe<Scalars['String']>;
  serial_number?: InputMaybe<Scalars['Int']>;
  tags_to_questions_to_questions?: InputMaybe<QuizTagsToQuestionsArrRelInsertInput>;
  user_id?: InputMaybe<Scalars['uuid']>;
  users_to_questions?: InputMaybe<QuizUsersObjRelInsertInput>;
};

/** aggregate max on columns */
export type QuizQuestionsMaxFields = {
  __typename?: 'quiz_questions_max_fields';
  answer_type_id?: Maybe<Scalars['Int']>;
  author?: Maybe<Scalars['String']>;
  category_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  difficulty?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  question?: Maybe<Scalars['String']>;
  serial_number?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type QuizQuestionsMinFields = {
  __typename?: 'quiz_questions_min_fields';
  answer_type_id?: Maybe<Scalars['Int']>;
  author?: Maybe<Scalars['String']>;
  category_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  difficulty?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  question?: Maybe<Scalars['String']>;
  serial_number?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "quiz.questions" */
export type QuizQuestionsMutationResponse = {
  __typename?: 'quiz_questions_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<QuizQuestions>;
};

/** on_conflict condition type for table "quiz.questions" */
export type QuizQuestionsOnConflict = {
  constraint: QuizQuestionsConstraint;
  update_columns?: Array<QuizQuestionsUpdateColumn>;
  where?: InputMaybe<QuizQuestionsBoolExp>;
};

/** Ordering options when selecting data from "quiz.questions". */
export type QuizQuestionsOrderBy = {
  answer_type_id?: InputMaybe<OrderBy>;
  answer_types_to_questions?: InputMaybe<QuizAnswerTypesOrderBy>;
  answers_to_questions_aggregate?: InputMaybe<QuizAnswersAggregateOrderBy>;
  author?: InputMaybe<OrderBy>;
  categories_to_questions?: InputMaybe<QuizCategoriesOrderBy>;
  category_id?: InputMaybe<OrderBy>;
  created_at?: InputMaybe<OrderBy>;
  difficulty?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  question?: InputMaybe<OrderBy>;
  serial_number?: InputMaybe<OrderBy>;
  tags_to_questions_to_questions_aggregate?: InputMaybe<QuizTagsToQuestionsAggregateOrderBy>;
  user_id?: InputMaybe<OrderBy>;
  users_to_questions?: InputMaybe<QuizUsersOrderBy>;
};

/** primary key columns input for table: quiz.questions */
export type QuizQuestionsPkColumnsInput = {
  id: Scalars['uuid'];
};

/** select columns of table "quiz.questions" */
export type QuizQuestionsSelectColumn =
  /** column name */
  | 'answer_type_id'
  /** column name */
  | 'author'
  /** column name */
  | 'category_id'
  /** column name */
  | 'created_at'
  /** column name */
  | 'difficulty'
  /** column name */
  | 'id'
  /** column name */
  | 'question'
  /** column name */
  | 'serial_number'
  /** column name */
  | 'user_id';

/** input type for updating data in table "quiz.questions" */
export type QuizQuestionsSetInput = {
  answer_type_id?: InputMaybe<Scalars['Int']>;
  author?: InputMaybe<Scalars['String']>;
  category_id?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  difficulty?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['uuid']>;
  question?: InputMaybe<Scalars['String']>;
  serial_number?: InputMaybe<Scalars['Int']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type QuizQuestionsStddevFields = {
  __typename?: 'quiz_questions_stddev_fields';
  answer_type_id?: Maybe<Scalars['Float']>;
  category_id?: Maybe<Scalars['Float']>;
  difficulty?: Maybe<Scalars['Float']>;
  serial_number?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type QuizQuestionsStddevPopFields = {
  __typename?: 'quiz_questions_stddev_pop_fields';
  answer_type_id?: Maybe<Scalars['Float']>;
  category_id?: Maybe<Scalars['Float']>;
  difficulty?: Maybe<Scalars['Float']>;
  serial_number?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type QuizQuestionsStddevSampFields = {
  __typename?: 'quiz_questions_stddev_samp_fields';
  answer_type_id?: Maybe<Scalars['Float']>;
  category_id?: Maybe<Scalars['Float']>;
  difficulty?: Maybe<Scalars['Float']>;
  serial_number?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "quiz_questions" */
export type QuizQuestionsStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: QuizQuestionsStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type QuizQuestionsStreamCursorValueInput = {
  answer_type_id?: InputMaybe<Scalars['Int']>;
  author?: InputMaybe<Scalars['String']>;
  category_id?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  difficulty?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['uuid']>;
  question?: InputMaybe<Scalars['String']>;
  serial_number?: InputMaybe<Scalars['Int']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate sum on columns */
export type QuizQuestionsSumFields = {
  __typename?: 'quiz_questions_sum_fields';
  answer_type_id?: Maybe<Scalars['Int']>;
  category_id?: Maybe<Scalars['Int']>;
  difficulty?: Maybe<Scalars['Int']>;
  serial_number?: Maybe<Scalars['Int']>;
};

/** update columns of table "quiz.questions" */
export type QuizQuestionsUpdateColumn =
  /** column name */
  | 'answer_type_id'
  /** column name */
  | 'author'
  /** column name */
  | 'category_id'
  /** column name */
  | 'created_at'
  /** column name */
  | 'difficulty'
  /** column name */
  | 'id'
  /** column name */
  | 'question'
  /** column name */
  | 'serial_number'
  /** column name */
  | 'user_id';

export type QuizQuestionsUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<QuizQuestionsIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<QuizQuestionsSetInput>;
  where: QuizQuestionsBoolExp;
};

/** aggregate var_pop on columns */
export type QuizQuestionsVarPopFields = {
  __typename?: 'quiz_questions_var_pop_fields';
  answer_type_id?: Maybe<Scalars['Float']>;
  category_id?: Maybe<Scalars['Float']>;
  difficulty?: Maybe<Scalars['Float']>;
  serial_number?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type QuizQuestionsVarSampFields = {
  __typename?: 'quiz_questions_var_samp_fields';
  answer_type_id?: Maybe<Scalars['Float']>;
  category_id?: Maybe<Scalars['Float']>;
  difficulty?: Maybe<Scalars['Float']>;
  serial_number?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type QuizQuestionsVarianceFields = {
  __typename?: 'quiz_questions_variance_fields';
  answer_type_id?: Maybe<Scalars['Float']>;
  category_id?: Maybe<Scalars['Float']>;
  difficulty?: Maybe<Scalars['Float']>;
  serial_number?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "quiz.tags" */
export type QuizTags = {
  __typename?: 'quiz_tags';
  tag: Scalars['String'];
  tag_id: Scalars['uuid'];
};

/** aggregated selection of "quiz.tags" */
export type QuizTagsAggregate = {
  __typename?: 'quiz_tags_aggregate';
  aggregate?: Maybe<QuizTagsAggregateFields>;
  nodes: Array<QuizTags>;
};

/** aggregate fields of "quiz.tags" */
export type QuizTagsAggregateFields = {
  __typename?: 'quiz_tags_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<QuizTagsMaxFields>;
  min?: Maybe<QuizTagsMinFields>;
};

/** aggregate fields of "quiz.tags" */
export type QuizTagsAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<QuizTagsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "quiz.tags". All fields are combined with a logical 'AND'. */
export type QuizTagsBoolExp = {
  _and?: InputMaybe<Array<QuizTagsBoolExp>>;
  _not?: InputMaybe<QuizTagsBoolExp>;
  _or?: InputMaybe<Array<QuizTagsBoolExp>>;
  tag?: InputMaybe<StringComparisonExp>;
  tag_id?: InputMaybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "quiz.tags" */
export type QuizTagsConstraint =
  /** unique or primary key constraint on columns "tag_id" */
  'tags_pkey';

/** input type for inserting data into table "quiz.tags" */
export type QuizTagsInsertInput = {
  tag?: InputMaybe<Scalars['String']>;
  tag_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type QuizTagsMaxFields = {
  __typename?: 'quiz_tags_max_fields';
  tag?: Maybe<Scalars['String']>;
  tag_id?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type QuizTagsMinFields = {
  __typename?: 'quiz_tags_min_fields';
  tag?: Maybe<Scalars['String']>;
  tag_id?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "quiz.tags" */
export type QuizTagsMutationResponse = {
  __typename?: 'quiz_tags_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<QuizTags>;
};

/** input type for inserting object relation for remote table "quiz.tags" */
export type QuizTagsObjRelInsertInput = {
  data: QuizTagsInsertInput;
  /** upsert condition */
  on_conflict?: InputMaybe<QuizTagsOnConflict>;
};

/** on_conflict condition type for table "quiz.tags" */
export type QuizTagsOnConflict = {
  constraint: QuizTagsConstraint;
  update_columns?: Array<QuizTagsUpdateColumn>;
  where?: InputMaybe<QuizTagsBoolExp>;
};

/** Ordering options when selecting data from "quiz.tags". */
export type QuizTagsOrderBy = {
  tag?: InputMaybe<OrderBy>;
  tag_id?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: quiz.tags */
export type QuizTagsPkColumnsInput = {
  tag_id: Scalars['uuid'];
};

/** select columns of table "quiz.tags" */
export type QuizTagsSelectColumn =
  /** column name */
  | 'tag'
  /** column name */
  | 'tag_id';

/** input type for updating data in table "quiz.tags" */
export type QuizTagsSetInput = {
  tag?: InputMaybe<Scalars['String']>;
  tag_id?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "quiz_tags" */
export type QuizTagsStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: QuizTagsStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type QuizTagsStreamCursorValueInput = {
  tag?: InputMaybe<Scalars['String']>;
  tag_id?: InputMaybe<Scalars['uuid']>;
};

/** columns and relationships of "quiz.tags_to_questions" */
export type QuizTagsToQuestions = {
  __typename?: 'quiz_tags_to_questions';
  question_id: Scalars['uuid'];
  tag_id: Scalars['uuid'];
  /** An object relationship */
  tags_to_questions_to_tags?: Maybe<QuizTags>;
};

/** aggregated selection of "quiz.tags_to_questions" */
export type QuizTagsToQuestionsAggregate = {
  __typename?: 'quiz_tags_to_questions_aggregate';
  aggregate?: Maybe<QuizTagsToQuestionsAggregateFields>;
  nodes: Array<QuizTagsToQuestions>;
};

export type QuizTagsToQuestionsAggregateBoolExp = {
  count?: InputMaybe<QuizTagsToQuestionsAggregateBoolExpCount>;
};

export type QuizTagsToQuestionsAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<QuizTagsToQuestionsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<QuizTagsToQuestionsBoolExp>;
  predicate: IntComparisonExp;
};

/** aggregate fields of "quiz.tags_to_questions" */
export type QuizTagsToQuestionsAggregateFields = {
  __typename?: 'quiz_tags_to_questions_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<QuizTagsToQuestionsMaxFields>;
  min?: Maybe<QuizTagsToQuestionsMinFields>;
};

/** aggregate fields of "quiz.tags_to_questions" */
export type QuizTagsToQuestionsAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<QuizTagsToQuestionsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "quiz.tags_to_questions" */
export type QuizTagsToQuestionsAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<QuizTagsToQuestionsMaxOrderBy>;
  min?: InputMaybe<QuizTagsToQuestionsMinOrderBy>;
};

/** input type for inserting array relation for remote table "quiz.tags_to_questions" */
export type QuizTagsToQuestionsArrRelInsertInput = {
  data: Array<QuizTagsToQuestionsInsertInput>;
  /** upsert condition */
  on_conflict?: InputMaybe<QuizTagsToQuestionsOnConflict>;
};

/** Boolean expression to filter rows from the table "quiz.tags_to_questions". All fields are combined with a logical 'AND'. */
export type QuizTagsToQuestionsBoolExp = {
  _and?: InputMaybe<Array<QuizTagsToQuestionsBoolExp>>;
  _not?: InputMaybe<QuizTagsToQuestionsBoolExp>;
  _or?: InputMaybe<Array<QuizTagsToQuestionsBoolExp>>;
  question_id?: InputMaybe<UuidComparisonExp>;
  tag_id?: InputMaybe<UuidComparisonExp>;
  tags_to_questions_to_tags?: InputMaybe<QuizTagsBoolExp>;
};

/** unique or primary key constraints on table "quiz.tags_to_questions" */
export type QuizTagsToQuestionsConstraint =
  /** unique or primary key constraint on columns "tag_id", "question_id" */
  'tags_to_questions_pkey';

/** input type for inserting data into table "quiz.tags_to_questions" */
export type QuizTagsToQuestionsInsertInput = {
  question_id?: InputMaybe<Scalars['uuid']>;
  tag_id?: InputMaybe<Scalars['uuid']>;
  tags_to_questions_to_tags?: InputMaybe<QuizTagsObjRelInsertInput>;
};

/** aggregate max on columns */
export type QuizTagsToQuestionsMaxFields = {
  __typename?: 'quiz_tags_to_questions_max_fields';
  question_id?: Maybe<Scalars['uuid']>;
  tag_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "quiz.tags_to_questions" */
export type QuizTagsToQuestionsMaxOrderBy = {
  question_id?: InputMaybe<OrderBy>;
  tag_id?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type QuizTagsToQuestionsMinFields = {
  __typename?: 'quiz_tags_to_questions_min_fields';
  question_id?: Maybe<Scalars['uuid']>;
  tag_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "quiz.tags_to_questions" */
export type QuizTagsToQuestionsMinOrderBy = {
  question_id?: InputMaybe<OrderBy>;
  tag_id?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "quiz.tags_to_questions" */
export type QuizTagsToQuestionsMutationResponse = {
  __typename?: 'quiz_tags_to_questions_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<QuizTagsToQuestions>;
};

/** on_conflict condition type for table "quiz.tags_to_questions" */
export type QuizTagsToQuestionsOnConflict = {
  constraint: QuizTagsToQuestionsConstraint;
  update_columns?: Array<QuizTagsToQuestionsUpdateColumn>;
  where?: InputMaybe<QuizTagsToQuestionsBoolExp>;
};

/** Ordering options when selecting data from "quiz.tags_to_questions". */
export type QuizTagsToQuestionsOrderBy = {
  question_id?: InputMaybe<OrderBy>;
  tag_id?: InputMaybe<OrderBy>;
  tags_to_questions_to_tags?: InputMaybe<QuizTagsOrderBy>;
};

/** primary key columns input for table: quiz.tags_to_questions */
export type QuizTagsToQuestionsPkColumnsInput = {
  question_id: Scalars['uuid'];
  tag_id: Scalars['uuid'];
};

/** select columns of table "quiz.tags_to_questions" */
export type QuizTagsToQuestionsSelectColumn =
  /** column name */
  | 'question_id'
  /** column name */
  | 'tag_id';

/** input type for updating data in table "quiz.tags_to_questions" */
export type QuizTagsToQuestionsSetInput = {
  question_id?: InputMaybe<Scalars['uuid']>;
  tag_id?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "quiz_tags_to_questions" */
export type QuizTagsToQuestionsStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: QuizTagsToQuestionsStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type QuizTagsToQuestionsStreamCursorValueInput = {
  question_id?: InputMaybe<Scalars['uuid']>;
  tag_id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "quiz.tags_to_questions" */
export type QuizTagsToQuestionsUpdateColumn =
  /** column name */
  | 'question_id'
  /** column name */
  | 'tag_id';

export type QuizTagsToQuestionsUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<QuizTagsToQuestionsSetInput>;
  where: QuizTagsToQuestionsBoolExp;
};

/** update columns of table "quiz.tags" */
export type QuizTagsUpdateColumn =
  /** column name */
  | 'tag'
  /** column name */
  | 'tag_id';

export type QuizTagsUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<QuizTagsSetInput>;
  where: QuizTagsBoolExp;
};

/** ユーザー */
export type QuizUsers = {
  __typename?: 'quiz_users';
  user_id: Scalars['uuid'];
  user_name: Scalars['String'];
};

/** aggregated selection of "quiz.users" */
export type QuizUsersAggregate = {
  __typename?: 'quiz_users_aggregate';
  aggregate?: Maybe<QuizUsersAggregateFields>;
  nodes: Array<QuizUsers>;
};

/** aggregate fields of "quiz.users" */
export type QuizUsersAggregateFields = {
  __typename?: 'quiz_users_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<QuizUsersMaxFields>;
  min?: Maybe<QuizUsersMinFields>;
};

/** aggregate fields of "quiz.users" */
export type QuizUsersAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<QuizUsersSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "quiz.users". All fields are combined with a logical 'AND'. */
export type QuizUsersBoolExp = {
  _and?: InputMaybe<Array<QuizUsersBoolExp>>;
  _not?: InputMaybe<QuizUsersBoolExp>;
  _or?: InputMaybe<Array<QuizUsersBoolExp>>;
  user_id?: InputMaybe<UuidComparisonExp>;
  user_name?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "quiz.users" */
export type QuizUsersConstraint =
  /** unique or primary key constraint on columns "user_id" */
  'users_pkey';

/** input type for inserting data into table "quiz.users" */
export type QuizUsersInsertInput = {
  user_id?: InputMaybe<Scalars['uuid']>;
  user_name?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type QuizUsersMaxFields = {
  __typename?: 'quiz_users_max_fields';
  user_id?: Maybe<Scalars['uuid']>;
  user_name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type QuizUsersMinFields = {
  __typename?: 'quiz_users_min_fields';
  user_id?: Maybe<Scalars['uuid']>;
  user_name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "quiz.users" */
export type QuizUsersMutationResponse = {
  __typename?: 'quiz_users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<QuizUsers>;
};

/** input type for inserting object relation for remote table "quiz.users" */
export type QuizUsersObjRelInsertInput = {
  data: QuizUsersInsertInput;
  /** upsert condition */
  on_conflict?: InputMaybe<QuizUsersOnConflict>;
};

/** on_conflict condition type for table "quiz.users" */
export type QuizUsersOnConflict = {
  constraint: QuizUsersConstraint;
  update_columns?: Array<QuizUsersUpdateColumn>;
  where?: InputMaybe<QuizUsersBoolExp>;
};

/** Ordering options when selecting data from "quiz.users". */
export type QuizUsersOrderBy = {
  user_id?: InputMaybe<OrderBy>;
  user_name?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: quiz.users */
export type QuizUsersPkColumnsInput = {
  user_id: Scalars['uuid'];
};

/** select columns of table "quiz.users" */
export type QuizUsersSelectColumn =
  /** column name */
  | 'user_id'
  /** column name */
  | 'user_name';

/** input type for updating data in table "quiz.users" */
export type QuizUsersSetInput = {
  user_id?: InputMaybe<Scalars['uuid']>;
  user_name?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "quiz_users" */
export type QuizUsersStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: QuizUsersStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type QuizUsersStreamCursorValueInput = {
  user_id?: InputMaybe<Scalars['uuid']>;
  user_name?: InputMaybe<Scalars['String']>;
};

/** update columns of table "quiz.users" */
export type QuizUsersUpdateColumn =
  /** column name */
  | 'user_id'
  /** column name */
  | 'user_name';

export type QuizUsersUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<QuizUsersSetInput>;
  where: QuizUsersBoolExp;
};

export type SubscriptionRoot = {
  __typename?: 'subscription_root';
  _dummy?: Maybe<Scalars['Boolean']>;
  /** fetch data from the table: "quiz.answer_types" */
  quiz_answer_types: Array<QuizAnswerTypes>;
  /** fetch aggregated fields from the table: "quiz.answer_types" */
  quiz_answer_types_aggregate: QuizAnswerTypesAggregate;
  /** fetch data from the table: "quiz.answer_types" using primary key columns */
  quiz_answer_types_by_pk?: Maybe<QuizAnswerTypes>;
  /** fetch data from the table in a streaming manner: "quiz.answer_types" */
  quiz_answer_types_stream: Array<QuizAnswerTypes>;
  /** fetch data from the table: "quiz.answers" */
  quiz_answers: Array<QuizAnswers>;
  /** fetch aggregated fields from the table: "quiz.answers" */
  quiz_answers_aggregate: QuizAnswersAggregate;
  /** fetch data from the table: "quiz.answers" using primary key columns */
  quiz_answers_by_pk?: Maybe<QuizAnswers>;
  /** fetch data from the table in a streaming manner: "quiz.answers" */
  quiz_answers_stream: Array<QuizAnswers>;
  /** fetch data from the table: "quiz.categories" */
  quiz_categories: Array<QuizCategories>;
  /** fetch aggregated fields from the table: "quiz.categories" */
  quiz_categories_aggregate: QuizCategoriesAggregate;
  /** fetch data from the table: "quiz.categories" using primary key columns */
  quiz_categories_by_pk?: Maybe<QuizCategories>;
  /** fetch data from the table in a streaming manner: "quiz.categories" */
  quiz_categories_stream: Array<QuizCategories>;
  /** fetch data from the table: "quiz.questions" */
  quiz_questions: Array<QuizQuestions>;
  /** fetch aggregated fields from the table: "quiz.questions" */
  quiz_questions_aggregate: QuizQuestionsAggregate;
  /** fetch data from the table: "quiz.questions" using primary key columns */
  quiz_questions_by_pk?: Maybe<QuizQuestions>;
  /** fetch data from the table in a streaming manner: "quiz.questions" */
  quiz_questions_stream: Array<QuizQuestions>;
  /** fetch data from the table: "quiz.tags" */
  quiz_tags: Array<QuizTags>;
  /** fetch aggregated fields from the table: "quiz.tags" */
  quiz_tags_aggregate: QuizTagsAggregate;
  /** fetch data from the table: "quiz.tags" using primary key columns */
  quiz_tags_by_pk?: Maybe<QuizTags>;
  /** fetch data from the table in a streaming manner: "quiz.tags" */
  quiz_tags_stream: Array<QuizTags>;
  /** fetch data from the table: "quiz.tags_to_questions" */
  quiz_tags_to_questions: Array<QuizTagsToQuestions>;
  /** fetch aggregated fields from the table: "quiz.tags_to_questions" */
  quiz_tags_to_questions_aggregate: QuizTagsToQuestionsAggregate;
  /** fetch data from the table: "quiz.tags_to_questions" using primary key columns */
  quiz_tags_to_questions_by_pk?: Maybe<QuizTagsToQuestions>;
  /** fetch data from the table in a streaming manner: "quiz.tags_to_questions" */
  quiz_tags_to_questions_stream: Array<QuizTagsToQuestions>;
  /** fetch data from the table: "quiz.users" */
  quiz_users: Array<QuizUsers>;
  /** fetch aggregated fields from the table: "quiz.users" */
  quiz_users_aggregate: QuizUsersAggregate;
  /** fetch data from the table: "quiz.users" using primary key columns */
  quiz_users_by_pk?: Maybe<QuizUsers>;
  /** fetch data from the table in a streaming manner: "quiz.users" */
  quiz_users_stream: Array<QuizUsers>;
};

export type SubscriptionRootQuizAnswerTypesArgs = {
  distinct_on?: InputMaybe<Array<QuizAnswerTypesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<QuizAnswerTypesOrderBy>>;
  where?: InputMaybe<QuizAnswerTypesBoolExp>;
};

export type SubscriptionRootQuizAnswerTypesAggregateArgs = {
  distinct_on?: InputMaybe<Array<QuizAnswerTypesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<QuizAnswerTypesOrderBy>>;
  where?: InputMaybe<QuizAnswerTypesBoolExp>;
};

export type SubscriptionRootQuizAnswerTypesByPkArgs = {
  answer_type_id: Scalars['Int'];
};

export type SubscriptionRootQuizAnswerTypesStreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<QuizAnswerTypesStreamCursorInput>>;
  where?: InputMaybe<QuizAnswerTypesBoolExp>;
};

export type SubscriptionRootQuizAnswersArgs = {
  distinct_on?: InputMaybe<Array<QuizAnswersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<QuizAnswersOrderBy>>;
  where?: InputMaybe<QuizAnswersBoolExp>;
};

export type SubscriptionRootQuizAnswersAggregateArgs = {
  distinct_on?: InputMaybe<Array<QuizAnswersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<QuizAnswersOrderBy>>;
  where?: InputMaybe<QuizAnswersBoolExp>;
};

export type SubscriptionRootQuizAnswersByPkArgs = {
  id: Scalars['uuid'];
};

export type SubscriptionRootQuizAnswersStreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<QuizAnswersStreamCursorInput>>;
  where?: InputMaybe<QuizAnswersBoolExp>;
};

export type SubscriptionRootQuizCategoriesArgs = {
  distinct_on?: InputMaybe<Array<QuizCategoriesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<QuizCategoriesOrderBy>>;
  where?: InputMaybe<QuizCategoriesBoolExp>;
};

export type SubscriptionRootQuizCategoriesAggregateArgs = {
  distinct_on?: InputMaybe<Array<QuizCategoriesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<QuizCategoriesOrderBy>>;
  where?: InputMaybe<QuizCategoriesBoolExp>;
};

export type SubscriptionRootQuizCategoriesByPkArgs = {
  category_id: Scalars['Int'];
};

export type SubscriptionRootQuizCategoriesStreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<QuizCategoriesStreamCursorInput>>;
  where?: InputMaybe<QuizCategoriesBoolExp>;
};

export type SubscriptionRootQuizQuestionsArgs = {
  distinct_on?: InputMaybe<Array<QuizQuestionsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<QuizQuestionsOrderBy>>;
  where?: InputMaybe<QuizQuestionsBoolExp>;
};

export type SubscriptionRootQuizQuestionsAggregateArgs = {
  distinct_on?: InputMaybe<Array<QuizQuestionsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<QuizQuestionsOrderBy>>;
  where?: InputMaybe<QuizQuestionsBoolExp>;
};

export type SubscriptionRootQuizQuestionsByPkArgs = {
  id: Scalars['uuid'];
};

export type SubscriptionRootQuizQuestionsStreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<QuizQuestionsStreamCursorInput>>;
  where?: InputMaybe<QuizQuestionsBoolExp>;
};

export type SubscriptionRootQuizTagsArgs = {
  distinct_on?: InputMaybe<Array<QuizTagsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<QuizTagsOrderBy>>;
  where?: InputMaybe<QuizTagsBoolExp>;
};

export type SubscriptionRootQuizTagsAggregateArgs = {
  distinct_on?: InputMaybe<Array<QuizTagsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<QuizTagsOrderBy>>;
  where?: InputMaybe<QuizTagsBoolExp>;
};

export type SubscriptionRootQuizTagsByPkArgs = {
  tag_id: Scalars['uuid'];
};

export type SubscriptionRootQuizTagsStreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<QuizTagsStreamCursorInput>>;
  where?: InputMaybe<QuizTagsBoolExp>;
};

export type SubscriptionRootQuizTagsToQuestionsArgs = {
  distinct_on?: InputMaybe<Array<QuizTagsToQuestionsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<QuizTagsToQuestionsOrderBy>>;
  where?: InputMaybe<QuizTagsToQuestionsBoolExp>;
};

export type SubscriptionRootQuizTagsToQuestionsAggregateArgs = {
  distinct_on?: InputMaybe<Array<QuizTagsToQuestionsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<QuizTagsToQuestionsOrderBy>>;
  where?: InputMaybe<QuizTagsToQuestionsBoolExp>;
};

export type SubscriptionRootQuizTagsToQuestionsByPkArgs = {
  question_id: Scalars['uuid'];
  tag_id: Scalars['uuid'];
};

export type SubscriptionRootQuizTagsToQuestionsStreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<QuizTagsToQuestionsStreamCursorInput>>;
  where?: InputMaybe<QuizTagsToQuestionsBoolExp>;
};

export type SubscriptionRootQuizUsersArgs = {
  distinct_on?: InputMaybe<Array<QuizUsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<QuizUsersOrderBy>>;
  where?: InputMaybe<QuizUsersBoolExp>;
};

export type SubscriptionRootQuizUsersAggregateArgs = {
  distinct_on?: InputMaybe<Array<QuizUsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<QuizUsersOrderBy>>;
  where?: InputMaybe<QuizUsersBoolExp>;
};

export type SubscriptionRootQuizUsersByPkArgs = {
  user_id: Scalars['uuid'];
};

export type SubscriptionRootQuizUsersStreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<QuizUsersStreamCursorInput>>;
  where?: InputMaybe<QuizUsersBoolExp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type TimestamptzComparisonExp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type UuidComparisonExp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {},
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo,
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo,
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {},
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  AddQuestionFailResponse: ResolverTypeWrapper<AddQuestionFailResponse>;
  AddQuestionInput: AddQuestionInput;
  AddQuestionResult:
    | ResolversTypes['AddQuestionFailResponse']
    | ResolversTypes['AddQuestionSuccessResponse'];
  AddQuestionSuccessResponse: ResolverTypeWrapper<AddQuestionSuccessResponse>;
  AddTagInput: AddTagInput;
  AddTagResponse: ResolverTypeWrapper<AddTagResponse>;
  Answer: ResolverTypeWrapper<Answer>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  GetQuestionsInput: GetQuestionsInput;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Int_comparison_exp: IntComparisonExp;
  Mutation: ResolverTypeWrapper<
    Omit<Mutation, 'addQuestion'> & {
      addQuestion: ResolversTypes['AddQuestionResult'];
    }
  >;
  Query: ResolverTypeWrapper<Query>;
  Question: ResolverTypeWrapper<Question>;
  String: ResolverTypeWrapper<Scalars['String']>;
  String_comparison_exp: StringComparisonExp;
  Subscription: ResolverTypeWrapper<Subscription>;
  cursor_ordering: CursorOrdering;
  mutation_root: ResolverTypeWrapper<{}>;
  order_by: OrderBy;
  query_root: ResolverTypeWrapper<{}>;
  quiz_answer_types: ResolverTypeWrapper<QuizAnswerTypes>;
  quiz_answer_types_aggregate: ResolverTypeWrapper<QuizAnswerTypesAggregate>;
  quiz_answer_types_aggregate_fields: ResolverTypeWrapper<QuizAnswerTypesAggregateFields>;
  quiz_answer_types_avg_fields: ResolverTypeWrapper<QuizAnswerTypesAvgFields>;
  quiz_answer_types_bool_exp: QuizAnswerTypesBoolExp;
  quiz_answer_types_constraint: QuizAnswerTypesConstraint;
  quiz_answer_types_inc_input: QuizAnswerTypesIncInput;
  quiz_answer_types_insert_input: QuizAnswerTypesInsertInput;
  quiz_answer_types_max_fields: ResolverTypeWrapper<QuizAnswerTypesMaxFields>;
  quiz_answer_types_min_fields: ResolverTypeWrapper<QuizAnswerTypesMinFields>;
  quiz_answer_types_mutation_response: ResolverTypeWrapper<QuizAnswerTypesMutationResponse>;
  quiz_answer_types_obj_rel_insert_input: QuizAnswerTypesObjRelInsertInput;
  quiz_answer_types_on_conflict: QuizAnswerTypesOnConflict;
  quiz_answer_types_order_by: QuizAnswerTypesOrderBy;
  quiz_answer_types_pk_columns_input: QuizAnswerTypesPkColumnsInput;
  quiz_answer_types_select_column: QuizAnswerTypesSelectColumn;
  quiz_answer_types_set_input: QuizAnswerTypesSetInput;
  quiz_answer_types_stddev_fields: ResolverTypeWrapper<QuizAnswerTypesStddevFields>;
  quiz_answer_types_stddev_pop_fields: ResolverTypeWrapper<QuizAnswerTypesStddevPopFields>;
  quiz_answer_types_stddev_samp_fields: ResolverTypeWrapper<QuizAnswerTypesStddevSampFields>;
  quiz_answer_types_stream_cursor_input: QuizAnswerTypesStreamCursorInput;
  quiz_answer_types_stream_cursor_value_input: QuizAnswerTypesStreamCursorValueInput;
  quiz_answer_types_sum_fields: ResolverTypeWrapper<QuizAnswerTypesSumFields>;
  quiz_answer_types_update_column: QuizAnswerTypesUpdateColumn;
  quiz_answer_types_updates: QuizAnswerTypesUpdates;
  quiz_answer_types_var_pop_fields: ResolverTypeWrapper<QuizAnswerTypesVarPopFields>;
  quiz_answer_types_var_samp_fields: ResolverTypeWrapper<QuizAnswerTypesVarSampFields>;
  quiz_answer_types_variance_fields: ResolverTypeWrapper<QuizAnswerTypesVarianceFields>;
  quiz_answers: ResolverTypeWrapper<QuizAnswers>;
  quiz_answers_aggregate: ResolverTypeWrapper<QuizAnswersAggregate>;
  quiz_answers_aggregate_bool_exp: QuizAnswersAggregateBoolExp;
  quiz_answers_aggregate_bool_exp_count: QuizAnswersAggregateBoolExpCount;
  quiz_answers_aggregate_fields: ResolverTypeWrapper<QuizAnswersAggregateFields>;
  quiz_answers_aggregate_order_by: QuizAnswersAggregateOrderBy;
  quiz_answers_arr_rel_insert_input: QuizAnswersArrRelInsertInput;
  quiz_answers_bool_exp: QuizAnswersBoolExp;
  quiz_answers_constraint: QuizAnswersConstraint;
  quiz_answers_insert_input: QuizAnswersInsertInput;
  quiz_answers_max_fields: ResolverTypeWrapper<QuizAnswersMaxFields>;
  quiz_answers_max_order_by: QuizAnswersMaxOrderBy;
  quiz_answers_min_fields: ResolverTypeWrapper<QuizAnswersMinFields>;
  quiz_answers_min_order_by: QuizAnswersMinOrderBy;
  quiz_answers_mutation_response: ResolverTypeWrapper<QuizAnswersMutationResponse>;
  quiz_answers_on_conflict: QuizAnswersOnConflict;
  quiz_answers_order_by: QuizAnswersOrderBy;
  quiz_answers_pk_columns_input: QuizAnswersPkColumnsInput;
  quiz_answers_select_column: QuizAnswersSelectColumn;
  quiz_answers_set_input: QuizAnswersSetInput;
  quiz_answers_stream_cursor_input: QuizAnswersStreamCursorInput;
  quiz_answers_stream_cursor_value_input: QuizAnswersStreamCursorValueInput;
  quiz_answers_update_column: QuizAnswersUpdateColumn;
  quiz_answers_updates: QuizAnswersUpdates;
  quiz_categories: ResolverTypeWrapper<QuizCategories>;
  quiz_categories_aggregate: ResolverTypeWrapper<QuizCategoriesAggregate>;
  quiz_categories_aggregate_fields: ResolverTypeWrapper<QuizCategoriesAggregateFields>;
  quiz_categories_avg_fields: ResolverTypeWrapper<QuizCategoriesAvgFields>;
  quiz_categories_bool_exp: QuizCategoriesBoolExp;
  quiz_categories_constraint: QuizCategoriesConstraint;
  quiz_categories_inc_input: QuizCategoriesIncInput;
  quiz_categories_insert_input: QuizCategoriesInsertInput;
  quiz_categories_max_fields: ResolverTypeWrapper<QuizCategoriesMaxFields>;
  quiz_categories_min_fields: ResolverTypeWrapper<QuizCategoriesMinFields>;
  quiz_categories_mutation_response: ResolverTypeWrapper<QuizCategoriesMutationResponse>;
  quiz_categories_obj_rel_insert_input: QuizCategoriesObjRelInsertInput;
  quiz_categories_on_conflict: QuizCategoriesOnConflict;
  quiz_categories_order_by: QuizCategoriesOrderBy;
  quiz_categories_pk_columns_input: QuizCategoriesPkColumnsInput;
  quiz_categories_select_column: QuizCategoriesSelectColumn;
  quiz_categories_set_input: QuizCategoriesSetInput;
  quiz_categories_stddev_fields: ResolverTypeWrapper<QuizCategoriesStddevFields>;
  quiz_categories_stddev_pop_fields: ResolverTypeWrapper<QuizCategoriesStddevPopFields>;
  quiz_categories_stddev_samp_fields: ResolverTypeWrapper<QuizCategoriesStddevSampFields>;
  quiz_categories_stream_cursor_input: QuizCategoriesStreamCursorInput;
  quiz_categories_stream_cursor_value_input: QuizCategoriesStreamCursorValueInput;
  quiz_categories_sum_fields: ResolverTypeWrapper<QuizCategoriesSumFields>;
  quiz_categories_update_column: QuizCategoriesUpdateColumn;
  quiz_categories_updates: QuizCategoriesUpdates;
  quiz_categories_var_pop_fields: ResolverTypeWrapper<QuizCategoriesVarPopFields>;
  quiz_categories_var_samp_fields: ResolverTypeWrapper<QuizCategoriesVarSampFields>;
  quiz_categories_variance_fields: ResolverTypeWrapper<QuizCategoriesVarianceFields>;
  quiz_questions: ResolverTypeWrapper<QuizQuestions>;
  quiz_questions_aggregate: ResolverTypeWrapper<QuizQuestionsAggregate>;
  quiz_questions_aggregate_fields: ResolverTypeWrapper<QuizQuestionsAggregateFields>;
  quiz_questions_avg_fields: ResolverTypeWrapper<QuizQuestionsAvgFields>;
  quiz_questions_bool_exp: QuizQuestionsBoolExp;
  quiz_questions_constraint: QuizQuestionsConstraint;
  quiz_questions_inc_input: QuizQuestionsIncInput;
  quiz_questions_insert_input: QuizQuestionsInsertInput;
  quiz_questions_max_fields: ResolverTypeWrapper<QuizQuestionsMaxFields>;
  quiz_questions_min_fields: ResolverTypeWrapper<QuizQuestionsMinFields>;
  quiz_questions_mutation_response: ResolverTypeWrapper<QuizQuestionsMutationResponse>;
  quiz_questions_on_conflict: QuizQuestionsOnConflict;
  quiz_questions_order_by: QuizQuestionsOrderBy;
  quiz_questions_pk_columns_input: QuizQuestionsPkColumnsInput;
  quiz_questions_select_column: QuizQuestionsSelectColumn;
  quiz_questions_set_input: QuizQuestionsSetInput;
  quiz_questions_stddev_fields: ResolverTypeWrapper<QuizQuestionsStddevFields>;
  quiz_questions_stddev_pop_fields: ResolverTypeWrapper<QuizQuestionsStddevPopFields>;
  quiz_questions_stddev_samp_fields: ResolverTypeWrapper<QuizQuestionsStddevSampFields>;
  quiz_questions_stream_cursor_input: QuizQuestionsStreamCursorInput;
  quiz_questions_stream_cursor_value_input: QuizQuestionsStreamCursorValueInput;
  quiz_questions_sum_fields: ResolverTypeWrapper<QuizQuestionsSumFields>;
  quiz_questions_update_column: QuizQuestionsUpdateColumn;
  quiz_questions_updates: QuizQuestionsUpdates;
  quiz_questions_var_pop_fields: ResolverTypeWrapper<QuizQuestionsVarPopFields>;
  quiz_questions_var_samp_fields: ResolverTypeWrapper<QuizQuestionsVarSampFields>;
  quiz_questions_variance_fields: ResolverTypeWrapper<QuizQuestionsVarianceFields>;
  quiz_tags: ResolverTypeWrapper<QuizTags>;
  quiz_tags_aggregate: ResolverTypeWrapper<QuizTagsAggregate>;
  quiz_tags_aggregate_fields: ResolverTypeWrapper<QuizTagsAggregateFields>;
  quiz_tags_bool_exp: QuizTagsBoolExp;
  quiz_tags_constraint: QuizTagsConstraint;
  quiz_tags_insert_input: QuizTagsInsertInput;
  quiz_tags_max_fields: ResolverTypeWrapper<QuizTagsMaxFields>;
  quiz_tags_min_fields: ResolverTypeWrapper<QuizTagsMinFields>;
  quiz_tags_mutation_response: ResolverTypeWrapper<QuizTagsMutationResponse>;
  quiz_tags_obj_rel_insert_input: QuizTagsObjRelInsertInput;
  quiz_tags_on_conflict: QuizTagsOnConflict;
  quiz_tags_order_by: QuizTagsOrderBy;
  quiz_tags_pk_columns_input: QuizTagsPkColumnsInput;
  quiz_tags_select_column: QuizTagsSelectColumn;
  quiz_tags_set_input: QuizTagsSetInput;
  quiz_tags_stream_cursor_input: QuizTagsStreamCursorInput;
  quiz_tags_stream_cursor_value_input: QuizTagsStreamCursorValueInput;
  quiz_tags_to_questions: ResolverTypeWrapper<QuizTagsToQuestions>;
  quiz_tags_to_questions_aggregate: ResolverTypeWrapper<QuizTagsToQuestionsAggregate>;
  quiz_tags_to_questions_aggregate_bool_exp: QuizTagsToQuestionsAggregateBoolExp;
  quiz_tags_to_questions_aggregate_bool_exp_count: QuizTagsToQuestionsAggregateBoolExpCount;
  quiz_tags_to_questions_aggregate_fields: ResolverTypeWrapper<QuizTagsToQuestionsAggregateFields>;
  quiz_tags_to_questions_aggregate_order_by: QuizTagsToQuestionsAggregateOrderBy;
  quiz_tags_to_questions_arr_rel_insert_input: QuizTagsToQuestionsArrRelInsertInput;
  quiz_tags_to_questions_bool_exp: QuizTagsToQuestionsBoolExp;
  quiz_tags_to_questions_constraint: QuizTagsToQuestionsConstraint;
  quiz_tags_to_questions_insert_input: QuizTagsToQuestionsInsertInput;
  quiz_tags_to_questions_max_fields: ResolverTypeWrapper<QuizTagsToQuestionsMaxFields>;
  quiz_tags_to_questions_max_order_by: QuizTagsToQuestionsMaxOrderBy;
  quiz_tags_to_questions_min_fields: ResolverTypeWrapper<QuizTagsToQuestionsMinFields>;
  quiz_tags_to_questions_min_order_by: QuizTagsToQuestionsMinOrderBy;
  quiz_tags_to_questions_mutation_response: ResolverTypeWrapper<QuizTagsToQuestionsMutationResponse>;
  quiz_tags_to_questions_on_conflict: QuizTagsToQuestionsOnConflict;
  quiz_tags_to_questions_order_by: QuizTagsToQuestionsOrderBy;
  quiz_tags_to_questions_pk_columns_input: QuizTagsToQuestionsPkColumnsInput;
  quiz_tags_to_questions_select_column: QuizTagsToQuestionsSelectColumn;
  quiz_tags_to_questions_set_input: QuizTagsToQuestionsSetInput;
  quiz_tags_to_questions_stream_cursor_input: QuizTagsToQuestionsStreamCursorInput;
  quiz_tags_to_questions_stream_cursor_value_input: QuizTagsToQuestionsStreamCursorValueInput;
  quiz_tags_to_questions_update_column: QuizTagsToQuestionsUpdateColumn;
  quiz_tags_to_questions_updates: QuizTagsToQuestionsUpdates;
  quiz_tags_update_column: QuizTagsUpdateColumn;
  quiz_tags_updates: QuizTagsUpdates;
  quiz_users: ResolverTypeWrapper<QuizUsers>;
  quiz_users_aggregate: ResolverTypeWrapper<QuizUsersAggregate>;
  quiz_users_aggregate_fields: ResolverTypeWrapper<QuizUsersAggregateFields>;
  quiz_users_bool_exp: QuizUsersBoolExp;
  quiz_users_constraint: QuizUsersConstraint;
  quiz_users_insert_input: QuizUsersInsertInput;
  quiz_users_max_fields: ResolverTypeWrapper<QuizUsersMaxFields>;
  quiz_users_min_fields: ResolverTypeWrapper<QuizUsersMinFields>;
  quiz_users_mutation_response: ResolverTypeWrapper<QuizUsersMutationResponse>;
  quiz_users_obj_rel_insert_input: QuizUsersObjRelInsertInput;
  quiz_users_on_conflict: QuizUsersOnConflict;
  quiz_users_order_by: QuizUsersOrderBy;
  quiz_users_pk_columns_input: QuizUsersPkColumnsInput;
  quiz_users_select_column: QuizUsersSelectColumn;
  quiz_users_set_input: QuizUsersSetInput;
  quiz_users_stream_cursor_input: QuizUsersStreamCursorInput;
  quiz_users_stream_cursor_value_input: QuizUsersStreamCursorValueInput;
  quiz_users_update_column: QuizUsersUpdateColumn;
  quiz_users_updates: QuizUsersUpdates;
  subscription_root: ResolverTypeWrapper<{}>;
  timestamptz: ResolverTypeWrapper<Scalars['timestamptz']>;
  timestamptz_comparison_exp: TimestamptzComparisonExp;
  uuid: ResolverTypeWrapper<Scalars['uuid']>;
  uuid_comparison_exp: UuidComparisonExp;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  AddQuestionFailResponse: AddQuestionFailResponse;
  AddQuestionInput: AddQuestionInput;
  AddQuestionResult:
    | ResolversParentTypes['AddQuestionFailResponse']
    | ResolversParentTypes['AddQuestionSuccessResponse'];
  AddQuestionSuccessResponse: AddQuestionSuccessResponse;
  AddTagInput: AddTagInput;
  AddTagResponse: AddTagResponse;
  Answer: Answer;
  Boolean: Scalars['Boolean'];
  Float: Scalars['Float'];
  GetQuestionsInput: GetQuestionsInput;
  Int: Scalars['Int'];
  Int_comparison_exp: IntComparisonExp;
  Mutation: Omit<Mutation, 'addQuestion'> & {
    addQuestion: ResolversParentTypes['AddQuestionResult'];
  };
  Query: Query;
  Question: Question;
  String: Scalars['String'];
  String_comparison_exp: StringComparisonExp;
  Subscription: Subscription;
  mutation_root: {};
  query_root: {};
  quiz_answer_types: QuizAnswerTypes;
  quiz_answer_types_aggregate: QuizAnswerTypesAggregate;
  quiz_answer_types_aggregate_fields: QuizAnswerTypesAggregateFields;
  quiz_answer_types_avg_fields: QuizAnswerTypesAvgFields;
  quiz_answer_types_bool_exp: QuizAnswerTypesBoolExp;
  quiz_answer_types_inc_input: QuizAnswerTypesIncInput;
  quiz_answer_types_insert_input: QuizAnswerTypesInsertInput;
  quiz_answer_types_max_fields: QuizAnswerTypesMaxFields;
  quiz_answer_types_min_fields: QuizAnswerTypesMinFields;
  quiz_answer_types_mutation_response: QuizAnswerTypesMutationResponse;
  quiz_answer_types_obj_rel_insert_input: QuizAnswerTypesObjRelInsertInput;
  quiz_answer_types_on_conflict: QuizAnswerTypesOnConflict;
  quiz_answer_types_order_by: QuizAnswerTypesOrderBy;
  quiz_answer_types_pk_columns_input: QuizAnswerTypesPkColumnsInput;
  quiz_answer_types_set_input: QuizAnswerTypesSetInput;
  quiz_answer_types_stddev_fields: QuizAnswerTypesStddevFields;
  quiz_answer_types_stddev_pop_fields: QuizAnswerTypesStddevPopFields;
  quiz_answer_types_stddev_samp_fields: QuizAnswerTypesStddevSampFields;
  quiz_answer_types_stream_cursor_input: QuizAnswerTypesStreamCursorInput;
  quiz_answer_types_stream_cursor_value_input: QuizAnswerTypesStreamCursorValueInput;
  quiz_answer_types_sum_fields: QuizAnswerTypesSumFields;
  quiz_answer_types_updates: QuizAnswerTypesUpdates;
  quiz_answer_types_var_pop_fields: QuizAnswerTypesVarPopFields;
  quiz_answer_types_var_samp_fields: QuizAnswerTypesVarSampFields;
  quiz_answer_types_variance_fields: QuizAnswerTypesVarianceFields;
  quiz_answers: QuizAnswers;
  quiz_answers_aggregate: QuizAnswersAggregate;
  quiz_answers_aggregate_bool_exp: QuizAnswersAggregateBoolExp;
  quiz_answers_aggregate_bool_exp_count: QuizAnswersAggregateBoolExpCount;
  quiz_answers_aggregate_fields: QuizAnswersAggregateFields;
  quiz_answers_aggregate_order_by: QuizAnswersAggregateOrderBy;
  quiz_answers_arr_rel_insert_input: QuizAnswersArrRelInsertInput;
  quiz_answers_bool_exp: QuizAnswersBoolExp;
  quiz_answers_insert_input: QuizAnswersInsertInput;
  quiz_answers_max_fields: QuizAnswersMaxFields;
  quiz_answers_max_order_by: QuizAnswersMaxOrderBy;
  quiz_answers_min_fields: QuizAnswersMinFields;
  quiz_answers_min_order_by: QuizAnswersMinOrderBy;
  quiz_answers_mutation_response: QuizAnswersMutationResponse;
  quiz_answers_on_conflict: QuizAnswersOnConflict;
  quiz_answers_order_by: QuizAnswersOrderBy;
  quiz_answers_pk_columns_input: QuizAnswersPkColumnsInput;
  quiz_answers_set_input: QuizAnswersSetInput;
  quiz_answers_stream_cursor_input: QuizAnswersStreamCursorInput;
  quiz_answers_stream_cursor_value_input: QuizAnswersStreamCursorValueInput;
  quiz_answers_updates: QuizAnswersUpdates;
  quiz_categories: QuizCategories;
  quiz_categories_aggregate: QuizCategoriesAggregate;
  quiz_categories_aggregate_fields: QuizCategoriesAggregateFields;
  quiz_categories_avg_fields: QuizCategoriesAvgFields;
  quiz_categories_bool_exp: QuizCategoriesBoolExp;
  quiz_categories_inc_input: QuizCategoriesIncInput;
  quiz_categories_insert_input: QuizCategoriesInsertInput;
  quiz_categories_max_fields: QuizCategoriesMaxFields;
  quiz_categories_min_fields: QuizCategoriesMinFields;
  quiz_categories_mutation_response: QuizCategoriesMutationResponse;
  quiz_categories_obj_rel_insert_input: QuizCategoriesObjRelInsertInput;
  quiz_categories_on_conflict: QuizCategoriesOnConflict;
  quiz_categories_order_by: QuizCategoriesOrderBy;
  quiz_categories_pk_columns_input: QuizCategoriesPkColumnsInput;
  quiz_categories_set_input: QuizCategoriesSetInput;
  quiz_categories_stddev_fields: QuizCategoriesStddevFields;
  quiz_categories_stddev_pop_fields: QuizCategoriesStddevPopFields;
  quiz_categories_stddev_samp_fields: QuizCategoriesStddevSampFields;
  quiz_categories_stream_cursor_input: QuizCategoriesStreamCursorInput;
  quiz_categories_stream_cursor_value_input: QuizCategoriesStreamCursorValueInput;
  quiz_categories_sum_fields: QuizCategoriesSumFields;
  quiz_categories_updates: QuizCategoriesUpdates;
  quiz_categories_var_pop_fields: QuizCategoriesVarPopFields;
  quiz_categories_var_samp_fields: QuizCategoriesVarSampFields;
  quiz_categories_variance_fields: QuizCategoriesVarianceFields;
  quiz_questions: QuizQuestions;
  quiz_questions_aggregate: QuizQuestionsAggregate;
  quiz_questions_aggregate_fields: QuizQuestionsAggregateFields;
  quiz_questions_avg_fields: QuizQuestionsAvgFields;
  quiz_questions_bool_exp: QuizQuestionsBoolExp;
  quiz_questions_inc_input: QuizQuestionsIncInput;
  quiz_questions_insert_input: QuizQuestionsInsertInput;
  quiz_questions_max_fields: QuizQuestionsMaxFields;
  quiz_questions_min_fields: QuizQuestionsMinFields;
  quiz_questions_mutation_response: QuizQuestionsMutationResponse;
  quiz_questions_on_conflict: QuizQuestionsOnConflict;
  quiz_questions_order_by: QuizQuestionsOrderBy;
  quiz_questions_pk_columns_input: QuizQuestionsPkColumnsInput;
  quiz_questions_set_input: QuizQuestionsSetInput;
  quiz_questions_stddev_fields: QuizQuestionsStddevFields;
  quiz_questions_stddev_pop_fields: QuizQuestionsStddevPopFields;
  quiz_questions_stddev_samp_fields: QuizQuestionsStddevSampFields;
  quiz_questions_stream_cursor_input: QuizQuestionsStreamCursorInput;
  quiz_questions_stream_cursor_value_input: QuizQuestionsStreamCursorValueInput;
  quiz_questions_sum_fields: QuizQuestionsSumFields;
  quiz_questions_updates: QuizQuestionsUpdates;
  quiz_questions_var_pop_fields: QuizQuestionsVarPopFields;
  quiz_questions_var_samp_fields: QuizQuestionsVarSampFields;
  quiz_questions_variance_fields: QuizQuestionsVarianceFields;
  quiz_tags: QuizTags;
  quiz_tags_aggregate: QuizTagsAggregate;
  quiz_tags_aggregate_fields: QuizTagsAggregateFields;
  quiz_tags_bool_exp: QuizTagsBoolExp;
  quiz_tags_insert_input: QuizTagsInsertInput;
  quiz_tags_max_fields: QuizTagsMaxFields;
  quiz_tags_min_fields: QuizTagsMinFields;
  quiz_tags_mutation_response: QuizTagsMutationResponse;
  quiz_tags_obj_rel_insert_input: QuizTagsObjRelInsertInput;
  quiz_tags_on_conflict: QuizTagsOnConflict;
  quiz_tags_order_by: QuizTagsOrderBy;
  quiz_tags_pk_columns_input: QuizTagsPkColumnsInput;
  quiz_tags_set_input: QuizTagsSetInput;
  quiz_tags_stream_cursor_input: QuizTagsStreamCursorInput;
  quiz_tags_stream_cursor_value_input: QuizTagsStreamCursorValueInput;
  quiz_tags_to_questions: QuizTagsToQuestions;
  quiz_tags_to_questions_aggregate: QuizTagsToQuestionsAggregate;
  quiz_tags_to_questions_aggregate_bool_exp: QuizTagsToQuestionsAggregateBoolExp;
  quiz_tags_to_questions_aggregate_bool_exp_count: QuizTagsToQuestionsAggregateBoolExpCount;
  quiz_tags_to_questions_aggregate_fields: QuizTagsToQuestionsAggregateFields;
  quiz_tags_to_questions_aggregate_order_by: QuizTagsToQuestionsAggregateOrderBy;
  quiz_tags_to_questions_arr_rel_insert_input: QuizTagsToQuestionsArrRelInsertInput;
  quiz_tags_to_questions_bool_exp: QuizTagsToQuestionsBoolExp;
  quiz_tags_to_questions_insert_input: QuizTagsToQuestionsInsertInput;
  quiz_tags_to_questions_max_fields: QuizTagsToQuestionsMaxFields;
  quiz_tags_to_questions_max_order_by: QuizTagsToQuestionsMaxOrderBy;
  quiz_tags_to_questions_min_fields: QuizTagsToQuestionsMinFields;
  quiz_tags_to_questions_min_order_by: QuizTagsToQuestionsMinOrderBy;
  quiz_tags_to_questions_mutation_response: QuizTagsToQuestionsMutationResponse;
  quiz_tags_to_questions_on_conflict: QuizTagsToQuestionsOnConflict;
  quiz_tags_to_questions_order_by: QuizTagsToQuestionsOrderBy;
  quiz_tags_to_questions_pk_columns_input: QuizTagsToQuestionsPkColumnsInput;
  quiz_tags_to_questions_set_input: QuizTagsToQuestionsSetInput;
  quiz_tags_to_questions_stream_cursor_input: QuizTagsToQuestionsStreamCursorInput;
  quiz_tags_to_questions_stream_cursor_value_input: QuizTagsToQuestionsStreamCursorValueInput;
  quiz_tags_to_questions_updates: QuizTagsToQuestionsUpdates;
  quiz_tags_updates: QuizTagsUpdates;
  quiz_users: QuizUsers;
  quiz_users_aggregate: QuizUsersAggregate;
  quiz_users_aggregate_fields: QuizUsersAggregateFields;
  quiz_users_bool_exp: QuizUsersBoolExp;
  quiz_users_insert_input: QuizUsersInsertInput;
  quiz_users_max_fields: QuizUsersMaxFields;
  quiz_users_min_fields: QuizUsersMinFields;
  quiz_users_mutation_response: QuizUsersMutationResponse;
  quiz_users_obj_rel_insert_input: QuizUsersObjRelInsertInput;
  quiz_users_on_conflict: QuizUsersOnConflict;
  quiz_users_order_by: QuizUsersOrderBy;
  quiz_users_pk_columns_input: QuizUsersPkColumnsInput;
  quiz_users_set_input: QuizUsersSetInput;
  quiz_users_stream_cursor_input: QuizUsersStreamCursorInput;
  quiz_users_stream_cursor_value_input: QuizUsersStreamCursorValueInput;
  quiz_users_updates: QuizUsersUpdates;
  subscription_root: {};
  timestamptz: Scalars['timestamptz'];
  timestamptz_comparison_exp: TimestamptzComparisonExp;
  uuid: Scalars['uuid'];
  uuid_comparison_exp: UuidComparisonExp;
}>;

export type CachedDirectiveArgs = {
  refresh?: Scalars['Boolean'];
  ttl?: Scalars['Int'];
};

export type CachedDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = CachedDirectiveArgs,
> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type AddQuestionFailResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['AddQuestionFailResponse'] = ResolversParentTypes['AddQuestionFailResponse'],
> = ResolversObject<{
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AddQuestionResultResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['AddQuestionResult'] = ResolversParentTypes['AddQuestionResult'],
> = ResolversObject<{
  __resolveType: TypeResolveFn<
    'AddQuestionFailResponse' | 'AddQuestionSuccessResponse',
    ParentType,
    ContextType
  >;
}>;

export type AddQuestionSuccessResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['AddQuestionSuccessResponse'] = ResolversParentTypes['AddQuestionSuccessResponse'],
> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  succeeded?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AddTagResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['AddTagResponse'] = ResolversParentTypes['AddTagResponse'],
> = ResolversObject<{
  succeeded?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AnswerResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Answer'] = ResolversParentTypes['Answer'],
> = ResolversObject<{
  answer?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  pronunciation?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation'],
> = ResolversObject<{
  _dummy?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  addQuestion?: Resolver<
    ResolversTypes['AddQuestionResult'],
    ParentType,
    ContextType,
    RequireFields<MutationAddQuestionArgs, 'input'>
  >;
  addTag?: Resolver<
    ResolversTypes['AddTagResponse'],
    ParentType,
    ContextType,
    RequireFields<MutationAddTagArgs, 'input'>
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query'],
> = ResolversObject<{
  _dummy?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QuestionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Question'] = ResolversParentTypes['Question'],
> = ResolversObject<{
  answers?: Resolver<Array<ResolversTypes['Answer']>, ParentType, ContextType>;
  author?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  difficulty?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  question?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  questionId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  serialNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  tags?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['String']>>>,
    ParentType,
    ContextType
  >;
  userName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SubscriptionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription'],
> = ResolversObject<{
  _dummy?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationRootResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['mutation_root'] = ResolversParentTypes['mutation_root'],
> = ResolversObject<{
  _dummy?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  addQuestion?: Resolver<
    ResolversTypes['AddQuestionResult'],
    ParentType,
    ContextType,
    RequireFields<MutationRootAddQuestionArgs, 'input'>
  >;
  addTag?: Resolver<
    ResolversTypes['AddTagResponse'],
    ParentType,
    ContextType,
    RequireFields<MutationRootAddTagArgs, 'input'>
  >;
  delete_quiz_answer_types?: Resolver<
    Maybe<ResolversTypes['quiz_answer_types_mutation_response']>,
    ParentType,
    ContextType,
    RequireFields<MutationRootDeleteQuizAnswerTypesArgs, 'where'>
  >;
  delete_quiz_answer_types_by_pk?: Resolver<
    Maybe<ResolversTypes['quiz_answer_types']>,
    ParentType,
    ContextType,
    RequireFields<MutationRootDeleteQuizAnswerTypesByPkArgs, 'answer_type_id'>
  >;
  delete_quiz_answers?: Resolver<
    Maybe<ResolversTypes['quiz_answers_mutation_response']>,
    ParentType,
    ContextType,
    RequireFields<MutationRootDeleteQuizAnswersArgs, 'where'>
  >;
  delete_quiz_answers_by_pk?: Resolver<
    Maybe<ResolversTypes['quiz_answers']>,
    ParentType,
    ContextType,
    RequireFields<MutationRootDeleteQuizAnswersByPkArgs, 'id'>
  >;
  delete_quiz_categories?: Resolver<
    Maybe<ResolversTypes['quiz_categories_mutation_response']>,
    ParentType,
    ContextType,
    RequireFields<MutationRootDeleteQuizCategoriesArgs, 'where'>
  >;
  delete_quiz_categories_by_pk?: Resolver<
    Maybe<ResolversTypes['quiz_categories']>,
    ParentType,
    ContextType,
    RequireFields<MutationRootDeleteQuizCategoriesByPkArgs, 'category_id'>
  >;
  delete_quiz_questions?: Resolver<
    Maybe<ResolversTypes['quiz_questions_mutation_response']>,
    ParentType,
    ContextType,
    RequireFields<MutationRootDeleteQuizQuestionsArgs, 'where'>
  >;
  delete_quiz_questions_by_pk?: Resolver<
    Maybe<ResolversTypes['quiz_questions']>,
    ParentType,
    ContextType,
    RequireFields<MutationRootDeleteQuizQuestionsByPkArgs, 'id'>
  >;
  delete_quiz_tags?: Resolver<
    Maybe<ResolversTypes['quiz_tags_mutation_response']>,
    ParentType,
    ContextType,
    RequireFields<MutationRootDeleteQuizTagsArgs, 'where'>
  >;
  delete_quiz_tags_by_pk?: Resolver<
    Maybe<ResolversTypes['quiz_tags']>,
    ParentType,
    ContextType,
    RequireFields<MutationRootDeleteQuizTagsByPkArgs, 'tag_id'>
  >;
  delete_quiz_tags_to_questions?: Resolver<
    Maybe<ResolversTypes['quiz_tags_to_questions_mutation_response']>,
    ParentType,
    ContextType,
    RequireFields<MutationRootDeleteQuizTagsToQuestionsArgs, 'where'>
  >;
  delete_quiz_tags_to_questions_by_pk?: Resolver<
    Maybe<ResolversTypes['quiz_tags_to_questions']>,
    ParentType,
    ContextType,
    RequireFields<
      MutationRootDeleteQuizTagsToQuestionsByPkArgs,
      'question_id' | 'tag_id'
    >
  >;
  delete_quiz_users?: Resolver<
    Maybe<ResolversTypes['quiz_users_mutation_response']>,
    ParentType,
    ContextType,
    RequireFields<MutationRootDeleteQuizUsersArgs, 'where'>
  >;
  delete_quiz_users_by_pk?: Resolver<
    Maybe<ResolversTypes['quiz_users']>,
    ParentType,
    ContextType,
    RequireFields<MutationRootDeleteQuizUsersByPkArgs, 'user_id'>
  >;
  insert_quiz_answer_types?: Resolver<
    Maybe<ResolversTypes['quiz_answer_types_mutation_response']>,
    ParentType,
    ContextType,
    RequireFields<MutationRootInsertQuizAnswerTypesArgs, 'objects'>
  >;
  insert_quiz_answer_types_one?: Resolver<
    Maybe<ResolversTypes['quiz_answer_types']>,
    ParentType,
    ContextType,
    RequireFields<MutationRootInsertQuizAnswerTypesOneArgs, 'object'>
  >;
  insert_quiz_answers?: Resolver<
    Maybe<ResolversTypes['quiz_answers_mutation_response']>,
    ParentType,
    ContextType,
    RequireFields<MutationRootInsertQuizAnswersArgs, 'objects'>
  >;
  insert_quiz_answers_one?: Resolver<
    Maybe<ResolversTypes['quiz_answers']>,
    ParentType,
    ContextType,
    RequireFields<MutationRootInsertQuizAnswersOneArgs, 'object'>
  >;
  insert_quiz_categories?: Resolver<
    Maybe<ResolversTypes['quiz_categories_mutation_response']>,
    ParentType,
    ContextType,
    RequireFields<MutationRootInsertQuizCategoriesArgs, 'objects'>
  >;
  insert_quiz_categories_one?: Resolver<
    Maybe<ResolversTypes['quiz_categories']>,
    ParentType,
    ContextType,
    RequireFields<MutationRootInsertQuizCategoriesOneArgs, 'object'>
  >;
  insert_quiz_questions?: Resolver<
    Maybe<ResolversTypes['quiz_questions_mutation_response']>,
    ParentType,
    ContextType,
    RequireFields<MutationRootInsertQuizQuestionsArgs, 'objects'>
  >;
  insert_quiz_questions_one?: Resolver<
    Maybe<ResolversTypes['quiz_questions']>,
    ParentType,
    ContextType,
    RequireFields<MutationRootInsertQuizQuestionsOneArgs, 'object'>
  >;
  insert_quiz_tags?: Resolver<
    Maybe<ResolversTypes['quiz_tags_mutation_response']>,
    ParentType,
    ContextType,
    RequireFields<MutationRootInsertQuizTagsArgs, 'objects'>
  >;
  insert_quiz_tags_one?: Resolver<
    Maybe<ResolversTypes['quiz_tags']>,
    ParentType,
    ContextType,
    RequireFields<MutationRootInsertQuizTagsOneArgs, 'object'>
  >;
  insert_quiz_tags_to_questions?: Resolver<
    Maybe<ResolversTypes['quiz_tags_to_questions_mutation_response']>,
    ParentType,
    ContextType,
    RequireFields<MutationRootInsertQuizTagsToQuestionsArgs, 'objects'>
  >;
  insert_quiz_tags_to_questions_one?: Resolver<
    Maybe<ResolversTypes['quiz_tags_to_questions']>,
    ParentType,
    ContextType,
    RequireFields<MutationRootInsertQuizTagsToQuestionsOneArgs, 'object'>
  >;
  insert_quiz_users?: Resolver<
    Maybe<ResolversTypes['quiz_users_mutation_response']>,
    ParentType,
    ContextType,
    RequireFields<MutationRootInsertQuizUsersArgs, 'objects'>
  >;
  insert_quiz_users_one?: Resolver<
    Maybe<ResolversTypes['quiz_users']>,
    ParentType,
    ContextType,
    RequireFields<MutationRootInsertQuizUsersOneArgs, 'object'>
  >;
  update_quiz_answer_types?: Resolver<
    Maybe<ResolversTypes['quiz_answer_types_mutation_response']>,
    ParentType,
    ContextType,
    RequireFields<MutationRootUpdateQuizAnswerTypesArgs, 'where'>
  >;
  update_quiz_answer_types_by_pk?: Resolver<
    Maybe<ResolversTypes['quiz_answer_types']>,
    ParentType,
    ContextType,
    RequireFields<MutationRootUpdateQuizAnswerTypesByPkArgs, 'pk_columns'>
  >;
  update_quiz_answer_types_many?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['quiz_answer_types_mutation_response']>>>,
    ParentType,
    ContextType,
    RequireFields<MutationRootUpdateQuizAnswerTypesManyArgs, 'updates'>
  >;
  update_quiz_answers?: Resolver<
    Maybe<ResolversTypes['quiz_answers_mutation_response']>,
    ParentType,
    ContextType,
    RequireFields<MutationRootUpdateQuizAnswersArgs, 'where'>
  >;
  update_quiz_answers_by_pk?: Resolver<
    Maybe<ResolversTypes['quiz_answers']>,
    ParentType,
    ContextType,
    RequireFields<MutationRootUpdateQuizAnswersByPkArgs, 'pk_columns'>
  >;
  update_quiz_answers_many?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['quiz_answers_mutation_response']>>>,
    ParentType,
    ContextType,
    RequireFields<MutationRootUpdateQuizAnswersManyArgs, 'updates'>
  >;
  update_quiz_categories?: Resolver<
    Maybe<ResolversTypes['quiz_categories_mutation_response']>,
    ParentType,
    ContextType,
    RequireFields<MutationRootUpdateQuizCategoriesArgs, 'where'>
  >;
  update_quiz_categories_by_pk?: Resolver<
    Maybe<ResolversTypes['quiz_categories']>,
    ParentType,
    ContextType,
    RequireFields<MutationRootUpdateQuizCategoriesByPkArgs, 'pk_columns'>
  >;
  update_quiz_categories_many?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['quiz_categories_mutation_response']>>>,
    ParentType,
    ContextType,
    RequireFields<MutationRootUpdateQuizCategoriesManyArgs, 'updates'>
  >;
  update_quiz_questions?: Resolver<
    Maybe<ResolversTypes['quiz_questions_mutation_response']>,
    ParentType,
    ContextType,
    RequireFields<MutationRootUpdateQuizQuestionsArgs, 'where'>
  >;
  update_quiz_questions_by_pk?: Resolver<
    Maybe<ResolversTypes['quiz_questions']>,
    ParentType,
    ContextType,
    RequireFields<MutationRootUpdateQuizQuestionsByPkArgs, 'pk_columns'>
  >;
  update_quiz_questions_many?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['quiz_questions_mutation_response']>>>,
    ParentType,
    ContextType,
    RequireFields<MutationRootUpdateQuizQuestionsManyArgs, 'updates'>
  >;
  update_quiz_tags?: Resolver<
    Maybe<ResolversTypes['quiz_tags_mutation_response']>,
    ParentType,
    ContextType,
    RequireFields<MutationRootUpdateQuizTagsArgs, 'where'>
  >;
  update_quiz_tags_by_pk?: Resolver<
    Maybe<ResolversTypes['quiz_tags']>,
    ParentType,
    ContextType,
    RequireFields<MutationRootUpdateQuizTagsByPkArgs, 'pk_columns'>
  >;
  update_quiz_tags_many?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['quiz_tags_mutation_response']>>>,
    ParentType,
    ContextType,
    RequireFields<MutationRootUpdateQuizTagsManyArgs, 'updates'>
  >;
  update_quiz_tags_to_questions?: Resolver<
    Maybe<ResolversTypes['quiz_tags_to_questions_mutation_response']>,
    ParentType,
    ContextType,
    RequireFields<MutationRootUpdateQuizTagsToQuestionsArgs, 'where'>
  >;
  update_quiz_tags_to_questions_by_pk?: Resolver<
    Maybe<ResolversTypes['quiz_tags_to_questions']>,
    ParentType,
    ContextType,
    RequireFields<MutationRootUpdateQuizTagsToQuestionsByPkArgs, 'pk_columns'>
  >;
  update_quiz_tags_to_questions_many?: Resolver<
    Maybe<
      Array<Maybe<ResolversTypes['quiz_tags_to_questions_mutation_response']>>
    >,
    ParentType,
    ContextType,
    RequireFields<MutationRootUpdateQuizTagsToQuestionsManyArgs, 'updates'>
  >;
  update_quiz_users?: Resolver<
    Maybe<ResolversTypes['quiz_users_mutation_response']>,
    ParentType,
    ContextType,
    RequireFields<MutationRootUpdateQuizUsersArgs, 'where'>
  >;
  update_quiz_users_by_pk?: Resolver<
    Maybe<ResolversTypes['quiz_users']>,
    ParentType,
    ContextType,
    RequireFields<MutationRootUpdateQuizUsersByPkArgs, 'pk_columns'>
  >;
  update_quiz_users_many?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['quiz_users_mutation_response']>>>,
    ParentType,
    ContextType,
    RequireFields<MutationRootUpdateQuizUsersManyArgs, 'updates'>
  >;
}>;

export type QueryRootResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['query_root'] = ResolversParentTypes['query_root'],
> = ResolversObject<{
  _dummy?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  questions?: Resolver<
    Array<Maybe<ResolversTypes['Question']>>,
    ParentType,
    ContextType,
    RequireFields<QueryRootQuestionsArgs, 'input'>
  >;
  quiz_answer_types?: Resolver<
    Array<ResolversTypes['quiz_answer_types']>,
    ParentType,
    ContextType,
    Partial<QueryRootQuizAnswerTypesArgs>
  >;
  quiz_answer_types_aggregate?: Resolver<
    ResolversTypes['quiz_answer_types_aggregate'],
    ParentType,
    ContextType,
    Partial<QueryRootQuizAnswerTypesAggregateArgs>
  >;
  quiz_answer_types_by_pk?: Resolver<
    Maybe<ResolversTypes['quiz_answer_types']>,
    ParentType,
    ContextType,
    RequireFields<QueryRootQuizAnswerTypesByPkArgs, 'answer_type_id'>
  >;
  quiz_answers?: Resolver<
    Array<ResolversTypes['quiz_answers']>,
    ParentType,
    ContextType,
    Partial<QueryRootQuizAnswersArgs>
  >;
  quiz_answers_aggregate?: Resolver<
    ResolversTypes['quiz_answers_aggregate'],
    ParentType,
    ContextType,
    Partial<QueryRootQuizAnswersAggregateArgs>
  >;
  quiz_answers_by_pk?: Resolver<
    Maybe<ResolversTypes['quiz_answers']>,
    ParentType,
    ContextType,
    RequireFields<QueryRootQuizAnswersByPkArgs, 'id'>
  >;
  quiz_categories?: Resolver<
    Array<ResolversTypes['quiz_categories']>,
    ParentType,
    ContextType,
    Partial<QueryRootQuizCategoriesArgs>
  >;
  quiz_categories_aggregate?: Resolver<
    ResolversTypes['quiz_categories_aggregate'],
    ParentType,
    ContextType,
    Partial<QueryRootQuizCategoriesAggregateArgs>
  >;
  quiz_categories_by_pk?: Resolver<
    Maybe<ResolversTypes['quiz_categories']>,
    ParentType,
    ContextType,
    RequireFields<QueryRootQuizCategoriesByPkArgs, 'category_id'>
  >;
  quiz_questions?: Resolver<
    Array<ResolversTypes['quiz_questions']>,
    ParentType,
    ContextType,
    Partial<QueryRootQuizQuestionsArgs>
  >;
  quiz_questions_aggregate?: Resolver<
    ResolversTypes['quiz_questions_aggregate'],
    ParentType,
    ContextType,
    Partial<QueryRootQuizQuestionsAggregateArgs>
  >;
  quiz_questions_by_pk?: Resolver<
    Maybe<ResolversTypes['quiz_questions']>,
    ParentType,
    ContextType,
    RequireFields<QueryRootQuizQuestionsByPkArgs, 'id'>
  >;
  quiz_tags?: Resolver<
    Array<ResolversTypes['quiz_tags']>,
    ParentType,
    ContextType,
    Partial<QueryRootQuizTagsArgs>
  >;
  quiz_tags_aggregate?: Resolver<
    ResolversTypes['quiz_tags_aggregate'],
    ParentType,
    ContextType,
    Partial<QueryRootQuizTagsAggregateArgs>
  >;
  quiz_tags_by_pk?: Resolver<
    Maybe<ResolversTypes['quiz_tags']>,
    ParentType,
    ContextType,
    RequireFields<QueryRootQuizTagsByPkArgs, 'tag_id'>
  >;
  quiz_tags_to_questions?: Resolver<
    Array<ResolversTypes['quiz_tags_to_questions']>,
    ParentType,
    ContextType,
    Partial<QueryRootQuizTagsToQuestionsArgs>
  >;
  quiz_tags_to_questions_aggregate?: Resolver<
    ResolversTypes['quiz_tags_to_questions_aggregate'],
    ParentType,
    ContextType,
    Partial<QueryRootQuizTagsToQuestionsAggregateArgs>
  >;
  quiz_tags_to_questions_by_pk?: Resolver<
    Maybe<ResolversTypes['quiz_tags_to_questions']>,
    ParentType,
    ContextType,
    RequireFields<
      QueryRootQuizTagsToQuestionsByPkArgs,
      'question_id' | 'tag_id'
    >
  >;
  quiz_users?: Resolver<
    Array<ResolversTypes['quiz_users']>,
    ParentType,
    ContextType,
    Partial<QueryRootQuizUsersArgs>
  >;
  quiz_users_aggregate?: Resolver<
    ResolversTypes['quiz_users_aggregate'],
    ParentType,
    ContextType,
    Partial<QueryRootQuizUsersAggregateArgs>
  >;
  quiz_users_by_pk?: Resolver<
    Maybe<ResolversTypes['quiz_users']>,
    ParentType,
    ContextType,
    RequireFields<QueryRootQuizUsersByPkArgs, 'user_id'>
  >;
}>;

export type QuizAnswerTypesResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['quiz_answer_types'] = ResolversParentTypes['quiz_answer_types'],
> = ResolversObject<{
  answer_type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  answer_type_id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QuizAnswerTypesAggregateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['quiz_answer_types_aggregate'] = ResolversParentTypes['quiz_answer_types_aggregate'],
> = ResolversObject<{
  aggregate?: Resolver<
    Maybe<ResolversTypes['quiz_answer_types_aggregate_fields']>,
    ParentType,
    ContextType
  >;
  nodes?: Resolver<
    Array<ResolversTypes['quiz_answer_types']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QuizAnswerTypesAggregateFieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['quiz_answer_types_aggregate_fields'] = ResolversParentTypes['quiz_answer_types_aggregate_fields'],
> = ResolversObject<{
  avg?: Resolver<
    Maybe<ResolversTypes['quiz_answer_types_avg_fields']>,
    ParentType,
    ContextType
  >;
  count?: Resolver<
    ResolversTypes['Int'],
    ParentType,
    ContextType,
    Partial<QuizAnswerTypesAggregateFieldsCountArgs>
  >;
  max?: Resolver<
    Maybe<ResolversTypes['quiz_answer_types_max_fields']>,
    ParentType,
    ContextType
  >;
  min?: Resolver<
    Maybe<ResolversTypes['quiz_answer_types_min_fields']>,
    ParentType,
    ContextType
  >;
  stddev?: Resolver<
    Maybe<ResolversTypes['quiz_answer_types_stddev_fields']>,
    ParentType,
    ContextType
  >;
  stddev_pop?: Resolver<
    Maybe<ResolversTypes['quiz_answer_types_stddev_pop_fields']>,
    ParentType,
    ContextType
  >;
  stddev_samp?: Resolver<
    Maybe<ResolversTypes['quiz_answer_types_stddev_samp_fields']>,
    ParentType,
    ContextType
  >;
  sum?: Resolver<
    Maybe<ResolversTypes['quiz_answer_types_sum_fields']>,
    ParentType,
    ContextType
  >;
  var_pop?: Resolver<
    Maybe<ResolversTypes['quiz_answer_types_var_pop_fields']>,
    ParentType,
    ContextType
  >;
  var_samp?: Resolver<
    Maybe<ResolversTypes['quiz_answer_types_var_samp_fields']>,
    ParentType,
    ContextType
  >;
  variance?: Resolver<
    Maybe<ResolversTypes['quiz_answer_types_variance_fields']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QuizAnswerTypesAvgFieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['quiz_answer_types_avg_fields'] = ResolversParentTypes['quiz_answer_types_avg_fields'],
> = ResolversObject<{
  answer_type_id?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QuizAnswerTypesMaxFieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['quiz_answer_types_max_fields'] = ResolversParentTypes['quiz_answer_types_max_fields'],
> = ResolversObject<{
  answer_type?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  answer_type_id?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QuizAnswerTypesMinFieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['quiz_answer_types_min_fields'] = ResolversParentTypes['quiz_answer_types_min_fields'],
> = ResolversObject<{
  answer_type?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  answer_type_id?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QuizAnswerTypesMutationResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['quiz_answer_types_mutation_response'] = ResolversParentTypes['quiz_answer_types_mutation_response'],
> = ResolversObject<{
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<
    Array<ResolversTypes['quiz_answer_types']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QuizAnswerTypesStddevFieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['quiz_answer_types_stddev_fields'] = ResolversParentTypes['quiz_answer_types_stddev_fields'],
> = ResolversObject<{
  answer_type_id?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QuizAnswerTypesStddevPopFieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['quiz_answer_types_stddev_pop_fields'] = ResolversParentTypes['quiz_answer_types_stddev_pop_fields'],
> = ResolversObject<{
  answer_type_id?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QuizAnswerTypesStddevSampFieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['quiz_answer_types_stddev_samp_fields'] = ResolversParentTypes['quiz_answer_types_stddev_samp_fields'],
> = ResolversObject<{
  answer_type_id?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QuizAnswerTypesSumFieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['quiz_answer_types_sum_fields'] = ResolversParentTypes['quiz_answer_types_sum_fields'],
> = ResolversObject<{
  answer_type_id?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QuizAnswerTypesVarPopFieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['quiz_answer_types_var_pop_fields'] = ResolversParentTypes['quiz_answer_types_var_pop_fields'],
> = ResolversObject<{
  answer_type_id?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QuizAnswerTypesVarSampFieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['quiz_answer_types_var_samp_fields'] = ResolversParentTypes['quiz_answer_types_var_samp_fields'],
> = ResolversObject<{
  answer_type_id?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QuizAnswerTypesVarianceFieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['quiz_answer_types_variance_fields'] = ResolversParentTypes['quiz_answer_types_variance_fields'],
> = ResolversObject<{
  answer_type_id?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QuizAnswersResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['quiz_answers'] = ResolversParentTypes['quiz_answers'],
> = ResolversObject<{
  answer?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  pronunciation?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  question_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QuizAnswersAggregateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['quiz_answers_aggregate'] = ResolversParentTypes['quiz_answers_aggregate'],
> = ResolversObject<{
  aggregate?: Resolver<
    Maybe<ResolversTypes['quiz_answers_aggregate_fields']>,
    ParentType,
    ContextType
  >;
  nodes?: Resolver<
    Array<ResolversTypes['quiz_answers']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QuizAnswersAggregateFieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['quiz_answers_aggregate_fields'] = ResolversParentTypes['quiz_answers_aggregate_fields'],
> = ResolversObject<{
  count?: Resolver<
    ResolversTypes['Int'],
    ParentType,
    ContextType,
    Partial<QuizAnswersAggregateFieldsCountArgs>
  >;
  max?: Resolver<
    Maybe<ResolversTypes['quiz_answers_max_fields']>,
    ParentType,
    ContextType
  >;
  min?: Resolver<
    Maybe<ResolversTypes['quiz_answers_min_fields']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QuizAnswersMaxFieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['quiz_answers_max_fields'] = ResolversParentTypes['quiz_answers_max_fields'],
> = ResolversObject<{
  answer?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  pronunciation?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  question_id?: Resolver<
    Maybe<ResolversTypes['uuid']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QuizAnswersMinFieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['quiz_answers_min_fields'] = ResolversParentTypes['quiz_answers_min_fields'],
> = ResolversObject<{
  answer?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  pronunciation?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  question_id?: Resolver<
    Maybe<ResolversTypes['uuid']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QuizAnswersMutationResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['quiz_answers_mutation_response'] = ResolversParentTypes['quiz_answers_mutation_response'],
> = ResolversObject<{
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<
    Array<ResolversTypes['quiz_answers']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QuizCategoriesResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['quiz_categories'] = ResolversParentTypes['quiz_categories'],
> = ResolversObject<{
  category?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  category_id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QuizCategoriesAggregateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['quiz_categories_aggregate'] = ResolversParentTypes['quiz_categories_aggregate'],
> = ResolversObject<{
  aggregate?: Resolver<
    Maybe<ResolversTypes['quiz_categories_aggregate_fields']>,
    ParentType,
    ContextType
  >;
  nodes?: Resolver<
    Array<ResolversTypes['quiz_categories']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QuizCategoriesAggregateFieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['quiz_categories_aggregate_fields'] = ResolversParentTypes['quiz_categories_aggregate_fields'],
> = ResolversObject<{
  avg?: Resolver<
    Maybe<ResolversTypes['quiz_categories_avg_fields']>,
    ParentType,
    ContextType
  >;
  count?: Resolver<
    ResolversTypes['Int'],
    ParentType,
    ContextType,
    Partial<QuizCategoriesAggregateFieldsCountArgs>
  >;
  max?: Resolver<
    Maybe<ResolversTypes['quiz_categories_max_fields']>,
    ParentType,
    ContextType
  >;
  min?: Resolver<
    Maybe<ResolversTypes['quiz_categories_min_fields']>,
    ParentType,
    ContextType
  >;
  stddev?: Resolver<
    Maybe<ResolversTypes['quiz_categories_stddev_fields']>,
    ParentType,
    ContextType
  >;
  stddev_pop?: Resolver<
    Maybe<ResolversTypes['quiz_categories_stddev_pop_fields']>,
    ParentType,
    ContextType
  >;
  stddev_samp?: Resolver<
    Maybe<ResolversTypes['quiz_categories_stddev_samp_fields']>,
    ParentType,
    ContextType
  >;
  sum?: Resolver<
    Maybe<ResolversTypes['quiz_categories_sum_fields']>,
    ParentType,
    ContextType
  >;
  var_pop?: Resolver<
    Maybe<ResolversTypes['quiz_categories_var_pop_fields']>,
    ParentType,
    ContextType
  >;
  var_samp?: Resolver<
    Maybe<ResolversTypes['quiz_categories_var_samp_fields']>,
    ParentType,
    ContextType
  >;
  variance?: Resolver<
    Maybe<ResolversTypes['quiz_categories_variance_fields']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QuizCategoriesAvgFieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['quiz_categories_avg_fields'] = ResolversParentTypes['quiz_categories_avg_fields'],
> = ResolversObject<{
  category_id?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QuizCategoriesMaxFieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['quiz_categories_max_fields'] = ResolversParentTypes['quiz_categories_max_fields'],
> = ResolversObject<{
  category?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QuizCategoriesMinFieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['quiz_categories_min_fields'] = ResolversParentTypes['quiz_categories_min_fields'],
> = ResolversObject<{
  category?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QuizCategoriesMutationResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['quiz_categories_mutation_response'] = ResolversParentTypes['quiz_categories_mutation_response'],
> = ResolversObject<{
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<
    Array<ResolversTypes['quiz_categories']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QuizCategoriesStddevFieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['quiz_categories_stddev_fields'] = ResolversParentTypes['quiz_categories_stddev_fields'],
> = ResolversObject<{
  category_id?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QuizCategoriesStddevPopFieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['quiz_categories_stddev_pop_fields'] = ResolversParentTypes['quiz_categories_stddev_pop_fields'],
> = ResolversObject<{
  category_id?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QuizCategoriesStddevSampFieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['quiz_categories_stddev_samp_fields'] = ResolversParentTypes['quiz_categories_stddev_samp_fields'],
> = ResolversObject<{
  category_id?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QuizCategoriesSumFieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['quiz_categories_sum_fields'] = ResolversParentTypes['quiz_categories_sum_fields'],
> = ResolversObject<{
  category_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QuizCategoriesVarPopFieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['quiz_categories_var_pop_fields'] = ResolversParentTypes['quiz_categories_var_pop_fields'],
> = ResolversObject<{
  category_id?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QuizCategoriesVarSampFieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['quiz_categories_var_samp_fields'] = ResolversParentTypes['quiz_categories_var_samp_fields'],
> = ResolversObject<{
  category_id?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QuizCategoriesVarianceFieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['quiz_categories_variance_fields'] = ResolversParentTypes['quiz_categories_variance_fields'],
> = ResolversObject<{
  category_id?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QuizQuestionsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['quiz_questions'] = ResolversParentTypes['quiz_questions'],
> = ResolversObject<{
  answer_type_id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  answer_types_to_questions?: Resolver<
    Maybe<ResolversTypes['quiz_answer_types']>,
    ParentType,
    ContextType
  >;
  answers_to_questions?: Resolver<
    Array<ResolversTypes['quiz_answers']>,
    ParentType,
    ContextType,
    Partial<QuizQuestionsAnswersToQuestionsArgs>
  >;
  answers_to_questions_aggregate?: Resolver<
    ResolversTypes['quiz_answers_aggregate'],
    ParentType,
    ContextType,
    Partial<QuizQuestionsAnswersToQuestionsAggregateArgs>
  >;
  author?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  categories_to_questions?: Resolver<
    Maybe<ResolversTypes['quiz_categories']>,
    ParentType,
    ContextType
  >;
  category_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  difficulty?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  question?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  serial_number?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  tags_to_questions_to_questions?: Resolver<
    Array<ResolversTypes['quiz_tags_to_questions']>,
    ParentType,
    ContextType,
    Partial<QuizQuestionsTagsToQuestionsToQuestionsArgs>
  >;
  tags_to_questions_to_questions_aggregate?: Resolver<
    ResolversTypes['quiz_tags_to_questions_aggregate'],
    ParentType,
    ContextType,
    Partial<QuizQuestionsTagsToQuestionsToQuestionsAggregateArgs>
  >;
  user_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  users_to_questions?: Resolver<
    ResolversTypes['quiz_users'],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QuizQuestionsAggregateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['quiz_questions_aggregate'] = ResolversParentTypes['quiz_questions_aggregate'],
> = ResolversObject<{
  aggregate?: Resolver<
    Maybe<ResolversTypes['quiz_questions_aggregate_fields']>,
    ParentType,
    ContextType
  >;
  nodes?: Resolver<
    Array<ResolversTypes['quiz_questions']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QuizQuestionsAggregateFieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['quiz_questions_aggregate_fields'] = ResolversParentTypes['quiz_questions_aggregate_fields'],
> = ResolversObject<{
  avg?: Resolver<
    Maybe<ResolversTypes['quiz_questions_avg_fields']>,
    ParentType,
    ContextType
  >;
  count?: Resolver<
    ResolversTypes['Int'],
    ParentType,
    ContextType,
    Partial<QuizQuestionsAggregateFieldsCountArgs>
  >;
  max?: Resolver<
    Maybe<ResolversTypes['quiz_questions_max_fields']>,
    ParentType,
    ContextType
  >;
  min?: Resolver<
    Maybe<ResolversTypes['quiz_questions_min_fields']>,
    ParentType,
    ContextType
  >;
  stddev?: Resolver<
    Maybe<ResolversTypes['quiz_questions_stddev_fields']>,
    ParentType,
    ContextType
  >;
  stddev_pop?: Resolver<
    Maybe<ResolversTypes['quiz_questions_stddev_pop_fields']>,
    ParentType,
    ContextType
  >;
  stddev_samp?: Resolver<
    Maybe<ResolversTypes['quiz_questions_stddev_samp_fields']>,
    ParentType,
    ContextType
  >;
  sum?: Resolver<
    Maybe<ResolversTypes['quiz_questions_sum_fields']>,
    ParentType,
    ContextType
  >;
  var_pop?: Resolver<
    Maybe<ResolversTypes['quiz_questions_var_pop_fields']>,
    ParentType,
    ContextType
  >;
  var_samp?: Resolver<
    Maybe<ResolversTypes['quiz_questions_var_samp_fields']>,
    ParentType,
    ContextType
  >;
  variance?: Resolver<
    Maybe<ResolversTypes['quiz_questions_variance_fields']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QuizQuestionsAvgFieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['quiz_questions_avg_fields'] = ResolversParentTypes['quiz_questions_avg_fields'],
> = ResolversObject<{
  answer_type_id?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType
  >;
  category_id?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType
  >;
  difficulty?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType
  >;
  serial_number?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QuizQuestionsMaxFieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['quiz_questions_max_fields'] = ResolversParentTypes['quiz_questions_max_fields'],
> = ResolversObject<{
  answer_type_id?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType
  >;
  author?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  created_at?: Resolver<
    Maybe<ResolversTypes['timestamptz']>,
    ParentType,
    ContextType
  >;
  difficulty?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  question?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  serial_number?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType
  >;
  user_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QuizQuestionsMinFieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['quiz_questions_min_fields'] = ResolversParentTypes['quiz_questions_min_fields'],
> = ResolversObject<{
  answer_type_id?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType
  >;
  author?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  created_at?: Resolver<
    Maybe<ResolversTypes['timestamptz']>,
    ParentType,
    ContextType
  >;
  difficulty?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  question?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  serial_number?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType
  >;
  user_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QuizQuestionsMutationResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['quiz_questions_mutation_response'] = ResolversParentTypes['quiz_questions_mutation_response'],
> = ResolversObject<{
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<
    Array<ResolversTypes['quiz_questions']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QuizQuestionsStddevFieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['quiz_questions_stddev_fields'] = ResolversParentTypes['quiz_questions_stddev_fields'],
> = ResolversObject<{
  answer_type_id?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType
  >;
  category_id?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType
  >;
  difficulty?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType
  >;
  serial_number?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QuizQuestionsStddevPopFieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['quiz_questions_stddev_pop_fields'] = ResolversParentTypes['quiz_questions_stddev_pop_fields'],
> = ResolversObject<{
  answer_type_id?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType
  >;
  category_id?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType
  >;
  difficulty?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType
  >;
  serial_number?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QuizQuestionsStddevSampFieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['quiz_questions_stddev_samp_fields'] = ResolversParentTypes['quiz_questions_stddev_samp_fields'],
> = ResolversObject<{
  answer_type_id?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType
  >;
  category_id?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType
  >;
  difficulty?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType
  >;
  serial_number?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QuizQuestionsSumFieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['quiz_questions_sum_fields'] = ResolversParentTypes['quiz_questions_sum_fields'],
> = ResolversObject<{
  answer_type_id?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType
  >;
  category_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  difficulty?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  serial_number?: Resolver<
    Maybe<ResolversTypes['Int']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QuizQuestionsVarPopFieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['quiz_questions_var_pop_fields'] = ResolversParentTypes['quiz_questions_var_pop_fields'],
> = ResolversObject<{
  answer_type_id?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType
  >;
  category_id?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType
  >;
  difficulty?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType
  >;
  serial_number?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QuizQuestionsVarSampFieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['quiz_questions_var_samp_fields'] = ResolversParentTypes['quiz_questions_var_samp_fields'],
> = ResolversObject<{
  answer_type_id?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType
  >;
  category_id?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType
  >;
  difficulty?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType
  >;
  serial_number?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QuizQuestionsVarianceFieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['quiz_questions_variance_fields'] = ResolversParentTypes['quiz_questions_variance_fields'],
> = ResolversObject<{
  answer_type_id?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType
  >;
  category_id?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType
  >;
  difficulty?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType
  >;
  serial_number?: Resolver<
    Maybe<ResolversTypes['Float']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QuizTagsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['quiz_tags'] = ResolversParentTypes['quiz_tags'],
> = ResolversObject<{
  tag?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tag_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QuizTagsAggregateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['quiz_tags_aggregate'] = ResolversParentTypes['quiz_tags_aggregate'],
> = ResolversObject<{
  aggregate?: Resolver<
    Maybe<ResolversTypes['quiz_tags_aggregate_fields']>,
    ParentType,
    ContextType
  >;
  nodes?: Resolver<Array<ResolversTypes['quiz_tags']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QuizTagsAggregateFieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['quiz_tags_aggregate_fields'] = ResolversParentTypes['quiz_tags_aggregate_fields'],
> = ResolversObject<{
  count?: Resolver<
    ResolversTypes['Int'],
    ParentType,
    ContextType,
    Partial<QuizTagsAggregateFieldsCountArgs>
  >;
  max?: Resolver<
    Maybe<ResolversTypes['quiz_tags_max_fields']>,
    ParentType,
    ContextType
  >;
  min?: Resolver<
    Maybe<ResolversTypes['quiz_tags_min_fields']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QuizTagsMaxFieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['quiz_tags_max_fields'] = ResolversParentTypes['quiz_tags_max_fields'],
> = ResolversObject<{
  tag?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tag_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QuizTagsMinFieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['quiz_tags_min_fields'] = ResolversParentTypes['quiz_tags_min_fields'],
> = ResolversObject<{
  tag?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tag_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QuizTagsMutationResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['quiz_tags_mutation_response'] = ResolversParentTypes['quiz_tags_mutation_response'],
> = ResolversObject<{
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<
    Array<ResolversTypes['quiz_tags']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QuizTagsToQuestionsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['quiz_tags_to_questions'] = ResolversParentTypes['quiz_tags_to_questions'],
> = ResolversObject<{
  question_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  tag_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  tags_to_questions_to_tags?: Resolver<
    Maybe<ResolversTypes['quiz_tags']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QuizTagsToQuestionsAggregateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['quiz_tags_to_questions_aggregate'] = ResolversParentTypes['quiz_tags_to_questions_aggregate'],
> = ResolversObject<{
  aggregate?: Resolver<
    Maybe<ResolversTypes['quiz_tags_to_questions_aggregate_fields']>,
    ParentType,
    ContextType
  >;
  nodes?: Resolver<
    Array<ResolversTypes['quiz_tags_to_questions']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QuizTagsToQuestionsAggregateFieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['quiz_tags_to_questions_aggregate_fields'] = ResolversParentTypes['quiz_tags_to_questions_aggregate_fields'],
> = ResolversObject<{
  count?: Resolver<
    ResolversTypes['Int'],
    ParentType,
    ContextType,
    Partial<QuizTagsToQuestionsAggregateFieldsCountArgs>
  >;
  max?: Resolver<
    Maybe<ResolversTypes['quiz_tags_to_questions_max_fields']>,
    ParentType,
    ContextType
  >;
  min?: Resolver<
    Maybe<ResolversTypes['quiz_tags_to_questions_min_fields']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QuizTagsToQuestionsMaxFieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['quiz_tags_to_questions_max_fields'] = ResolversParentTypes['quiz_tags_to_questions_max_fields'],
> = ResolversObject<{
  question_id?: Resolver<
    Maybe<ResolversTypes['uuid']>,
    ParentType,
    ContextType
  >;
  tag_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QuizTagsToQuestionsMinFieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['quiz_tags_to_questions_min_fields'] = ResolversParentTypes['quiz_tags_to_questions_min_fields'],
> = ResolversObject<{
  question_id?: Resolver<
    Maybe<ResolversTypes['uuid']>,
    ParentType,
    ContextType
  >;
  tag_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QuizTagsToQuestionsMutationResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['quiz_tags_to_questions_mutation_response'] = ResolversParentTypes['quiz_tags_to_questions_mutation_response'],
> = ResolversObject<{
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<
    Array<ResolversTypes['quiz_tags_to_questions']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QuizUsersResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['quiz_users'] = ResolversParentTypes['quiz_users'],
> = ResolversObject<{
  user_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  user_name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QuizUsersAggregateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['quiz_users_aggregate'] = ResolversParentTypes['quiz_users_aggregate'],
> = ResolversObject<{
  aggregate?: Resolver<
    Maybe<ResolversTypes['quiz_users_aggregate_fields']>,
    ParentType,
    ContextType
  >;
  nodes?: Resolver<
    Array<ResolversTypes['quiz_users']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QuizUsersAggregateFieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['quiz_users_aggregate_fields'] = ResolversParentTypes['quiz_users_aggregate_fields'],
> = ResolversObject<{
  count?: Resolver<
    ResolversTypes['Int'],
    ParentType,
    ContextType,
    Partial<QuizUsersAggregateFieldsCountArgs>
  >;
  max?: Resolver<
    Maybe<ResolversTypes['quiz_users_max_fields']>,
    ParentType,
    ContextType
  >;
  min?: Resolver<
    Maybe<ResolversTypes['quiz_users_min_fields']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QuizUsersMaxFieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['quiz_users_max_fields'] = ResolversParentTypes['quiz_users_max_fields'],
> = ResolversObject<{
  user_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  user_name?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QuizUsersMinFieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['quiz_users_min_fields'] = ResolversParentTypes['quiz_users_min_fields'],
> = ResolversObject<{
  user_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  user_name?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QuizUsersMutationResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['quiz_users_mutation_response'] = ResolversParentTypes['quiz_users_mutation_response'],
> = ResolversObject<{
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<
    Array<ResolversTypes['quiz_users']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SubscriptionRootResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['subscription_root'] = ResolversParentTypes['subscription_root'],
> = ResolversObject<{
  _dummy?: SubscriptionResolver<
    Maybe<ResolversTypes['Boolean']>,
    '_dummy',
    ParentType,
    ContextType
  >;
  quiz_answer_types?: SubscriptionResolver<
    Array<ResolversTypes['quiz_answer_types']>,
    'quiz_answer_types',
    ParentType,
    ContextType,
    Partial<SubscriptionRootQuizAnswerTypesArgs>
  >;
  quiz_answer_types_aggregate?: SubscriptionResolver<
    ResolversTypes['quiz_answer_types_aggregate'],
    'quiz_answer_types_aggregate',
    ParentType,
    ContextType,
    Partial<SubscriptionRootQuizAnswerTypesAggregateArgs>
  >;
  quiz_answer_types_by_pk?: SubscriptionResolver<
    Maybe<ResolversTypes['quiz_answer_types']>,
    'quiz_answer_types_by_pk',
    ParentType,
    ContextType,
    RequireFields<SubscriptionRootQuizAnswerTypesByPkArgs, 'answer_type_id'>
  >;
  quiz_answer_types_stream?: SubscriptionResolver<
    Array<ResolversTypes['quiz_answer_types']>,
    'quiz_answer_types_stream',
    ParentType,
    ContextType,
    RequireFields<
      SubscriptionRootQuizAnswerTypesStreamArgs,
      'batch_size' | 'cursor'
    >
  >;
  quiz_answers?: SubscriptionResolver<
    Array<ResolversTypes['quiz_answers']>,
    'quiz_answers',
    ParentType,
    ContextType,
    Partial<SubscriptionRootQuizAnswersArgs>
  >;
  quiz_answers_aggregate?: SubscriptionResolver<
    ResolversTypes['quiz_answers_aggregate'],
    'quiz_answers_aggregate',
    ParentType,
    ContextType,
    Partial<SubscriptionRootQuizAnswersAggregateArgs>
  >;
  quiz_answers_by_pk?: SubscriptionResolver<
    Maybe<ResolversTypes['quiz_answers']>,
    'quiz_answers_by_pk',
    ParentType,
    ContextType,
    RequireFields<SubscriptionRootQuizAnswersByPkArgs, 'id'>
  >;
  quiz_answers_stream?: SubscriptionResolver<
    Array<ResolversTypes['quiz_answers']>,
    'quiz_answers_stream',
    ParentType,
    ContextType,
    RequireFields<
      SubscriptionRootQuizAnswersStreamArgs,
      'batch_size' | 'cursor'
    >
  >;
  quiz_categories?: SubscriptionResolver<
    Array<ResolversTypes['quiz_categories']>,
    'quiz_categories',
    ParentType,
    ContextType,
    Partial<SubscriptionRootQuizCategoriesArgs>
  >;
  quiz_categories_aggregate?: SubscriptionResolver<
    ResolversTypes['quiz_categories_aggregate'],
    'quiz_categories_aggregate',
    ParentType,
    ContextType,
    Partial<SubscriptionRootQuizCategoriesAggregateArgs>
  >;
  quiz_categories_by_pk?: SubscriptionResolver<
    Maybe<ResolversTypes['quiz_categories']>,
    'quiz_categories_by_pk',
    ParentType,
    ContextType,
    RequireFields<SubscriptionRootQuizCategoriesByPkArgs, 'category_id'>
  >;
  quiz_categories_stream?: SubscriptionResolver<
    Array<ResolversTypes['quiz_categories']>,
    'quiz_categories_stream',
    ParentType,
    ContextType,
    RequireFields<
      SubscriptionRootQuizCategoriesStreamArgs,
      'batch_size' | 'cursor'
    >
  >;
  quiz_questions?: SubscriptionResolver<
    Array<ResolversTypes['quiz_questions']>,
    'quiz_questions',
    ParentType,
    ContextType,
    Partial<SubscriptionRootQuizQuestionsArgs>
  >;
  quiz_questions_aggregate?: SubscriptionResolver<
    ResolversTypes['quiz_questions_aggregate'],
    'quiz_questions_aggregate',
    ParentType,
    ContextType,
    Partial<SubscriptionRootQuizQuestionsAggregateArgs>
  >;
  quiz_questions_by_pk?: SubscriptionResolver<
    Maybe<ResolversTypes['quiz_questions']>,
    'quiz_questions_by_pk',
    ParentType,
    ContextType,
    RequireFields<SubscriptionRootQuizQuestionsByPkArgs, 'id'>
  >;
  quiz_questions_stream?: SubscriptionResolver<
    Array<ResolversTypes['quiz_questions']>,
    'quiz_questions_stream',
    ParentType,
    ContextType,
    RequireFields<
      SubscriptionRootQuizQuestionsStreamArgs,
      'batch_size' | 'cursor'
    >
  >;
  quiz_tags?: SubscriptionResolver<
    Array<ResolversTypes['quiz_tags']>,
    'quiz_tags',
    ParentType,
    ContextType,
    Partial<SubscriptionRootQuizTagsArgs>
  >;
  quiz_tags_aggregate?: SubscriptionResolver<
    ResolversTypes['quiz_tags_aggregate'],
    'quiz_tags_aggregate',
    ParentType,
    ContextType,
    Partial<SubscriptionRootQuizTagsAggregateArgs>
  >;
  quiz_tags_by_pk?: SubscriptionResolver<
    Maybe<ResolversTypes['quiz_tags']>,
    'quiz_tags_by_pk',
    ParentType,
    ContextType,
    RequireFields<SubscriptionRootQuizTagsByPkArgs, 'tag_id'>
  >;
  quiz_tags_stream?: SubscriptionResolver<
    Array<ResolversTypes['quiz_tags']>,
    'quiz_tags_stream',
    ParentType,
    ContextType,
    RequireFields<SubscriptionRootQuizTagsStreamArgs, 'batch_size' | 'cursor'>
  >;
  quiz_tags_to_questions?: SubscriptionResolver<
    Array<ResolversTypes['quiz_tags_to_questions']>,
    'quiz_tags_to_questions',
    ParentType,
    ContextType,
    Partial<SubscriptionRootQuizTagsToQuestionsArgs>
  >;
  quiz_tags_to_questions_aggregate?: SubscriptionResolver<
    ResolversTypes['quiz_tags_to_questions_aggregate'],
    'quiz_tags_to_questions_aggregate',
    ParentType,
    ContextType,
    Partial<SubscriptionRootQuizTagsToQuestionsAggregateArgs>
  >;
  quiz_tags_to_questions_by_pk?: SubscriptionResolver<
    Maybe<ResolversTypes['quiz_tags_to_questions']>,
    'quiz_tags_to_questions_by_pk',
    ParentType,
    ContextType,
    RequireFields<
      SubscriptionRootQuizTagsToQuestionsByPkArgs,
      'question_id' | 'tag_id'
    >
  >;
  quiz_tags_to_questions_stream?: SubscriptionResolver<
    Array<ResolversTypes['quiz_tags_to_questions']>,
    'quiz_tags_to_questions_stream',
    ParentType,
    ContextType,
    RequireFields<
      SubscriptionRootQuizTagsToQuestionsStreamArgs,
      'batch_size' | 'cursor'
    >
  >;
  quiz_users?: SubscriptionResolver<
    Array<ResolversTypes['quiz_users']>,
    'quiz_users',
    ParentType,
    ContextType,
    Partial<SubscriptionRootQuizUsersArgs>
  >;
  quiz_users_aggregate?: SubscriptionResolver<
    ResolversTypes['quiz_users_aggregate'],
    'quiz_users_aggregate',
    ParentType,
    ContextType,
    Partial<SubscriptionRootQuizUsersAggregateArgs>
  >;
  quiz_users_by_pk?: SubscriptionResolver<
    Maybe<ResolversTypes['quiz_users']>,
    'quiz_users_by_pk',
    ParentType,
    ContextType,
    RequireFields<SubscriptionRootQuizUsersByPkArgs, 'user_id'>
  >;
  quiz_users_stream?: SubscriptionResolver<
    Array<ResolversTypes['quiz_users']>,
    'quiz_users_stream',
    ParentType,
    ContextType,
    RequireFields<SubscriptionRootQuizUsersStreamArgs, 'batch_size' | 'cursor'>
  >;
}>;

export interface TimestamptzScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['timestamptz'], any> {
  name: 'timestamptz';
}

export interface UuidScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['uuid'], any> {
  name: 'uuid';
}

export type Resolvers<ContextType = any> = ResolversObject<{
  AddQuestionFailResponse?: AddQuestionFailResponseResolvers<ContextType>;
  AddQuestionResult?: AddQuestionResultResolvers<ContextType>;
  AddQuestionSuccessResponse?: AddQuestionSuccessResponseResolvers<ContextType>;
  AddTagResponse?: AddTagResponseResolvers<ContextType>;
  Answer?: AnswerResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Question?: QuestionResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  mutation_root?: MutationRootResolvers<ContextType>;
  query_root?: QueryRootResolvers<ContextType>;
  quiz_answer_types?: QuizAnswerTypesResolvers<ContextType>;
  quiz_answer_types_aggregate?: QuizAnswerTypesAggregateResolvers<ContextType>;
  quiz_answer_types_aggregate_fields?: QuizAnswerTypesAggregateFieldsResolvers<ContextType>;
  quiz_answer_types_avg_fields?: QuizAnswerTypesAvgFieldsResolvers<ContextType>;
  quiz_answer_types_max_fields?: QuizAnswerTypesMaxFieldsResolvers<ContextType>;
  quiz_answer_types_min_fields?: QuizAnswerTypesMinFieldsResolvers<ContextType>;
  quiz_answer_types_mutation_response?: QuizAnswerTypesMutationResponseResolvers<ContextType>;
  quiz_answer_types_stddev_fields?: QuizAnswerTypesStddevFieldsResolvers<ContextType>;
  quiz_answer_types_stddev_pop_fields?: QuizAnswerTypesStddevPopFieldsResolvers<ContextType>;
  quiz_answer_types_stddev_samp_fields?: QuizAnswerTypesStddevSampFieldsResolvers<ContextType>;
  quiz_answer_types_sum_fields?: QuizAnswerTypesSumFieldsResolvers<ContextType>;
  quiz_answer_types_var_pop_fields?: QuizAnswerTypesVarPopFieldsResolvers<ContextType>;
  quiz_answer_types_var_samp_fields?: QuizAnswerTypesVarSampFieldsResolvers<ContextType>;
  quiz_answer_types_variance_fields?: QuizAnswerTypesVarianceFieldsResolvers<ContextType>;
  quiz_answers?: QuizAnswersResolvers<ContextType>;
  quiz_answers_aggregate?: QuizAnswersAggregateResolvers<ContextType>;
  quiz_answers_aggregate_fields?: QuizAnswersAggregateFieldsResolvers<ContextType>;
  quiz_answers_max_fields?: QuizAnswersMaxFieldsResolvers<ContextType>;
  quiz_answers_min_fields?: QuizAnswersMinFieldsResolvers<ContextType>;
  quiz_answers_mutation_response?: QuizAnswersMutationResponseResolvers<ContextType>;
  quiz_categories?: QuizCategoriesResolvers<ContextType>;
  quiz_categories_aggregate?: QuizCategoriesAggregateResolvers<ContextType>;
  quiz_categories_aggregate_fields?: QuizCategoriesAggregateFieldsResolvers<ContextType>;
  quiz_categories_avg_fields?: QuizCategoriesAvgFieldsResolvers<ContextType>;
  quiz_categories_max_fields?: QuizCategoriesMaxFieldsResolvers<ContextType>;
  quiz_categories_min_fields?: QuizCategoriesMinFieldsResolvers<ContextType>;
  quiz_categories_mutation_response?: QuizCategoriesMutationResponseResolvers<ContextType>;
  quiz_categories_stddev_fields?: QuizCategoriesStddevFieldsResolvers<ContextType>;
  quiz_categories_stddev_pop_fields?: QuizCategoriesStddevPopFieldsResolvers<ContextType>;
  quiz_categories_stddev_samp_fields?: QuizCategoriesStddevSampFieldsResolvers<ContextType>;
  quiz_categories_sum_fields?: QuizCategoriesSumFieldsResolvers<ContextType>;
  quiz_categories_var_pop_fields?: QuizCategoriesVarPopFieldsResolvers<ContextType>;
  quiz_categories_var_samp_fields?: QuizCategoriesVarSampFieldsResolvers<ContextType>;
  quiz_categories_variance_fields?: QuizCategoriesVarianceFieldsResolvers<ContextType>;
  quiz_questions?: QuizQuestionsResolvers<ContextType>;
  quiz_questions_aggregate?: QuizQuestionsAggregateResolvers<ContextType>;
  quiz_questions_aggregate_fields?: QuizQuestionsAggregateFieldsResolvers<ContextType>;
  quiz_questions_avg_fields?: QuizQuestionsAvgFieldsResolvers<ContextType>;
  quiz_questions_max_fields?: QuizQuestionsMaxFieldsResolvers<ContextType>;
  quiz_questions_min_fields?: QuizQuestionsMinFieldsResolvers<ContextType>;
  quiz_questions_mutation_response?: QuizQuestionsMutationResponseResolvers<ContextType>;
  quiz_questions_stddev_fields?: QuizQuestionsStddevFieldsResolvers<ContextType>;
  quiz_questions_stddev_pop_fields?: QuizQuestionsStddevPopFieldsResolvers<ContextType>;
  quiz_questions_stddev_samp_fields?: QuizQuestionsStddevSampFieldsResolvers<ContextType>;
  quiz_questions_sum_fields?: QuizQuestionsSumFieldsResolvers<ContextType>;
  quiz_questions_var_pop_fields?: QuizQuestionsVarPopFieldsResolvers<ContextType>;
  quiz_questions_var_samp_fields?: QuizQuestionsVarSampFieldsResolvers<ContextType>;
  quiz_questions_variance_fields?: QuizQuestionsVarianceFieldsResolvers<ContextType>;
  quiz_tags?: QuizTagsResolvers<ContextType>;
  quiz_tags_aggregate?: QuizTagsAggregateResolvers<ContextType>;
  quiz_tags_aggregate_fields?: QuizTagsAggregateFieldsResolvers<ContextType>;
  quiz_tags_max_fields?: QuizTagsMaxFieldsResolvers<ContextType>;
  quiz_tags_min_fields?: QuizTagsMinFieldsResolvers<ContextType>;
  quiz_tags_mutation_response?: QuizTagsMutationResponseResolvers<ContextType>;
  quiz_tags_to_questions?: QuizTagsToQuestionsResolvers<ContextType>;
  quiz_tags_to_questions_aggregate?: QuizTagsToQuestionsAggregateResolvers<ContextType>;
  quiz_tags_to_questions_aggregate_fields?: QuizTagsToQuestionsAggregateFieldsResolvers<ContextType>;
  quiz_tags_to_questions_max_fields?: QuizTagsToQuestionsMaxFieldsResolvers<ContextType>;
  quiz_tags_to_questions_min_fields?: QuizTagsToQuestionsMinFieldsResolvers<ContextType>;
  quiz_tags_to_questions_mutation_response?: QuizTagsToQuestionsMutationResponseResolvers<ContextType>;
  quiz_users?: QuizUsersResolvers<ContextType>;
  quiz_users_aggregate?: QuizUsersAggregateResolvers<ContextType>;
  quiz_users_aggregate_fields?: QuizUsersAggregateFieldsResolvers<ContextType>;
  quiz_users_max_fields?: QuizUsersMaxFieldsResolvers<ContextType>;
  quiz_users_min_fields?: QuizUsersMinFieldsResolvers<ContextType>;
  quiz_users_mutation_response?: QuizUsersMutationResponseResolvers<ContextType>;
  subscription_root?: SubscriptionRootResolvers<ContextType>;
  timestamptz?: GraphQLScalarType;
  uuid?: GraphQLScalarType;
}>;

export type DirectiveResolvers<ContextType = any> = ResolversObject<{
  cached?: CachedDirectiveResolver<any, any, ContextType>;
}>;
