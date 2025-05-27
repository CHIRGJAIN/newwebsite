import React, { useState } from "react";
import "../styles/Product.css";
import { ShoppingBag, X } from "lucide-react";

const products = [
  { id: 1, name: "Iphone 11", color: "Serious Black", price: "$619.99", image: require("../assets/iphone-black.png") },
  { id: 2, name: "Iphone 11", color: "Subway Blue", price: "$619.99", image: require("../assets/iphone-blue.png") },
  { id: 3, name: "Iphone 11", color: "Product RED", price: "$619.99", image: require("../assets/iphone-red.png") },
  { id: 4, name: "Iphone 11", color: "Milky White", price: "$619.99", image: require("../assets/iphone-white.png") },
  { id: 5, name: "Dell XPS 15 2-in-1", color: "Midnight Gray", price: "$3199.99", image: require("../assets/dell-xps.png") }
];

function Products() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  return (
    <div className="products-container">
      <header>
        <h2>OUR PRODUCTS</h2>
        <div className="cart-icon" onClick={() => setIsCartOpen(!isCartOpen)}>
          <ShoppingBag size={28} />
          <span className="cart-count">{cart.length}</span>
        </div>
      </header>

      {/* Cart Modal */}
      {isCartOpen && (
        <div className="cart-modal">
          <div className="cart-header">
            <h3>Your Cart</h3>
            <X size={22} className="close-btn" onClick={() => setIsCartOpen(false)} />
          </div>
          {cart.length === 0 ? (
            <p className="empty-cart">Your cart is empty</p>
          ) : (
            <ul>
              {cart.map((item, index) => (
                <li key={index} className="cart-item">
                  <img src={item.image} alt={item.name} />
                  <div className="cart-details">
                    <h4>{item.name}</h4>
                    <p>{item.color}</p>
                    <span>{item.price}</span>
                  </div>
                  <button onClick={() => removeFromCart(index)}>❌</button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.color}</p>
            <span>{product.price}</span>
            <button onClick={() => addToCart(product)}>🛒</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
