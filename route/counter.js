const express = require("express");
const router = express.Router();

const counterController = require("../controller/counterController");

// get current counter number
router.get("/counter", counterController.getCounter);

// increment counter number
router.put("/counter/add", counterController.incrementCounter);

// decrement counter number
router.put("/counter/subtract", counterController.decrementCounter);

// reset counter number
router.put("/counter/reset", counterController.resetCounter);

module.exports = router;
