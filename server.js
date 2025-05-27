const express = require("express");
const cors = require("cors");
const sql = require("mssql");
require("dotenv").config();

const signupRoutes = require("./routes/signuproutes");
const loginRoutes = require("./routes/loginRoutes");
const productRoutes = require("./routes/product");
const { authenticateUser, isAdmin } = require("./middleware/authmiddleware");

const app = express();
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000', // React frontend URL
  credentials: true                // allow cookies (for tokens/sessions)
}));

// Database Config
const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  database: process.env.DB_NAME,
  options: { encrypt: false, trustServerCertificate: true },
};

// Connect to MSSQL
sql.connect(config)
  .then(() => console.log("✅ Connected to MSSQL"))
  .catch((err) => console.error("❌ DB Connection Failed", err));


// Routes
app.use("/api/auth", signupRoutes);
app.use("/api/auth", loginRoutes);

// Admin Dashboard (Protected Route)
app.get("/api/admin/dashboard", authenticateUser, isAdmin, (req, res) => {
  res.json({ message: "Welcome to the Admin Dashboard" });
});

// User Home Page (Protected Route)
app.get("/api/user/home", authenticateUser, (req, res) => {
  res.json({ message: "Welcome to Home Page" });
});

app.use("/api", productRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));

app.use((err, req, res, next) => {
  console.error("🔥 Unhandled error:", err.stack);
  res.status(500).json({ message: "Something broke!" });
});

