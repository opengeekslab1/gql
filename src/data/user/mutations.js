const { GraphQLNonNull, GraphQLBoolean } = require('graphql');
const { UserModel, UserType, UserInput } = require('./models');

const UserCreate = {
  description: 'Create new user',
  type: GraphQLBoolean,
  args: {
    data: {
      name: 'data',
      type: GraphQLNonNull(UserInput)
    }
  },
  async resolse (root, params, options) {
    const userModel = new UserModel(params.data);
    const newUser = await userModel.save();

    if (!newUser) {
      throw new Error('Error created new user');
    }

    return true;
  }
};

module.exports = {
  UserCreate
};
