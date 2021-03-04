const { gql } = require('apollo-server-express')
const { createModule } = require('graphql-modules')

let counter = 0;

const resolvers = {
  Query: {
    testInt: () => ++counter
  }
}

const typeDefs = gql`
  type Query {
    testInt: Int! @cacheControl(maxAge: 3)
  }
`
const moduleA = createModule({
  dirname: __dirname,
  id: 'A',
  resolvers,
  typeDefs,
})

module.exports = {
  moduleA
}