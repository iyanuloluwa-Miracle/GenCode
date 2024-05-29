const argon2 = require('argon2');
const User = require('../models/auth.model');
const { generateAccessToken } = require('../utils/token.utils');

const signupUser = async (firstName, lastName, email, password) => {
  // Check if user already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new Error('User already exists');
  }

  // Hash the password using Argon2
  const hashedPassword = await argon2.hash(password);

  // Create a new user
  const user = new User({
    firstName,
    lastName,
    email,
    password: hashedPassword,
  });

  // Save the user to the database
  await user.save();
  return user;
};

const signInUser = async (email, password) => {
  // Find the user by email
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error('User not found');
  }

  // Compare the password using Argon2
  const isPasswordValid = await argon2.verify(user.password, password);
  if (!isPasswordValid) {
    throw new Error('Invalid password');
  }

  // Generate the access token
  const accessToken = generateAccessToken(user);
  return { user, accessToken };
};

module.exports = {
  signupUser,
  signInUser,
};
