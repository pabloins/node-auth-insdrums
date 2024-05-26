const { login } = require("../services/auth.service");

const loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const token = await login(username, password);
    res.json({ token });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

module.exports = {
  loginUser,
};
