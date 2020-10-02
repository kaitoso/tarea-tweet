const mongoose = require("mongoose");
const moment = require("moment");

const userSchema = new mongoose.Schema(
  {
    names: {
      type: String,
      trim: true,
      required: true,
      maxlength: 32,
    },
    surnames: {
      type: String,
      trim: true,
      required: true,
      maxlength: 32,
    },
    password: {
      type: String,
      trim: true,
      required: true,
    },
    birthdate: {
      type: Date,
      default: moment().format("DD/MM/YYYY HH:mm"),
      required: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    avatar: {
      type: String,
      trim: true,
      default: "",
    },
    banner: {
      type: String,
      trim: true,
      default: "",
    },
    biography: {
      type: String,
      trim: true,
      default: "",
    },
    location: {
      type: String,
      trim: true,
      default: "",
    },
    website: {
      type: String,
      trim: true,
      default: "",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Users", userSchema);
