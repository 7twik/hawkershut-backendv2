const User = require("../models/User");
const router = require("express").Router();
const bcrypt = require("bcrypt");

const Pin = require("../models/Pin");
//REGISTER
router.post("/register", async (req, res) => {
  try {
    //generate new password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    //create new user
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
      url: req.body.url,
      aadhar: req.body.aadhar,
      blocked: false
    });

    //save user and respond
    const user = await newUser.save();
    res.status(200).json(user._id);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


//LOGIN
router.post("/login", async (req, res) => {
  try {
    //find user
    const user = await User.findOne({ username: req.body.username });
    !user && res.status(400).json("Wrong username or password");

    //validate password
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    !validPassword && res.status(400).json("Wrong username or password");

    //send response
    res.status(200).json({ _id: user._id, username: user.username,url: user.url, blocked: user.blocked });
  } catch (err) {
    res.status(500).json(err);
    console.log(res)
  }
});
router.post("/block", async (req, res) => {//api/users
  const orders = await User.updateOne(  
    {
        "username": req.body.username                  
    },{
      blocked: true,
    },{
      upsert: true,
    }
);
const orders2 = await Pin.updateOne(  
  {
      "username": req.body.username                  
  },{
    blocked: true,
  },{
    upsert: true,
  }
);
console.log(orders2);


});
router.route("/admin").get((req, res) => {
  // ROUTE:/api/web3/admin

  User.find().then((foundNotes) =>
    res.json(foundNotes)
  );
});
module.exports = router;
