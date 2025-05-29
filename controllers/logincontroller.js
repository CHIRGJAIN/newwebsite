// const { findUserByEmail, findUserByPassword} = require("../models/login");
// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcrypt");
// require("dotenv").config();

// const login = async (req, res) => {
//   const { email, password } = req.body;

//   if (!email || !password) {
//     return res.status(400).json({ message: "All fields are required" });
//   }

//   const user = await findUserByEmail(email);
//   if (!user) {
//     return res.status(401).json({ message: "Invalid email" });
  // }


//   const findUserByPassword = async (password, storedPassword) => {
//     return await bcrypt.compare(password, storedPassword);
//   };
//   console.log("Entered Password:", password);
//   console.log("Stored Password:", user.password);

//   // const findUserByRole(); // Removed as it is incomplete and unused


//   const token = jwt.sign(
//     { id: user.id, role: user.role },
//     process.env.JWT_SECRET,
//     { expiresIn: "1h" }
//   );

//   if (user.role === "admin") {
//     res.status(200).json({ message: "Admin login successful", token, redirect: "/admin" });
//   } else {
//     res.status(200).json({ message: "User login successful", token, redirect: "/" });
//   }
// };

// module.exports = { login };



const { findUserByEmail } = require("../models/login");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const user = await findUserByEmail(email);
  if (!user) {
    return res.status(401).json({ message: "Invalid email" });
  }

  // ✅ Compare the entered password with the hashed password
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(401).json({ message: "Invalid password" });
  }

  // ✅ Generate JWT Token
  const token = jwt.sign(
    { id: user.id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );

  // ✅ Redirect based on role
  if (user.role === "admin") {
    res.status(200).json({ message: "Admin login successful", token, redirect: "/admin" });
  } else {
    res.status(200).json({ message: "User login successful", token, redirect: "/" });
  }
};

module.exports = { login };
