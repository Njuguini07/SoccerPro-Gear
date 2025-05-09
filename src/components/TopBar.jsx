import React, { useState } from "react";
import { Link } from "react-router-dom";

const TopBar = () => {
  const [cartItems, setCartItems] = useState(0); // State to track cart items

  return (
    <div className="topbar d-flex justify-content-between align-items-center px-4 py-2 bg-dark text-white">
      {/* 👉 Left: Navigation Buttons */}
      <div className="d-flex gap-2">
        <Link
          to="/sign-up"
          className="btn btn-outline-light btn-sm rounded-pill"
        >
          Sign Up
        </Link>
        <Link
          to="/sign-in"
          className="btn btn-outline-light btn-sm rounded-pill"
        >
          Sign In
        </Link>
        <Link
          to="/get-equipment"
          className="btn btn-outline-light btn-sm rounded-pill"
        >
          Get Equipment
        </Link>
        <Link to="/chat" className="btn btn-outline-light btn-sm rounded-pill">
          ChatBot
        </Link>
      </div>

      {/* 🛒 Right: Cart Button with Item Count */}
      <div className="d-flex gap-2">
        <Link
          to="/cart"
          className="btn btn-outline-light btn-sm rounded-pill position-relative"
        >
          🛒 Cart
          {cartItems > 0 && (
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {cartItems}
            </span>
          )}
        </Link>
      </div>
    </div>
  );
};

export default TopBar;
