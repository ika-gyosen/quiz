import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  input AddQuestionInput {
    """
    問題文
    """
    question: String!
    """
    解答
    """
    answer: String!
    """
    解答の読み方(ふりがな)
    """
    pronunciation: String
    """
    備考
    """
    description: String
    """
    難易度
    """
    difficulty: Int
    """
    ジャンル
    """
    categoryId: Int
    """
    投稿者
    """
    userId: uuid!
    """
    出典/作問者
    """
    author: String
    """
    タグID
    """
    tagIds: [uuid!]
  }

  type AddQuestionResponse {
    succeeded: Boolean!
  }

  type Mutation {
    addQuestion(input: AddQuestionInput!): AddQuestionResponse!
  }
`;
