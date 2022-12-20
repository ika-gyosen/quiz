import * as Types from '../../types/graphql.d';

import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type AddQuestionMutationVariables = Types.Exact<{
  question: Types.Scalars['String'];
  answer: Types.Scalars['String'];
  pronunciation?: Types.InputMaybe<Types.Scalars['String']>;
  description?: Types.InputMaybe<Types.Scalars['String']>;
  difficulty?: Types.InputMaybe<Types.Scalars['Int']>;
  categoryId?: Types.InputMaybe<Types.Scalars['Int']>;
  userId: Types.Scalars['uuid'];
  author?: Types.InputMaybe<Types.Scalars['String']>;
}>;

export type AddQuestionMutation = {
  __typename?: 'mutation_root';
  insert_quiz_questions?: {
    __typename?: 'quiz_questions_mutation_response';
    returning: Array<{ __typename?: 'quiz_questions'; id: string }>;
  } | null;
};

export type AddQuestionTagMutationVariables = Types.Exact<{
  questionId: Types.Scalars['uuid'];
  tagId: Types.Scalars['uuid'];
}>;

export type AddQuestionTagMutation = {
  __typename?: 'mutation_root';
  insert_quiz_tags_to_questions?: {
    __typename?: 'quiz_tags_to_questions_mutation_response';
    returning: Array<{
      __typename?: 'quiz_tags_to_questions';
      question_id: string;
    }>;
  } | null;
};

export const AddQuestionDocument = gql`
  mutation addQuestion(
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
        answer_type_id: 1
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
export const AddQuestionTagDocument = gql`
  mutation addQuestionTag($questionId: uuid!, $tagId: uuid!) {
    insert_quiz_tags_to_questions(
      objects: { question_id: $questionId, tag_id: $tagId }
    ) {
      returning {
        question_id
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
    addQuestion(
      variables: AddQuestionMutationVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<AddQuestionMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<AddQuestionMutation>(AddQuestionDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'addQuestion',
        'mutation',
      );
    },
    addQuestionTag(
      variables: AddQuestionTagMutationVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<AddQuestionTagMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<AddQuestionTagMutation>(
            AddQuestionTagDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'addQuestionTag',
        'mutation',
      );
    },
  };
}
export type Sdk = ReturnType<typeof getSdk>;
