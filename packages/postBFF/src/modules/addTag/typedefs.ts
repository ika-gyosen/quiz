import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  input AddTagInput {
    """
    タグID
    """
    tag: String!
  }

  type AddTagResponse {
    succeeded: Boolean!
  }

  type Mutation {
    addTag(input: AddTagInput!): AddTagResponse!
  }
`;
