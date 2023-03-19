const router = require("express").Router();
const Pin = require("../models/Pin");
// const {formDel} = require("../middleware/middleware");
//create a pin
router.post("/", async (req, res) => {
  const orders = await Pin.deleteOne({
    username: req.body.username,
  });
  console.log(orders);

  const newPin = new Pin(req.body);
  try {
    const savedPin = await newPin.save();
    res.status(200).json(savedPin);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get all pins
router.get("/", async (req, res) => {
  try {
    const pins = await Pin.find();
    res.status(200).json(pins);
    console.log();
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/del", async (req, res) => {
  const orders = await Pin.deleteOne({
    username: req.body.username,
  });
  console.log(orders);
});

router.get("/category", async (req, res) => {
  try {
    const cat = req.query.Category;
    const pins = await Pin.find({ title: cat });
    res.status(200).json(pins);
    console.log();
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
