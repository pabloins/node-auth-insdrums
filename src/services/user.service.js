const User = require("../models/user.model");

const getAllUsers = (filterParams) => {
  try {
    const allUsers = User.getAllUsers(filterParams);
    return allUsers;
  } catch (error) {
    throw error;
  }
};

const getOneUser = (userId) => {
  try {
    const user = User.getOneUser(userId);
    return user;
  } catch (error) {
    throw error;
  }
};

const createNewUser = () => {
  return;
};
const updateOneUser = () => {
  return;
};

const deleteOneUser = () => {
  return;
};
