const express = require("express");
const router = express.Router();
const {
  home,
  createInfo,
  getInfo,
  editInfo,
  deleteInfo,
} = require("../controllers/userInfoControllers");

router.get("/", home);
router.post("/create", createInfo);
router.get("/getinfo", getInfo);
router.put("/edit/:id", editInfo);
router.delete("/delete/:id", deleteInfo);

module.exports = router;
