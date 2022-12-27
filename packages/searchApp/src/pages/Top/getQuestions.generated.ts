/* eslint-disable */
import * as Types from '../../types/graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetQuestionsQueryVariables = Types.Exact<{
  difficulties?: Types.InputMaybe<Array<Types.Scalars['Int']> | Types.Scalars['Int']>;
  categoryIds?: Types.InputMaybe<Array<Types.Scalars['Int']> | Types.Scalars['Int']>;
  containWord?: Types.InputMaybe<Types.Scalars['String']>;
  notContainWord?: Types.InputMaybe<Types.Scalars['String']>;
  targetTags?: Types.InputMaybe<Array<Types.Scalars['String']> | Types.Scalars['String']>;
  notTargetTags?: Types.InputMaybe<Array<Types.Scalars['String']> | Types.Scalars['String']>;
}>;


export type GetQuestionsQuery = { __typename?: 'query_root', questions: Array<{ __typename?: 'Question', questionId: string, serialNumber: number, difficulty?: number | undefined, category?: string | undefined, subCategory?: string | undefined, question: string, tags?: Array<string | undefined> | undefined, userName: string, author?: string | undefined, answers: Array<{ __typename?: 'Answer', answer: string, pronunciation?: string | undefined, description?: string | undefined }> } | undefined> };


export const GetQuestionsDocument = gql`
    query getQuestions($difficulties: [Int!], $categoryIds: [Int!], $containWord: String, $notContainWord: String, $targetTags: [String!], $notTargetTags: [String!]) {
  questions(
    input: {difficulties: $difficulties, categoryIds: $categoryIds, containWord: $containWord, notContainWord: $notContainWord, targetTags: $targetTags, notTargetTags: $notTargetTags}
  ) {
    questionId
    serialNumber
    difficulty
    category
    subCategory
    question
    answers {
      answer
      pronunciation
      description
    }
    tags
    userName
    author
  }
}
    `;

/**
 * __useGetQuestionsQuery__
 *
 * To run a query within a React component, call `useGetQuestionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetQuestionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetQuestionsQuery({
 *   variables: {
 *      difficulties: // value for 'difficulties'
 *      categoryIds: // value for 'categoryIds'
 *      containWord: // value for 'containWord'
 *      notContainWord: // value for 'notContainWord'
 *      targetTags: // value for 'targetTags'
 *      notTargetTags: // value for 'notTargetTags'
 *   },
 * });
 */
export function useGetQuestionsQuery(baseOptions?: Apollo.QueryHookOptions<GetQuestionsQuery, GetQuestionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetQuestionsQuery, GetQuestionsQueryVariables>(GetQuestionsDocument, options);
      }
export function useGetQuestionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetQuestionsQuery, GetQuestionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetQuestionsQuery, GetQuestionsQueryVariables>(GetQuestionsDocument, options);
        }
export type GetQuestionsQueryHookResult = ReturnType<typeof useGetQuestionsQuery>;
export type GetQuestionsLazyQueryHookResult = ReturnType<typeof useGetQuestionsLazyQuery>;
export type GetQuestionsQueryResult = Apollo.QueryResult<GetQuestionsQuery, GetQuestionsQueryVariables>;