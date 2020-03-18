const bodyParser = require("body-parser")
const express = require("express")
const { graphqlExpress, graphiqlExpress } = require("graphql-server-express")
const schema = require("./data/schema")
const { printSchema } = require("graphql/utilities/schemaPrinter")

console.log(process.env.NODE_ENV)

const setupGraphQLServer = () => {
    //setup server
    const graphQLServer = express()

    // /api/graphql
    graphQLServer.use(
        "/graphql",
        bodyParser.json(),
        graphqlExpress({ schema, context: {} })
    )

    // /api/graphiql
    graphQLServer.use(
        "/graphiql",
        graphiqlExpress({ endpointURL: process.env.NODE_ENV === "test" ? "/api/graphql" : "/testthree-e34c0/us-central1/api/graphql" })
    )

    // /api/schema
    graphQLServer.use("/schema", (req, res) => {
        res.set("Content-Type", "text/plain")
        res.send(printSchema(schema))
    })

    return graphQLServer
}

module.exports = setupGraphQLServer