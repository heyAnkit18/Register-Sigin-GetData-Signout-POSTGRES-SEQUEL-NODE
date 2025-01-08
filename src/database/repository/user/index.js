const { User } = require("../../models/index");

module.exports = {
  registerUser: async (data) => {
    try {
      return await User.create(data);  // Create a new user in the database
    } catch (error) {
      throw new Error("Error registering user", { cause: error });
    }
  },

  findUserByEmail: async (email) => {
    try {
      return await User.findOne({ where: { email } });
    } catch (error) {
      throw new Error("Error finding user", { cause: error });
    }
  }
};
