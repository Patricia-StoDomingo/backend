const mongoose = require("mongoose");

const counterSchema = new mongoose.Schema({
  current: "Number",
});

module.exports = mongoose.model("Counter", counterSchema);
