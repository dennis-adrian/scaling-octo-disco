const { ApolloServer, gql } = require('apollo-server');

const SessionAPI = require('./datasources/sessions');

/**
 * Defining the GraphQL Schema
 */
const typeDefs = require('./schema');

/**
 * Creating a resolver map object
 */
const resolvers = require('./resolvers');

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
