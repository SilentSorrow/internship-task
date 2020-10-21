const express = require("express");
const router = express.Router();
const petController = require("../controllers/petController");
const checkParams = require("../middleware/paramChecker");

router.get("/", petController.getAll);

router.post("/create", checkParams("body", ["alias", "age", "breed"]), petController.create);

router.post("/findByAlias", checkParams("body", ["alias"]), petController.findByAlias);

router.post("/deleteMany", checkParams("body", ["pets"]), petController.deleteMany);

router.put("/", checkParams("body", ["id", "alias", "age", "breed"]), petController.update);

module.exports = router;