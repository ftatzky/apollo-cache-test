const { ApolloServer } = require('apollo-server-express')
const ResponseCachePlugin = require('apollo-server-plugin-response-cache')
const express = require('express')
const { createApplication } = require('graphql-modules')

const { moduleA } = require('./moduleA')
const { moduleB } = require('./moduleB')

const APPLICATION = createApplication({
  modules: [moduleA, moduleB]
})

const app = express()
const server = new ApolloServer({
  // typeDefs: APPLICATION.typeDefs,
  // resolvers: APPLICATION.resolvers,
  schema: APPLICATION.createSchemaForApollo(),
  cacheControl: true,
  plugins: [ResponseCachePlugin()]
})

server.applyMiddleware({ app })

app.listen(3000)
