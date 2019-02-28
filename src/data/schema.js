const { GraphQLObjectType, GraphQLSchema } = require('graphql');
const UserQueries = require('./user/queries');
const UserMutations = require('./user/mutations');

exports.default = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: UserQueries
  }),

  mutation: new GraphQLObjectType({
    name: 'Mutation',
    fields: UserMutations
  })
});
