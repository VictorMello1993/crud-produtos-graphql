import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { loadFiles } from "@graphql-tools/load-files";

const server = new ApolloServer({
    typeDefs: await loadFiles('./schema/*.graphql'),
    resolvers: await loadFiles('./resolvers/*.js')
})

const {url} = await startStandaloneServer(server)

console.log(`Running at ${url}...`)




