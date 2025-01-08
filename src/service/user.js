const { registerUser, findUserByEmail }=require('../database/repository/index')


const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET || 'your_jwt_secret';

module.exports = {
  // Register
  register: async (req, res) => {
    try {
      const { name, email, password } = req.body;


      const existingUser = await findUserByEmail(email);
      if (existingUser) {
        return res.status(400).json({ message: "Email is already in use" });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      // Create new user
      const newUser = await registerUser({
        name,
        email,
        password: hashedPassword,
      });

      res.status(201).json({
        message: "Registration successful",
        user: { id: newUser.id, email: newUser.email },
      });
    } catch (error) {
      console.error("Registration error:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },

  // Sign In
  signIn: async (req, res) => {
    try {
      const { email, password } = req.body;

      const user = await findUserByEmail(email);
      if (!user) {
        return res.status(401).json({ message: "Invalid email or password" });
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ message: "Invalid email or password" });
      }

      const token = jwt.sign({ id: user.id, email: user.email }, jwtSecret, {
        expiresIn: "1h",
      });

      res.status(200).json({ token, message: "Sign-in successful" });
    } catch (error) {
      console.error("Sign-in error:", error);
      res.status(500).json({ message: "An error occurred during sign-in" });
    }
  },

  // Logout
  logout: async (req, res) => {
    try {
      res.status(200).json({ message: "Sign-out successful" });
    } catch (error) {
      console.error("Logout error:", error);
      res.status(500).json({ message: "An error occurred during sign-out" });
    }
  }
};