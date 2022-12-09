/* eslint-disable */
import * as Types from './types/graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetQuestionsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetQuestionsQuery = { __typename?: 'query_root', quiz_questions: Array<{ __typename?: 'quiz_questions', id: any, serial_number: number, difficulty: number, question: string, author?: string | undefined, categories_to_questions?: { __typename?: 'quiz_categories', category: string } | undefined, answers_to_questions: Array<{ __typename?: 'quiz_answers', answer: string, description?: string | undefined, pronunciation?: string | undefined }>, tags_to_questions_to_questions: Array<{ __typename?: 'quiz_tags_to_questions', tags_to_questions_to_tags?: { __typename?: 'quiz_tags', tag: string } | undefined }>, users_to_questions: { __typename?: 'quiz_users', user_name: string } }> };


export const GetQuestionsDocument = gql`
    query getQuestions {
  quiz_questions {
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