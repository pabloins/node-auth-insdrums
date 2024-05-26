const getAllUsers = (req, res) => {
  res.send("Get all users");
};

const getOneUser = (req, res) => {
  res.send(`Get user ${req.params.userId}`);
};

const createNewUser = (req, res) => {
  res.send(`Create user ${req.params.userId}`);
};

const updateOneUser = (req, res) => {
  res.send(`Update user ${req.params.userId}`);
};

const deleteOneUser = (req, res) => {
  res.send(`Delete user ${req.params.userId}`);
};

module.exports = {
  getAllUsers,
  getOneUser,
  createNewUser,
  updateOneUser,
  deleteOneUser,
};
