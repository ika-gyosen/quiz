/* eslint-disable */
import * as Types from '../../../types/graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetTagsFromDbQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetTagsFromDbQuery = { __typename?: 'query_root', quiz_tags: Array<{ __typename?: 'quiz_tags', tag: string, tag_id: any }> };


export const GetTagsFromDbDocument = gql`
    query getTagsFromDB {
  quiz_tags {
    tag
    tag_id
  }
}
    `;

/**
 * __useGetTagsFromDbQuery__
 *
 * To run a query within a React component, call `useGetTagsFromDbQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTagsFromDbQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTagsFromDbQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTagsFromDbQuery(baseOptions?: Apollo.QueryHookOptions<GetTagsFromDbQuery, GetTagsFromDbQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTagsFromDbQuery, GetTagsFromDbQueryVariables>(GetTagsFromDbDocument, options);
      }
export function useGetTagsFromDbLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTagsFromDbQuery, GetTagsFromDbQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTagsFromDbQuery, GetTagsFromDbQueryVariables>(GetTagsFromDbDocument, options);
        }
export type GetTagsFromDbQueryHookResult = ReturnType<typeof useGetTagsFromDbQuery>;
export type GetTagsFromDbLazyQueryHookResult = ReturnType<typeof useGetTagsFromDbLazyQuery>;
export type GetTagsFromDbQueryResult = Apollo.QueryResult<GetTagsFromDbQuery, GetTagsFromDbQueryVariables>;