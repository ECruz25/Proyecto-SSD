const mongoose = require('mongoose');
const User = require('../models/User');
const promisify = require('es6-promisify');

exports.register = async (req, res, next) => {
  const user = new User({ username: 'edwin' });
  const register = promisify(User.register, User);
  await register(user, 'edwin');
  console.log(user);
};

exports.getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};
