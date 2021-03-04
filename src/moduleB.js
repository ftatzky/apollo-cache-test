const { gql } = require('apollo-server-express')
const { createModule } = require('graphql-modules')

let str = 'B';

const resolvers = {
  Query: {
    testString: () => str += 'B'
  }
}

const typeDefs = gql`
  extend type Query {
    testString: String! @cacheControl(maxAge: 5)
  }
`

const moduleB = createModule({
  dirname: __dirname,
  id: 'B',
  resolvers,
  typeDefs,
})

module.exports = {
  moduleB
}