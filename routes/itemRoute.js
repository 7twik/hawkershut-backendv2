const router = require("express").Router();
const ItemModel = require("../models/Itemmodel");
// const {formDel} = require("../middleware/middleware");
//create/add a item Order
router.post("/", async (req, res) => {
        const newOrder=new ItemModel(req.body);
        try{
            const savedOrder=await newOrder.save();
            res.status(200).json(savedOrder);
        }
        catch(err){
            res.status(500).json(err);
        }
});

  //Delete an item order

router.post("/del", async (req, res) => {
  const itemOrders = await ItemModel.deleteOne(  
    {
        "username": req.body.username                  
    },
    {
        function (err,result) {
            if(err){
                console.log("Error in deleting the item with username.....",err);
            }
        }
    }
);
console.log(itemOrders);
  });

//delete all item orders
router.post("/deleteAll", async (req, res) => {
    const itemOrders = await ItemModel.deleteMany(  
      {
          "username": req.body.username                  
      },
      {
          function (err,result) {
              if(err){
                  console.log("Error in deleting all the items with username.....",err);
              }
          }
      }
  );
  console.log(itemOrders);
    });


//get all item orders


router.get("/", async (req, res) => {
  try {
    const items = await ItemModel.find();
    res.status(200).json(items);
    console.log();
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;