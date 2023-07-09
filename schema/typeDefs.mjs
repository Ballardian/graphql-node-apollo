export const typeDefs = `#graphql
  type User {
    id: ID!
    name: String!
    username: String!
    age: Int!
    nationality: Nationality!
    friends: [User]
    favouriteMovies: [Movie]
  }

  type Movie {
    id: ID!
    name: String!
    yearOfPublication: Int!
    isInTheaters: Boolean!
    actors: [User]
  }
# TODO split by type e.g. user?
  type Query {
    users: [User!]!
    user(id: ID!): User!
    movies: [Movie!]!
    movie(id: ID!): Movie!
  }

  type Mutation {
    createUser(input: CreateUserInput!): User!
    updateUser(input: UpdateUserInput!): User
    deleteUser(id: ID!): User
  }

  input CreateUserInput {
    name: String!
    username: String!
    age: Int = 18
    # TODO force this to one of enum choices
    nationality: Nationality = CANADA
  }
  input UpdateUserInput {
    id: ID!
    newUsername: String!
  }

  enum Nationality {
    CANADA
    BRAZIL
    INDIA
    GERMANY
    CHILE
  }
`;
