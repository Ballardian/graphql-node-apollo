import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema/typeDefs.mjs";
import { resolvers } from "./schema/resolvers.mjs";

const server = new ApolloServer({ typeDefs, resolvers });

const { url } = await startStandaloneServer(server);
console.log(`🚀 Server ready at ${url}`);
