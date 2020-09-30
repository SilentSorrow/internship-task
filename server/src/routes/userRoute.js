const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/me", userController.getUser);

router.get("/logOut", userController.logOut);

router.get("/verifyEmail", userController.verifyEmail);

router.post("/signup",userController.signUp);

router.post("/signin", userController.signIn);

router.post("/resendEmail", userController.resendEmail);


module.exports = router;