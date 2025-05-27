const express = require("express");

// ✅ Correctly Import Product Controller
const {
  createProduct,
  getAllProducts,
  getProductBySerialNo,
  updateProduct,
  deleteProduct,
} = require("../controllers/product");

const router = express.Router();

// ✅ Check if Functions Exist Before Using
if (!createProduct || !getAllProducts || !getProductBySerialNo || !updateProduct || !deleteProduct) {
  throw new Error("One or more product controller functions are missing!");
}

// ✅ Define Product Routes
router.post("/products", createProduct); // Create Product
router.get("/getproducts", getAllProducts); // Get All Products
router.get("/:serialNo", getProductBySerialNo); // Get Product by Serial No
router.put("/:serialNo", updateProduct); // Update Product by Serial No
router.delete("/:serialNo", deleteProduct); // Delete Product by Serial No

module.exports = router;
