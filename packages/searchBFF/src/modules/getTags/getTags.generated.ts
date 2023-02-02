import * as Types from '../../types/graphql.d';

import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type GetTagsQueryVariables = Types.Exact<{ [key: string]: never }>;

export type GetTagsQuery = {
  __typename?: 'query_root';
  quiz_tags: Array<{ __typename?: 'quiz_tags'; tag: string; tag_id: string }>;
};

export const GetTagsDocument = gql`
  query getTags {
    quiz_tags {
      tag
      tag_id
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
  };
}
export type Sdk = ReturnType<typeof getSdk>;
