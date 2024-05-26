const express = require("express");
const router = express.Router();

const userController = require("../../controllers/user.controller");

const authenticateJwt = require("../../middleware/jwt.middleware");

router
  .get("/", authenticateJwt, userController.getAllUsers)
  .get("/:userId", authenticateJwt, userController.getOneUser)
  .post("/", userController.createNewUser)
  .patch("/:userId", authenticateJwt, userController.updateOneUser)
  .delete("/:userId", authenticateJwt, userController.deleteOneUser);

module.exports = router;
