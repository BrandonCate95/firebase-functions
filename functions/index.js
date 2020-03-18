const { https } = require("firebase-functions")
const setupGraphQLServer = require("./graphql/server")

// CF for Firebase with graphql-server-express
const graphqlQLServer = setupGraphQLServer()

const api = https.onRequest(graphqlQLServer)

module.exports = {
    api
}