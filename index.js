const {ApolloServer} = require('apollo-server');
const {typeDefs} = require('./schema');
const {products, categories} = require("./db");
const {Query} = require("./resolvers/Query");
const {Product} = require("./resolvers/Product");
const {Category} = require('./resolvers/Category');

const server = new ApolloServer({
    typeDefs,
    resolvers: {
        Query,
        Product,
        Category
    },
    context: {
        products,
        categories
    }
});

server.listen().then(({url}) => {
    console.log("Server is ready at " + url);
})