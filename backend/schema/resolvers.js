const { getAllUsers, getUser, createUser } = require("../database/Queries");

const resolvers = {
  Query: {
    users: () => {
      return getAllUsers();
    },
    user: (_, args) => {
      const id = Number(args.id);
      return getUser(id);
    },
  },

  Mutation: {
    createUser: (_, args) => {
      return createUser(args.input);
    },
  },
};

module.exports = { resolvers };
