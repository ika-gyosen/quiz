import * as Types from '../../types/graphql.d';

import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type AddTagMutationVariables = Types.Exact<{
  tag: Types.Scalars['String'];
}>;

export type AddTagMutation = {
  __typename?: 'mutation_root';
  insert_quiz_tags?: {
    __typename?: 'quiz_tags_mutation_response';
    returning: Array<{ __typename?: 'quiz_tags'; tag: string; tag_id: string }>;
  } | null;
};

export const AddTagDocument = gql`
  mutation addTag($tag: String!) {
    insert_quiz_tags(objects: { tag: $tag }) {
      returning {
        tag
        tag_id
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
    addTag(
      variables: AddTagMutationVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<AddTagMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<AddTagMutation>(AddTagDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'addTag',
        'mutation',
      );
    },
  };
}
export type Sdk = ReturnType<typeof getSdk>;
