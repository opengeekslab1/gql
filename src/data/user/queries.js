const {
  GraphQLID,
  GraphQLList,
  GraphQLNonNull
} = require('graphql');

const { UserModel, UserType, UserInput } = require('./models');

const User = {
  type: UserType,
  args: {
    id: {
      name: 'id',
      type: GraphQLNonNull(GraphQLID)
    }
  },
  resolve (root, params, options) {
    return UserModel
      .findById(params.id)
      .exec()
  }
};

const Users = {
  type: GraphQLList(UserType),
  args: {},
  resolve (root, params, options) {
    return UserModel
      .find()
      .exec()
  }
};

module.exports = {
  User,
  Users
};
