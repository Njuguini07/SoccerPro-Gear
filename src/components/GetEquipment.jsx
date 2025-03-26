import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./GetEquipment.css";

const GetEquipment = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // State for search input
  const img_url = "https://Njuguini07.pythonanywhere.com/static/images/";
  const navigate = useNavigate();

  const getEquipment = async () => {
    try {
      const response = await axios.get(
        "https://Njuguini07.pythonanywhere.com/api/get_product_details"
      );
      setProducts(response.data.products);
    } catch (error) {
      console.error("Error fetching products: ", error);
    }
  };

  useEffect(() => {
    getEquipment();
  }, []);

  // Filter products based on search term
  const filteredProducts = products.filter((product) =>
    product.product_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container-fluid row">
      <h2 className="text-white p-2 m-2">Explore Equipments</h2>

      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search for equipment..."
          className="form-control"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Update the search term
        />
      </div>

      {filteredProducts?.map((product, index) => (
        <div className="col-md-3 mb-4" key={index}>
          <div className="card shadow p-2">
            <img
              src={img_url + product.product_photo}
              alt={product.product_name} // Change alt to product_name for better accessibility
              className="equipment-image"
            />
            <div className="card-body">
              <h5 className="mt-2">{product.product_name}</h5>
              <p className="text-muted">{product.product_description}</p>
              <b className="text-dark">Ksh.{product.product_cost}</b> <br />
              <button
                onClick={() => {
                  navigate("/payment", { state: { product } });
                }}
                className="btn btn-dark"
              >
             Purchase
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GetEquipment;
