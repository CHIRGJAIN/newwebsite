const sql = require("mssql");

const findUserByEmail = async (email) => {
  try {
    const request = new sql.Request();
    request.input("email", sql.VarChar, email);
    const result = await request.query(`
      SELECT * FROM users WHERE email = @email
    `);
    return result.recordset[0] || null;
  } catch (error) {
    console.error("Login Error:", error);
    return null;
  }
};

module.exports = { findUserByEmail };
