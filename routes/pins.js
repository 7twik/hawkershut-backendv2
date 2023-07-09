const router = require("express").Router();
const Pin = require("../models/Pin");
// const {formDel} = require("../middleware/middleware");
//create a pin
router.post("/", async (req, res) => {
          const orders = await Pin.updateOne(  
            {
                "username": req.body.username                  
            },{
              lat: req.body.lat,
              long: req.body.long,
              title: req.body.title,
              desc: req.body.desc,
              items:req.body.items,
            },{
              upsert: true,
            }
        );
        console.log(orders);
        

  // const newPin = new Pin(req.body);
  // try {
  //   const savedPin = await newPin.save();
  //   res.status(200).json(savedPin);
  // } catch (err) {
  //   res.status(500).json(err);
  // }
});


router.post("/del", async (req, res) => {
  const orders = await Pin.deleteOne(  
    {
        "username": req.body.username                  
    }
);
console.log(orders);
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

router.route("/updatepins").post((req,res)=>{
  
  Pin.updateMany({"username":req.body.username},{
    lat: req.body.lat,
    long: req.body.long,
  }, function (err, raw) {
    if (err) {
      res.status(500);
      res.send(err);
    } else {
      console.log(raw);
      res.status(200);
      res.send();
    }
});
});


router.get("/category", async (req, res) => {
  try {
    console.log(req.query);
    const cat=req.query.Category;
    const pins = await Pin.find({title:cat});
    res.status(200).json(pins);
    console.log(req.query);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.post("/block", async (req, res) => {//api/pins/block
  const orders = await User.updateOne(  
    {
        "username": req.body.username                  
    },{
      blocked: true,
    },{
      upsert: true,
    }
);
console.log(orders);


});

module.exports = router;