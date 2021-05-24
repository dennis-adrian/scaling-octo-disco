const { ApolloServer, gql } = require('apollo-server');

const SessionAPI = require('./datasources/sessions');

/**
 * Defining the GraphQL Schema
 */
const typeDefs = gql`
  type Query {
    sessions: [Session]
    sessionById(id: ID): Session
  }
  type Session {
    id: ID!
    title: String!
    description: String
    startsAt: String
    endsAt: String
    room: String
    day: String
    format: String
    track: String
      @deprecated(reason: "This is the reason why the field will be remove")
    level: String
  }
`;

/**
 * Creating a resolver map object
 */
const resolvers = {
  Query: {
    sessions: (parent, args, context, info) => {
      return context.dataSources.sessionAPI.getSessions();
    },
    sessionById: (parent, { id }, { dataSources }, info) => {
      return dataSources.sessionAPI.getSessionById(id);
    },
  },
};

/**
 * Defining the data source
 */
const dataSources = () => ({
  sessionAPI: new SessionAPI(),
});

/**
 * Instantiating an apollo server object
 */
const server = new ApolloServer({ typeDefs, resolvers, dataSources });

/**
 * starting the server
 */
server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`graphQL running at ${url}`);
});
