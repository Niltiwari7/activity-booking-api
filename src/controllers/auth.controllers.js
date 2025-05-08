import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { loginSchema, registerSchema } from "../validator/authValidators.js";
import { User } from "../models/user.models.js";


export const registerUser = async (req, res) => {
  try {
    const { error } = registerSchema.validate(req.body);

    if (error) {
      return res.status(400).json({
        message: error.details[0].message,
        status: false,
        data: null
      });
    }

    const { firstName, lastName, email, password, phone } = req.body;

    // Check if email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email is already registered" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({
      fullName: { firstName, lastName },
      email,
      password: hashedPassword,
      phone
    });

    await newUser.save();

    // Create token
    const token = jwt.sign(
      { userId: newUser._id, email: newUser.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    return res.status(201).json({
      message: "User registered successfully",
      token,
      user: newUser
    });

  } catch (error) {
    console.error("Error during registration:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const loginUser = async (req, res) => {
  try {
    // Validate input using Joi
    const { error } = loginSchema.validate(req.body);
    if (error) {
      return res.status(400).json({
        message: error.details[0].message,
        status: false,
        data: null
      });
    }


    const { email, password } = req.body;

    // Find the user by email
    const user = await User.findOne({ email });
    console.log(user)
    if (!user) {
      return res.status(400).json({
        message: "Invalid email or password",
        status: false,
        data: null
      });
    }

    // Check password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({
        message: "Invalid email or password",
        status: false,
        data: null
      });
    }

    // Generate JWT token
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    // Exclude password from user response
    const userWithoutPassword = user.toObject();
    delete userWithoutPassword.password;

    return res.status(200).json({
      message: "Login successful",
      token,
      user: userWithoutPassword
    });

  } catch (error) {
    console.error("Error during login:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};


