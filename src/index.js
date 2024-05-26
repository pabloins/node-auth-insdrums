const express = require("express");
const v1UsersRoutes = require("./v1/routes/user.routes");
const dotenv = require("dotenv");

dotenv.config({ path: "./.env" });

const app = express();
const PORT = process.env.PORT || 3000;

app.use("/api/v1/users", v1UsersRoutes);
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`${process.env.PORT}`);
});
