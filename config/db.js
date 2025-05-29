const sql = require("mssql");

// MSSQL Configuration
const config = {
  user: "sa",
  password: "Chirag@09",
  server: "CHIRAGJAIN",
  database: "ProductDB",
  options: {
    encrypt: false,
    trustServerCertificate: true,
  },
};

// Connect to MSSQL
const connectDB = async () => {
  try {
    await sql.connect(config);
    console.log("✅ Connected to MSSQL");
  } catch (error) {
    console.error("❌ Database Connection Failed:", error.message);
    process.exit(1);
  }
};

module.exports = { sql, connectDB };
