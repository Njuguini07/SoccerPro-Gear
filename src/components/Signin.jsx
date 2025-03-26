import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //feedback system
  const [loading, setLoading] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  //posting data
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading("Connecting....");
    try {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);

      const response = await axios.post(
        "https://Njuguini07.pythonanywhere.com/api/signin",
        formData
      );
      if (response.data.user) {
        setLoading("");
        console.log("Res" + response.data.user);
        setSuccess(response.data.message);
        navigate("/");
      } else {
        setSuccess(response.data.message);
      }
    } catch (error) {
      setLoading("");
      setError(error.message);
    }
  };
  return (
    <div className="row justify-content-center mt-4">
      <div className="col-md-6 card shadow p-2">
        <h1>Sign in Form</h1>
        {loading}
        {success}
        {error}
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter Email"
            className="form-control"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <br />
          <input
            type="password"
            placeholder="Enter Password"
            className="form-control"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <br />
          <br />
          <button type="submit" className="bg-dark btn text-light">
            Sign in
          </button>
          <br />
          <p>
            Don't have an account? <Link to="/sign-up">Sign up</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signin;
