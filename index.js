import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { loadFiles } from "@graphql-tools/load-files";
import Produto from './resolvers/Produto.js'
import Query from './resolvers/Query.js'
import Mutation from "./resolvers/Mutation.js";

const server = new ApolloServer({
    typeDefs: await loadFiles('./schema/*.graphql'),
    resolvers: {...Produto, ...Query, ...Mutation}
})

const {url} = await startStandaloneServer(server)

console.log(`Running at ${url}...`)




