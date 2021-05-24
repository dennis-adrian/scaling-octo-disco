const { ApolloServer, gql } = require('apollo-server');

const sessions = require('./data/sessions.json');

/**
 * Defining the GraphQL Schema 
 */
const typeDefs = gql`
type Query {
    sessions: [Session]
}
type Session {
    id: ID!,
    title: String!,
    description: String,
    startsAt: String,
    endsAt: String,
    room: String,
    day: String,
    format: String,
    track: String @deprecated(reason: "This is the reason why the field will be remove"),
    level: String
}
`

/**
 * Creating a resolver map object
 */
const resolvers = {
    Query: {
        sessions: () => {
            return sessions
        }
    }
}

/**
 * Instantiating an apollo server object
 */
const server = new ApolloServer({ typeDefs, resolvers });

/**
 * starting the server
 */
server
    .listen({ port: process.env.PORT || 4000 })
    .then(({ url }) => {
        console.log(`graphQL running at ${url}`)
    });