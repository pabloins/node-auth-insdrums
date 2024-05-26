const jwt = require("jsonwebtoken");
const User = require("../models/user.model");
const secretKey = process.env.SECRET_KEY;

const login = async (username, password) => {
  try {
    if (!username || !password) {
      throw new Error("Username and password are required");
    }

    const user = await User.findOne({ where: { username } });

    if (!user) throw new Error("User not found");

    const isMatch = await user.comparePassword(password);

    if (!isMatch) throw new Error("Invalid credentials");

    const token = jwt.sign({ username: user.username }, secretKey, {
      expiresIn: "1h",
    });

    return token;
  } catch (error) {
    console.error("Error during login:", error);
    throw new Error("Error during login: " + error.message);
  }
};

module.exports = { login };