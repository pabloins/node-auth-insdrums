const User = require("../models/user.model");

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

const createNewUser = async (userData) => {
  try {
    const newUser = await User.create(userData);
    return newUser;
  } catch (error) {
    console.error("Error creating user:", error);
    throw new Error("Error creating user: " + error.message);
  }
};

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
  updateOneUser,
  deleteOneUser,
};
