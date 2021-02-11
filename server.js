const { ApolloServer, gql } = require('apollo-server');

const listings = [
    { id: "001", title: "Large ensuite condo", city: "Toronto" },
    { id: "002", title: "Beverly Hills Mansion", city: "Los Angeles" },
    { id: "003", title: "Small chic bedroom", city: "Dubai" }
];

const typeDefs = gql` type Listing { id: String! title: String! city: String! } type Query { listings: [Listing!]! } `;
const resolvers = {
    Query: {
        listings: () => listings,
    }
}

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
    console.log(`Apollo-server is running at ${url}`);
});