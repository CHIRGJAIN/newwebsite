const sql = require("mssql");
const dbConfig = require("../config/db"); // Ensure you have a proper DB config


// create product
const createProduct = async (req, res) => {
    try {
        const { SerialNumber, name, price, category, stock } = req.body;

        if (!SerialNumber) {
            return res.status(400).json({ error: "SerialNumber is required" });
        }

        const pool = await sql.connect(dbConfig);

        const queryStr = "SELECT * FROM products WHERE SerialNumber = @SerialNumber";
        const result = await pool.request()
            .input("SerialNumber", sql.VarChar, SerialNumber)
            .query(queryStr);

        if (result.recordset.length > 0) {
            return res.status(400).json({ message: "Product already exists" });
        }

        const insertQuery = `INSERT INTO products (SerialNumber, name, price, category, stock) 
                             VALUES (@SerialNumber, @name, @price, @category, @stock)`;

        await pool
            .request()
            .input("SerialNumber", sql.VarChar, SerialNumber)
            .input("name", sql.VarChar, name)
            .input("price", sql.Decimal(10,2), price)
            .input("category", sql.VarChar, category)
            .input("stock", sql.Int, stock)
            .query(insertQuery);

        res.status(201).json({ message: "Product created successfully" });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};



// ✅ Get All Products (including stock)
const getAllProducts = async (req, res) => {
    try {
        const pool = await sql.connect(dbConfig); // ✅ Await DB connection
        const result = await pool.request().query("SELECT * FROM products"); // ✅ Await Query Execution

        if (result.recordset.length === 0) {
            console.log("🟠 No products found!");
            return res.status(404).json({ error: "No products found" });
        }

        console.log("🟢 Products retrieved:", result.recordset);
        res.json(result.recordset);
    } catch (error) {
        console.error("🔴 Error fetching products:", error);
        res.status(500).json({ error: error.message });
    }
};




// ✅ Get Product by Serial Number (including stock)
const getProductBySerialNo = async (req, res) => {
    try {
        const { serialNo } = req.params; // ✅ Extract parameter correctly
        if (!serialNo) {
            return res.status(400).json({ error: "Serial number is required" }); // ✅ Handle missing serialNo
        }

        const pool = await sql.connect(dbConfig);
        const result = await pool.request()
            .input("SerialNumber", sql.VarChar, serialNo)
            .query("SELECT * FROM products WHERE SerialNumber = @SerialNumber");

        if (!result.recordset || result.recordset.length === 0) {
            return res.status(404).json({ error: "Product not found" });
        }

        res.json(result.recordset[0]);
    } catch (error) {
        console.error("🔴 Error fetching product by serial number:", error);
        res.status(500).json({ error: error.message });
    }
};


// ✅ Update Product (with stock)
const updateProduct = async (req, res) => {
    try {
        const { name, price, category, stock } = req.body;
        const pool = await sql.connect(dbConfig);

        console.log("DB Connected for updateProduct");

        const updateQuery = `UPDATE products 
                             SET name = @name, price = @price, category = @category, stock = @stock
                             WHERE SerialNumber = @serialNo`;  // Fixed param name

        const result = await pool
            .request()
            .input("serialNo", sql.VarChar, req.params.serialNo) // Fixed param
            .input("name", sql.VarChar, name)
            .input("price", sql.Decimal, price)
            .input("category", sql.VarChar, category)
            .input("stock", sql.Int, stock)
            .query(updateQuery);

        console.log("Rows Affected:", result.rowsAffected);  // Debugging log

        if (result.rowsAffected[0] === 0) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.json({ message: "Product updated successfully" });
    } catch (error) {
        console.error("Error updating product:", error);
        res.status(500).json({ error: error.message });
    }
};


// ✅ Delete Product
const deleteProduct = async (req, res) => {
    try {
        const pool = await sql.connect(dbConfig);
        console.log("DB Connected for deleteProduct");

        const deleteQuery = "DELETE FROM products WHERE SerialNumber = @serialNo"; // Fixed param name

        const result = await pool
            .request()
            .input("serialNo", sql.VarChar, req.params.serialNo) // Fixed param name
            .query(deleteQuery);

        console.log("Rows Affected:", result.rowsAffected); // Debugging log

        if (result.rowsAffected[0] === 0) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.json({ message: "Product deleted successfully" });
    } catch (error) {
        console.error("Error deleting product:", error);
        res.status(500).json({ error: error.message });
    }
};


module.exports = {
    createProduct,
    getAllProducts,
    getProductBySerialNo,
    updateProduct,
    deleteProduct,
};

  