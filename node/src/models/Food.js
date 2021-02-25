const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
  day: {
    type: String,
    required: "Enter a valid Weekday"
  },

  food: {
    type: String,
    required: "Enter a Food Name"
  }
});

module.exports = mongoose.model("Food", foodSchema);
