const userService = require('../services/user.service');

const getAllUsers = async (req, res) => {
  try {
    const filterParams = req.query;
    const users = await userService.getAllUsers(filterParams);
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getOneUser = async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await userService.getOneUser(userId);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createNewUser = async (req, res) => {
  try {
    const userData = req.body;
    const newUser = await userService.createNewUser(userData);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateOneUser = async (req, res) => {
  try {
    const userId = req.params.userId;
    const updateData = req.body;
    const updatedUser = await userService.updateOneUser(userId, updateData);
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteOneUser = async (req, res) => {
  try {
    const userId = req.params.userId;
    const deletedUser = await userService.deleteOneUser(userId);
    res.status(200).json(deletedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllUsers,
  getOneUser,
  createNewUser,
  updateOneUser,
  deleteOneUser
};
