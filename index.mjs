// const { ApolloServer } = require("@apollo/server");
// const { startStandaloneServer } = require("@apollo/server/standalone");
// const { typeDefs } = require("./schema/typeDefs");
// const { resolvers } = require("./schema/resolvers");
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema/typeDefs.mjs";
import { resolvers } from "./schema/resolvers.mjs";

const server = new ApolloServer({ typeDefs, resolvers });

// server.listen().then(({ url }) => {
//   console.log(`Server ready at ${url}`);
// });

const { url } = await startStandaloneServer(server);
console.log(`🚀 Server ready at ${url}`);
