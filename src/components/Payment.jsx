import axios from "axios";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const Payment = () => {
  const { product } = useLocation().state || {};
  const [phone, setPhone] = useState("");

  //FEEDBACK SYSTEM
  const [loading, setLoading] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("amount", product.product_cost);
      formData.append("phone", phone);

      //POST THE DATA
      const response = await axios.post(
        "https://Njuguini07.pythonanywhere.com/api/mpesa_payment",
        formData
      );
    } catch (error) {}
  };
  return (
    <div className="row justify-content-center mt-2">
      <h1 className="m-2 text-light">Make Mpesa Payment- LIPA NA MPESA</h1>
      <div className="shadow card col-md-6 p-2">
        <h1 className="text-success">LIPA NA MPESA</h1>
        <h3 className="text-dark">{product.product_name}</h3>
        <p className="text-dark">Ksh.{product.product_cost}</p>
        <form onSubmit={handleSubmit}>
          <input
            type="tel"
            placeholder="Enter 254*********"
            className="form-control"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
          <br />
          <button type="submit" className="btn btn-success w-100">
            Purchase Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Payment;
