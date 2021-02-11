const { ApolloServer, gql } = require('apollo-server');
const api = require('./api');

const typeDefs = gql` type Listing { id: String! title: String! city: String! } type Query { listings: [Listing!]! } `;
const resolvers = {
    Query: {
        listings: () => api,
    }
}

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
    console.log(`Apollo-server is running at ${url}`);
});
