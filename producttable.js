import React from "react";
import { deleteProduct } from "../services/ProductService";

const ProductTable = ({ products, refreshProducts }) => {
  const handleDelete = async (id) => {
    await deleteProduct(id);
    refreshProducts();
  };

  return (
    <div>
      <h2>Manage Products</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>${product.price}</td>
              <td>
                <button onClick={() => handleDelete(product.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
