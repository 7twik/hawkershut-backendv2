const { createCustomer, loginCustomer } = require("../controllers/customerController");
const User = require("../models/userSchema");
const router = require("express").Router();
const bcrypt = require("bcrypt");
///////////////////For customers  ///////////////////////////
//REGISTER
router.post("/register", createCustomer);

//LOGIN
router.post("/login",loginCustomer);

module.exports = router;