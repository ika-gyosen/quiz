import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Query {
    getTags: [Tag!]!
  }

  type Tag {
    tag: String!
    tagId: String!
  }
`;
