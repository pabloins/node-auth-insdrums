const User = require("../models/user.model");

// Get all users
const getAllUsers = async (filterParams) => {
  try {
    const users = await User.findAll({
      where: filterParams,
    });
    return users;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw new Error("Error fetching users: " + error.message);
  }
};

// Get one user by id
const getOneUser = async (userId) => {
  try {
    const user = await User.findByPk(userId);
    if (!user) {
      throw new Error("User not found");
    }
    return user;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw new Error("Error fetching user: " + error.message);
  }
};

// Create user
const createNewUser = async (userData) => {
  try {
    const newUser = await User.create(userData);
    return newUser;
  } catch (error) {
    console.error("Error creating user:", error);
    throw new Error("Error creating user: " + error.message);
  }
};

// Create user azure
const createNewUserAzure = async (profile) => {
  try {
    let user = await User.findOne({
      where: { id: profile.id }
    });

    if(!user) {
      user = await User.create({
        oid: profile.oid,
        username: profile.displayName,
        email: profile._json.email,
      })
    }
  } catch (error) {
    console.error('Error during user registration:', error);
    throw new Error('Error during user registration: ' + error.message);
  }
};

// update user data
const updateOneUser = async (userId, updateData) => {
  try {
    const user = await User.findByPk(userId);
    if (!user) {
      throw new Error("User not found");
    }
    await user.update(updateData);
    return user;
  } catch (error) {
    console.error("Error updating user:", error);
    throw new Error("Error updating user: " + error.message);
  }
};

// delete user by id
const deleteOneUser = async (userId) => {
  try {
    const user = await User.findByPk(userId);
    if (!user) {
      throw new Error("User not found");
    }
    await user.destroy();
    return user;
  } catch (error) {
    console.error("Error deleting user:", error);
    throw new Error("Error deleting user: " + error.message);
  }
};

module.exports = {
  getAllUsers,
  getOneUser,
  createNewUser,
  createNewUserAzure,
  updateOneUser,
  deleteOneUser,
};
