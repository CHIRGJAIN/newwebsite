// const sql = require("mssql");
// const bcrypt = require("bcrypt");

// const signupUser = async (name, email, password, role) => {
//   try {
//     const hashedPassword = await bcrypt.hash(password, 10);
//     const request = new sql.Request();
//     request.input("name", sql.VarChar, name);
//     request.input("email", sql.VarChar, email);
//     request.input("password", sql.VarChar, hashedPassword);
//     request.input("role", sql.VarChar, role);

//     await request.query(`
//       INSERT INTO users (name, email, password, role) 
//       VALUES (@name, @email, @password, @role)
//     `);
//     return { success: true };
//   } catch (error) {
//     console.error("Signup Error:", error);
//     return { success: false, message: error.message };
//   }
// };

// module.exports = { signupUser };
const sql = require("mssql");
const bcrypt = require("bcrypt");
const dbConfig = require("../config/db");

const signupUser = async (name, email, password, role) => {
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const pool = await sql.connect(dbConfig);
    const request = pool.request();

    request.input("name", sql.VarChar, name);
    request.input("email", sql.VarChar, email);
    request.input("password", sql.VarChar, hashedPassword);
    request.input("role", sql.VarChar, role); // Store user or admin role

    await request.query(`
      INSERT INTO users (name, email, password, role) 
      VALUES (@name, @email, @password, @role)
    `);

    return { success: true };
  } catch (error) {
    console.error("Signup Error:", error);
    return { success: false, message: error.message };
  }
};

module.exports = { signupUser };
