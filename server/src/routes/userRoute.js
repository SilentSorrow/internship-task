const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const checkParams = require("../middleware/paramChecker");

router.get("/me", userController.getUser);

router.get("/logOut", userController.logOut);
 
router.post("/signUp", checkParams("body", ["fullName", "email", "age", "password"]), userController.signUp);

router.post("/signIn",  checkParams("body", ["email", "password"]), userController.signIn);

router.get("/verifyEmail", checkParams("query", ["hash"]), userController.verifyEmail);

router.post("/resendEmail", checkParams("body", ["email", "password"]), userController.resendEmail);


module.exports = router;