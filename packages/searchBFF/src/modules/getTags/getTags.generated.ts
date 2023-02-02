import * as Types from '../../types/graphql.d';

import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type GetTagsQueryVariables = Types.Exact<{ [key: string]: never }>;

export type GetTagsQuery = {
  __typename?: 'query_root';
  quiz_tags: Array<{ __typename?: 'quiz_tags'; tag: string; tag_id: string }>;
};

export type TestGetQuizQueryVariables = Types.Exact<{ [key: string]: never }>;

export type TestGetQuizQuery = {
  __typename?: 'query_root';
  quiz_questions: Array<{ __typename?: 'quiz_questions'; question: string }>;
};

export const GetTagsDocument = gql`
  query getTags {
    quiz_tags {
      tag
      tag_id
    }
  }
`;
export const TestGetQuizDocument = gql`
  query testGetQuiz {
    quiz_questions {
      question
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
    getTags(
      variables?: GetTagsQueryVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<GetTagsQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetTagsQuery>(GetTagsDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'getTags',
        'query',
      );
    },
    testGetQuiz(
      variables?: TestGetQuizQueryVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<TestGetQuizQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<TestGetQuizQuery>(TestGetQuizDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'testGetQuiz',
        'query',
      );
    },
  };
}
export type Sdk = ReturnType<typeof getSdk>;
