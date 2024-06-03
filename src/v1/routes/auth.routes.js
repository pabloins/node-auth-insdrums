const express = require("express");
const router = express.Router();

const authController = require("../../controllers/auth.controller");

router.post("/login", authController.loginUser);

router.get("/openid", authController.loginAzure);
router.get("/openid/return", authController.callbackAzure);
router.get("/opeinid/logout", authController.logoutAzure);

module.exports = router;