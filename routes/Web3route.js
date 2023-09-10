const router = require("express").Router();
const { admin } = require("../controllers/userController");
const { orderMakingRoute, customerDone, getCustomer, acceptCustomer, denyCustomer, getHawker, hawkerDone, acceptHawker, hawkerReach, hawkerRecieve, denyHawker } = require("../controllers/web3Controller");
const Web3Dbb = require("../models/web3db");

////////////////CUSTOMER SIDE LINKS////////////////////////////////
router.post("/order",orderMakingRoute);

router.get("/customer",getCustomer);

router.get("/customerdone",customerDone);

router.post("/customeraccept",acceptCustomer);

router.post("/customerdeny",denyCustomer);

////////////HAWKER SIDE LINKS//////////////////////////////////////////////
router.get("/hawker",getHawker);

router.get("/hawkerdone",hawkerDone);

router.post("/hawkeraccept",acceptHawker);

router.post("/hawkerreach",hawkerReach);

router.post("/hawkerreceive",hawkerRecieve);

router.post("/hawkerdeny",denyHawker);

/////////////////////////ADMIN SITE////////////////////////////////////////

router.get("/admin",admin);


module.exports = router;
