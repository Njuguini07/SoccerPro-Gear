import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./GetEquipment.css";

const GetEquipment = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const img_url = "https://Njuguini07.pythonanywhere.com/static/images/";
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://Njuguini07.pythonanywhere.com/api/get_product_details"
        );
        setProducts(response.data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

    const index = existingCart.findIndex(
      (item) => item.product_id === product.product_id
    );

    if (index !== -1) {
      existingCart[index].quantity += 1;
    } else {
      existingCart.push({
        product_id: product.product_id,
        product_name: product.product_name,
        product_cost: product.product_cost,
        product_photo_url: img_url + product.product_photo,
        quantity: 1,
      });
    }

    localStorage.setItem("cart", JSON.stringify(existingCart));
    alert("Item added to cart!");
  };

  const filteredProducts = products
    .filter((product) =>
      product.product_name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((product) => {
      const cost = product.product_cost;
      const min = minPrice ? parseFloat(minPrice) : 0;
      const max = maxPrice ? parseFloat(maxPrice) : Infinity;
      return cost >= min && cost <= max;
    })
    .sort((a, b) =>
      sortOrder === "asc"
        ? a.product_cost - b.product_cost
        : b.product_cost - a.product_cost
    );

  return (
    <div className="container-fluid row">
      <h2 className="text-white p-2 m-2">Explore Equipments</h2>

      <div className="mb-3 col-md-4">
        <input
          type="text"
          placeholder="Search for equipment..."
          className="form-control"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="mb-3 col-md-3">
        <input
          type="number"
          placeholder="Min Price"
          className="form-control"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />
      </div>
      <div className="mb-3 col-md-3">
        <input
          type="number"
          placeholder="Max Price"
          className="form-control"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </div>

      <div className="mb-3 col-md-2">
        <select
          className="form-control"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="asc">Price ↑ (Low to High)</option>
          <option value="desc">Price ↓ (High to Low)</option>
        </select>
      </div>

      {filteredProducts.length === 0 ? (
        <p className="text-white p-4">No products found in this range.</p>
      ) : (
        filteredProducts.map((product, index) => (
          <div className="col-md-3 mb-4" key={index}>
            <div className="card shadow p-2">
              <img
                src={img_url + product.product_photo}
                alt={product.product_name}
                className="equipment-image"
              />
              <div className="card-body">
                <h5 className="mt-2">{product.product_name}</h5>
                <p className="text-muted">{product.product_description}</p>
                <b className="text-dark">Ksh.{product.product_cost}</b>
                <div className="d-flex justify-content-center mt-3">
                  {/* Center the button with flexbox */}
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="btn btn-outline-success w-100"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default GetEquipment;
