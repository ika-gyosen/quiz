/* eslint-disable */
export type Maybe<T> = T | undefined;
export type InputMaybe<T> = T | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
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

export type Mutation = {
  __typename?: 'Mutation';
  _dummy?: Maybe<Scalars['Boolean']>;
};

export type Query = {
  __typename?: 'Query';
  _dummy?: Maybe<Scalars['Boolean']>;
  getTags: Array<Tag>;
  questions: Array<Maybe<Question>>;
};


export type QueryQuestionsArgs = {
  input: GetQuestionsInput;
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
  subCategory?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  userName: Scalars['String'];
};

export type Subscription = {
  __typename?: 'Subscription';
  _dummy?: Maybe<Scalars['Boolean']>;
};

export type Tag = {
  __typename?: 'Tag';
  tag: Scalars['String'];
  tagId: Scalars['String'];
};
