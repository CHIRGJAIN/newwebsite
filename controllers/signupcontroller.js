
const { signupUser } = require("../models/signup");


const signup = async (req, res) => {
  const { name, email, password, role } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // Ensure role is either 'admin' or 'user', default to 'user'
  const userRole = role && role.toLowerCase() === "admin" ? "admin" : "user";

  const result = await signupUser(name, email, password, userRole);
  if (result.success) {
    res.status(201).json({ message: "User registered successfully", role: userRole });
  } else {
    res.status(500).json({ message: result.message });
  }
};

module.exports = { signup };

