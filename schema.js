const {gql} = require("apollo-server");
exports.typeDefs = gql`
    
    type Query {
        hello: [String]
        products(filter: ProductsFilterInput): [Product!]!
        product(id: ID!): Product
        categories: [Category!]!
        category(id: ID!): Category
    }
    
    type Product {
        id: ID!
        name: String!
        description: String!
        quantity: Int!
        price: Float!
        onSale: Boolean!
        image: String!
        categoryId: String!
        category: Category
        reviews: [Review!]! 
    }
    
    type Category{
        id: ID!
        name: String! 
        products(filter: ProductsFilterInput): [Product!]!
    }
    
    type Review{
        id: ID!
        date: String!
        title: String!
        comment: String!
        rating: Int!
        productId: String!
    }
    
    input ProductsFilterInput {
        onSale: Boolean
    }
    
    type Mutation{
        addCategory(input: AddCategoryInputs!): Category!
    }
    
    input AddCategoryInputs {
        name: String!
    }
`