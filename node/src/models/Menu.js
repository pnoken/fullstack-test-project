const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema({
  monday: {
    type: String,
    required: "Enter a valid Weekday",
  },

  tuesday: {
    type: String,
    required: "Enter a Food Name",
  },

  wednesday: {
    type: String,
    required: "Enter a Food Name",
  },

  thursday: {
    type: String,
    required: "Enter a Food Name",
  },

  friday: {
    type: String,
    required: "Enter a Food Name",
  }
});

module.exports = mongoose.model("Menu", menuSchema);
