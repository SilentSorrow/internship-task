const express = require("express");
const router = express.Router();
const petController = require("../controllers/petController");

router.get("/", petController.getAll);

router.post("/create", petController.create);

router.post("/findByAlias", petController.findByAlias);

router.post("/deleteMany", petController.deleteMany);

router.put("/", petController.update);

module.exports = router;