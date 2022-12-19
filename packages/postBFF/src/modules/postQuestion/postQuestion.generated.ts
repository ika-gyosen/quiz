import * as Types from '../../types/graphql.d';

import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type PostQuestionMutationVariables = Types.Exact<{
  question: Types.Scalars['String'];
  answer: Types.Scalars['String'];
  pronunciation?: Types.InputMaybe<Types.Scalars['String']>;
  description?: Types.InputMaybe<Types.Scalars['String']>;
  difficulty?: Types.InputMaybe<Types.Scalars['Int']>;
  categoryId?: Types.InputMaybe<Types.Scalars['Int']>;
  userId: Types.Scalars['uuid'];
  author?: Types.InputMaybe<Types.Scalars['String']>;
}>;

export type PostQuestionMutation = {
  __typename?: 'mutation_root';
  insert_quiz_questions?: {
    __typename?: 'quiz_questions_mutation_response';
    returning: Array<{ __typename?: 'quiz_questions'; id: string }>;
  } | null;
};

export const PostQuestionDocument = gql`
  mutation postQuestion(
    $question: String!
    $answer: String!
    $pronunciation: String
    $description: String
    $difficulty: Int
    $categoryId: Int
    $userId: uuid!
    $author: String
  ) {
    insert_quiz_questions(
      objects: {
        question: $question
        answers_to_questions: {
          data: {
            answer: $answer
            pronunciation: $pronunciation
            description: $description
          }
        }
        difficulty: $difficulty
        category_id: $categoryId
        user_id: $userId
        author: $author
      }
    ) {
      returning {
        id
      }
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
    postQuestion(
      variables: PostQuestionMutationVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<PostQuestionMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<PostQuestionMutation>(
            PostQuestionDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'postQuestion',
        'mutation',
      );
    },
  };
}
export type Sdk = ReturnType<typeof getSdk>;
