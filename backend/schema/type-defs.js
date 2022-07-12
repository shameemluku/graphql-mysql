const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    id:ID!
    name: String!
    age: Int!
    nationality: String!
  }

  type Query {
    users: [User!]!,
    user(id:ID!):User!
  }

  input CreateUserInput {
    name: String!
    age: Int!
    nationality: String
  }

  type Message{
    Message:String!
  }

  type Mutation {
    createUser(input:CreateUserInput!):User
  }
`;

module.exports = { typeDefs };
