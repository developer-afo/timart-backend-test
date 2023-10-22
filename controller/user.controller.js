const User = require('../models/user.model');

async function createUser(_, args) {
  try {
    const { username, email, firstName, lastName } = args;

    // Validate fields (if needed, can also be handled by GraphQL input validation)
    if (!username || !email || !firstName || !lastName) {
      throw new Error("All fields are required");
    }

    const userEmailExists = await User.findOne({ where: { email } });

    if (userEmailExists) {
      throw new Error("User already exists");
    }

    const usernameExists = await User.findOne({ where: { username } });

    if (usernameExists) {
      throw new Error("Username already exists");
    }

    const user = await User.create({ username, email, firstName, lastName });
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
}

async function getUserById(_, args) {
  try {
    const { id } = args;
    const user = await User.findByPk(id);

    if (!user) {
      throw new Error("User not found");
    }

    return user;
  } catch (error) {
    throw new Error(error.message);
  }
}

module.exports = { createUser, getUserById };
