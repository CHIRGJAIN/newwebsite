// const { sql } = require("../config/db");

// async function getAllProducts() {
//   const result = await sql.query("SELECT * FROM Products");
//   return result.recordset;
// }

// async function addProduct(name, price, stock) {
//   await sql.query(
//     `INSERT INTO Products (name, price, stock) VALUES ('${name}', ${price}, ${stock})`
//   );
//   return { message: "Product added successfully!" };
// }

// module.exports = { getAllProducts, addProduct };


class product{
  constructor(SerialNumber,name, category,price,stock){
    this.SerialNumber = SerialNumber,
    this.name = name,
    this.category = category,
    this.price = price,
    this.stock = stock
  }
}

module.export = product;