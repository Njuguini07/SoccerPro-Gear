import React from "react";
import { useNavigate } from "react-router-dom";
import pic from "./notfound.jpg";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="text-light">The url you enetered was not found</h1>
      <img src={pic} className="pic" /> <br /> <br />
      <button
        onClick={() => {
          ("/");
        }}
        className="button btn light-btn"
      >
        Return home
      </button>
    </div>
  );
};

export default NotFound;
