const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const adminSchmea = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "admin",
    },
  },
  {
    timeseries: true,
  }
);

const Admin = mongoose.model("Admin", adminSchmea);
module.exports = Admin;