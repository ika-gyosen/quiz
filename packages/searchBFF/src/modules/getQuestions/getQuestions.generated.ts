import * as Types from '../../types/graphql.d';

import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type GetQuestionsQueryVariables = Types.Exact<{
  difficulties?: Types.InputMaybe<
    Array<Types.Scalars['Int']> | Types.Scalars['Int']
  >;
  categoryIds?: Types.InputMaybe<
    Array<Types.Scalars['Int']> | Types.Scalars['Int']
  >;
  targetTag?: Types.InputMaybe<Types.Scalars['String']>;
  notTagetTag?: Types.InputMaybe<Types.Scalars['String']>;
  targetTagIsNull: Types.Scalars['Boolean'];
  containWord?: Types.InputMaybe<Types.Scalars['String']>;
  notContainWord?: Types.InputMaybe<Types.Scalars['String']>;
}>;

export type GetQuestionsQuery = {
  __typename?: 'query_root';
  quiz_questions: Array<{
    __typename?: 'quiz_questions';
    id: string;
    serial_number: number;
    difficulty: number;
    question: string;
    author?: string | null;
    categories_to_questions?: {
      __typename?: 'quiz_categories';
      category: string;
    } | null;
    answers_to_questions: Array<{
      __typename?: 'quiz_answers';
      answer: string;
      description?: string | null;
      pronunciation?: string | null;
    }>;
    tags_to_questions_to_questions: Array<{
      __typename?: 'quiz_tags_to_questions';
      tags_to_questions_to_tags?: {
        __typename?: 'quiz_tags';
        tag: string;
      } | null;
    }>;
    users_to_questions: { __typename?: 'quiz_users'; user_name: string };
  }>;
};

export const GetQuestionsDocument = gql`
  query getQuestions(
    $difficulties: [Int!]
    $categoryIds: [Int!]
    $targetTag: String
    $notTagetTag: String
    $targetTagIsNull: Boolean!
    $containWord: String
    $notContainWord: String
  ) {
    quiz_questions(
      where: {
        difficulty: { _in: $difficulties }
        category_id: { _in: $categoryIds }
        question: { _ilike: $containWord, _nilike: $notContainWord }
        _or: [
          {
            tags_to_questions_to_questions: {
              tags_to_questions_to_tags: {
                tag: { _eq: $targetTag, _neq: $notTagetTag }
              }
            }
          }
          {
            tags_to_questions_to_questions: {
              tags_to_questions_to_tags: { tag: { _is_null: $targetTagIsNull } }
            }
          }
        ]
      }
    ) {
      id
      serial_number
      difficulty
      categories_to_questions {
        category
      }
      question
      answers_to_questions {
        answer
        description
        pronunciation
      }
      tags_to_questions_to_questions {
        tags_to_questions_to_tags {
          tag
        }
      }
      users_to_questions {
        user_name
      }
      author
    }
  }
`;

export type SdkFunctionWrapper = <T>(
  action: (requestHeaders?: Record<string, string>) => Promise<T>,
  operationName: string,
  operationType?: string,
) => Promise<T>;

const defaultWrapper: SdkFunctionWrapper = (
  action,
  _operationName,
  _operationType,
) => action();

export function getSdk(
  client: GraphQLClient,
  withWrapper: SdkFunctionWrapper = defaultWrapper,
) {
  return {
    getQuestions(
      variables: GetQuestionsQueryVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<GetQuestionsQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetQuestionsQuery>(GetQuestionsDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'getQuestions',
        'query',
      );
    },
  };
}
export type Sdk = ReturnType<typeof getSdk>;
