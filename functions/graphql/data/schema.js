const { makeExecutableSchema } = require("graphql-tools")
const resolvers = require("./resolvers")

const schema = `
type User {
    id: ID!
    name: String!
    screenName: String!
    statusesCount: Int!
    tweets: [Tweets]
}
type Tweets {
    id: ID!
    text: String!
    userId: String!
    user: User!
    likes: Int!
}

# the schema allows the following query:
type Query {
    tweets: [Tweets]
    user(id: String!): User
}

type Mutation {
    addTweet(
        text
        
    )
}
`

const executableSchema = makeExecutableSchema({
    typeDefs: schema,
    resolvers
})

module.exports = executableSchema