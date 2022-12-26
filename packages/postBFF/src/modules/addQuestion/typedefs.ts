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
    userId: String!
    """
    出典/作問者
    """
    author: String
    """
    タグID
    """
    tagIds: [String!]
  }

  """
  成功レスポンス: 新しく追加された問題のIDを返す
  """
  type AddQuestionSuccessResponse {
    id: String!
  }

  """
  エラーレスポンス: エラーメッセージを返す
  """
  type AddQuestionFailResponse {
    message: String!
  }

  union AddQuestionResult = AddQuestionSuccessResponse | AddQuestionFailResponse

  type Mutation {
    addQuestion(input: AddQuestionInput!): AddQuestionResult!
  }
`;
