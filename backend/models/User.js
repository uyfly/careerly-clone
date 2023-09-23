const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  email: {
    type: String,
    trim: true,
    unique: 1,
  },
  nickname: {
    type: String,
    maxlength: 50,
  },
  image: {
    type: String,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = { User };
