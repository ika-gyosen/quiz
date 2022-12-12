import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  input GetQuestionsInput {
    """
    難易度
    """
    difficulties: [Int!]
    """
    ジャンル
    """
    categoryIds: [Int!]
    """
    タグ(検索対象となる)
    """
    targetTag: String
    """
    タグ(検索対象外となる)
    """
    notTagetTag: String
    """
    含んでいると検索対象となる単語
    """
    containWord: String
    """
    含んでいると検索対象外となる単語
    """
    notContainWord: String
  }

  type Answer {
    answer: String!
    pronunciation: String
    description: String
  }

  type Question {
    questionId: String!
    serialNumber: Int!
    difficulty: Int
    category: String
    question: String!
    answers: [Answer!]!
    tags: [String]
    userName: String!
    author: String
  }

  type Query {
    questions(input: GetQuestionsInput!): [Question]!
  }
`;
