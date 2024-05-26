const express = require("express");
const router = express.Router();

const userController = require("../../controllers/user.controller");

router
  .get("/", userController.getAllUsers)
  .get("/:userId", userController.getOneUser)
  .post("/:userId", userController.createNewUser)
  .patch("/:userId", userController.updateOneUser)
  .delete("/:userId", userController.deleteOneUser);

module.exports = router;