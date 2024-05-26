const express = require("express");
const v1UsersRoutes = require("./v1/routes/user.routes");
const v1AuthRoutes = require("./v1/routes/auth.routes");
const dotenv = require("dotenv");
const sequelize = require("./config/database");

dotenv.config({ path: "./.env" });

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/api/v1/users", v1UsersRoutes);
app.use("/api/v1/login", v1AuthRoutes);

app.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection to the database has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }

  console.log(`Server running on port ${PORT} 🚀`);
});
