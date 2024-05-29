require("../models/database");
const authService = require('../services/auth.services');
const { userRegistrationSchema, userLoginSchema } = require('../validators/auth.validator');

const signupUser = async (req, res) => {
  const { error } = userRegistrationSchema.validate(req.body);
  if (error) {
    return res.status(400).json({
      success: false,
      data: null,
      error: error.details[0].message,
      message: "Validation error",
    });
  }

  try {
    const { firstName, lastName, email, password } = req.body;
    const user = await authService.signupUser(firstName, lastName, email, password);
    res.status(201).json({
      success: true,
      data: user,
      message: "User registration successful 😎",
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      data: null,
      error: err.message,
      message: "User registration failed",
    });
  }
};

const signInUser = async (req, res) => {
  const { error } = userLoginSchema.validate(req.body);
  if (error) {
    return res.status(400).json({
      success: false,
      data: null,
      error: error.details[0].message,
      message: "Validation error",
    });
  }

  try {
    const { email, password } = req.body;
    const { user, accessToken } = await authService.signInUser(email, password);
    res.status(200).json({
      success: true,
      data: { user, accessToken },
      error: null,
      message: "Login successful 🎉",
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      data: null,
      error: err.message,
      message: null,
    });
  }
};

module.exports = {
  signupUser,
  signInUser,
};
