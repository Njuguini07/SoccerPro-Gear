import axios from "axios";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const Payment = () => {
  const { products } = useLocation().state || { products: [] }; // Default to empty array if undefined
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  // Ensure products is always an array before calling map
  if (!Array.isArray(products)) {
    setError("No products available for payment.");
    return (
      <div className="text-danger text-center">
        <h3>No products available for payment</h3>
      </div>
    );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      for (let product of products) {
        const formData = new FormData();
        formData.append("amount", product.product_cost * product.quantity);
        formData.append("phone", phone);

        // POST the data
        const response = await axios.post(
          "https://Njuguini07.pythonanywhere.com/api/mpesa_payment",
          formData
        );
        // Handle response if necessary
      }
    } catch (error) {
      console.error(error);
      setError("An error occurred during the payment.");
    }
  };

  return (
    <div className="row justify-content-center mt-2">
      <h1 className="m-2 text-light">Make Mpesa Payment - LIPA NA MPESA</h1>
      <div className="shadow card col-md-6 p-2">
        <h1 className="text-success">LIPA NA MPESA</h1>
        {products.length === 0 ? (
          <p className="text-danger">No products in cart for payment.</p>
        ) : (
          products.map((product, index) => (
            <div key={index}>
              <h3 className="text-dark">{product.product_name}</h3>
              <p className="text-dark">
                Ksh.{(product.product_cost * product.quantity).toLocaleString()}
              </p>
            </div>
          ))
        )}
        <form onSubmit={handleSubmit}>
          <input
            type="tel"
            placeholder="Enter 254*********"
            className="form-control"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <br />
          <button type="submit" className="btn btn-success w-100">
            Purchase Now
          </button>
        </form>
        {error && <div className="text-danger mt-2">{error}</div>}
      </div>
    </div>
  );
};

export default Payment;
