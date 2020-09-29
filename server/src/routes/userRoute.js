const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/user", userController.getUser);

router.post("/signup", userController.signUp);

router.post("/signin", userController.signIn);

router.post("/resendEmail", userController.resendEmail);

router.post("/verifyEmail", userController.verifyEmail);

module.exports = router;