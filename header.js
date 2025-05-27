import React, { useState } from "react";
import "../styles/Header.css";
import logo from "../assets/logo.png";
import SearchBar from "./searchbar";
import cartIcon from "../assets/cart.png"; 

function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <>
      <header className="header">
        <div className="left-section">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <SearchBar />
        </div>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            {/* <li><a href="/about">About</a></li> */}
            <li><a href="/contact">Contact</a></li>
            <li><a href="/login">Login</a></li>
            <li className="cart-button" onClick={toggleCart}>
              <img src={cartIcon} alt="Cart" />
            </li>
          </ul>
        </nav>
      </header>

      {/* Cart Section (Overlaps Slider) */}
      <div className={`cart-container ${isCartOpen ? "open" : ""}`}>
        <div className="cart-header">
          <h2>Your Cart</h2>
          <button onClick={toggleCart} className="close-cart">&times;</button>
        </div>
        <div className="cart-content">
          <p>Your cart is empty</p>
          <button className="start-shopping">Start Shopping</button>
        </div>
      </div>
    </>
  );
}

export default Header;
