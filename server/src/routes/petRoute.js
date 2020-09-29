const express = require("express");
const router = express.Router();
const petController = require("../controllers/petController");

router.get("/getAll", petController.getAll);

router.post("/create", petController.create);

router.post("/findByAlias", petController.findByAlias);

router.post("/deleteMany", petController.deleteMany);

router.post("/update", petController.update);

module.exports = router;