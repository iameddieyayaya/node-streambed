const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//User schema, all fields are required currently

const userSchema = new mongoose.Schema({
  displayName: { type: String, required: true, unique: true },
  email: {
    type: String,
    required: true,
    unique: true
    //match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/ //This is regex for email validation
  },
  password: { type: String, required: true },
  mnemonic: {
    type: String,
    required: true
  },
  rT: { type: String, default: '' },
  pub: { type: String, default: '' }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
