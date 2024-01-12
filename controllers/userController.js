const userModel = require("../models/userModel");
const { hashPassword } = require("../utils/passwordUtils");

const createUser = async (req, res) => {
  try {
    const { firstName, lastName, gender, email, password } = req.body;
    console.log(req.body);
    //Validation
    if (!firstName || !lastName || !gender || !email || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }
    //Validate email format
    if (!isValidEmail(email)) {
      return res.status(400).json({ error: "Invalid email format" });
    }
    //Check user
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already exists" });
    }

    //Hash the  password before storing in the database
    const hashedPassword = await hashPassword(password);

    //Create a new user
    const newUser = await userModel.create({
      firstName,
      lastName,
      gender,
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      success: true,
      message: "Successfully registered",
      newUser,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      status: false,
      message: "Internal server error",
      error: err.message,
    });
  }
};

//Validate email format
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

//Get all users
const getUser = async (req, res) => {
  try {
    const user = await userModel.findById({ _id: req.body.id });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Successfully fetched user ",
      user,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      status: false,
      message: "Internal server error",
      error: err.message,
    });
  }
};

module.exports = { createUser, getUser };
