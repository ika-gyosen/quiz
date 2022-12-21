/* eslint-disable */
import * as Types from '../../../types/graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
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


export type AddQuestionMutation = { __typename?: 'mutation_root', insert_quiz_questions?: { __typename?: 'quiz_questions_mutation_response', returning: Array<{ __typename?: 'quiz_questions', id: any }> } | undefined };


export const AddQuestionDocument = gql`
    mutation addQuestion($question: String!, $answer: String!, $pronunciation: String, $description: String, $difficulty: Int, $categoryId: Int, $userId: uuid!, $author: String) {
  insert_quiz_questions(
    objects: {question: $question, answers_to_questions: {data: {answer: $answer, pronunciation: $pronunciation, description: $description}}, answer_type_id: 1, difficulty: $difficulty, category_id: $categoryId, user_id: $userId, author: $author}
  ) {
    returning {
      id
    }
  }
}
    `;
export type AddQuestionMutationFn = Apollo.MutationFunction<AddQuestionMutation, AddQuestionMutationVariables>;

/**
 * __useAddQuestionMutation__
 *
 * To run a mutation, you first call `useAddQuestionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddQuestionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addQuestionMutation, { data, loading, error }] = useAddQuestionMutation({
 *   variables: {
 *      question: // value for 'question'
 *      answer: // value for 'answer'
 *      pronunciation: // value for 'pronunciation'
 *      description: // value for 'description'
 *      difficulty: // value for 'difficulty'
 *      categoryId: // value for 'categoryId'
 *      userId: // value for 'userId'
 *      author: // value for 'author'
 *   },
 * });
 */
export function useAddQuestionMutation(baseOptions?: Apollo.MutationHookOptions<AddQuestionMutation, AddQuestionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddQuestionMutation, AddQuestionMutationVariables>(AddQuestionDocument, options);
      }
export type AddQuestionMutationHookResult = ReturnType<typeof useAddQuestionMutation>;
export type AddQuestionMutationResult = Apollo.MutationResult<AddQuestionMutation>;
export type AddQuestionMutationOptions = Apollo.BaseMutationOptions<AddQuestionMutation, AddQuestionMutationVariables>;