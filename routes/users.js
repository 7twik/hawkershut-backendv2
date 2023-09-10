const User = require("../models/User");
const router = require("express").Router();
const bcrypt = require("bcrypt");

const Pin = require("../models/Pin");
const {
  register,
  login,
  block,
  admin,
} = require("../controllers/userController");

router.post("/register", register);
router.post("/login", login);
router.post("/block", block);
router.get("/admin", admin);
module.exports = router;
