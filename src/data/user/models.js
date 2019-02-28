const {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLID
} = require('graphql');

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  }
});

const UserModel = mongoose.model('User', schema);

// types for queries
const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    _id: {
      type: new GraphQLNonNull(GraphQLID)
    },
    firstName: {
      type: GraphQLString
    },
    lastName: {
      type: GraphQLString
    }
  }
});

// types for mutations
const UserInput = new GraphQLInputObjectType({
  name: 'UserInput',
  fields: {
    firstName: {
      type: GraphQLString
    },
    lastName: {
      type: GraphQLString
    }
  }
});

module.exports = {
  UserModel, UserInput, UserType
};
