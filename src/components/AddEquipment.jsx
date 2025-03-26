import axios from 'axios';
import React, { use, useState } from 'react'
import { data } from 'react-router-dom';

const AddEquipment = () => {
  const [product_name,setProductName]=useState("");
  const [product_description,setProductDescription]=useState("");
  const [product_cost,setProductCost]=useState("");
  const [product_photo,setProductPhoto]=useState("");

  //feedback system
  const[loading,setLoading]=useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async(e)=>{
        e.preventDefault();
        setLoading("Connecting...")
try {
  const formData = new FormData();
  formData.append("product_name", product_name);
  formData.append("product_description", product_description);
  formData.append("product_cost", product_cost);
  formData.append("product_photo", product_photo);

  const response = await axios.post(
    "https://Njuguini07.pythonanywhere.com/api/add_products",
    formData
  );
 if (response.data.message){
  setLoading("")
  setSuccess(response.data.message)
  setProductName("")
  setProductDescription("")
  setProductCost("")
  setProductPhoto("")
 }
 
  
} catch (error) {
  setLoading("");
  setSuccess("")
  setError(error.message);
}
  }
  return (
    <div className="row justify-content-center mt-4">
      <div className="col-md-6 card shadow p-2">
        <h1>Add Equipment</h1>
        {loading}
        {success}
        {error}
        <form onSubmit={handleSubmit}>        
           <input
            type="text"
            placeholder="Enter Equipment name"
            className="form-control"
            value={product_name}
            onChange={(e) => {
              setProductName(e.target.value);
            }}
          />
          <br />
          <textarea
            className="form-control"
            value={product_description}
            onChange={(e) => {
              setProductDescription(e.target.value);
            }}
          >
            Product description
          </textarea>
          <br />
          <input
            type="number"
            placeholder="Product cost"
            className="form-control"
            value={product_cost}
            onChange={(e) => {
              setProductCost(e.target.value);
            }}
          />
          <br />
          <input
            type="file"
            placeholder="Product photo"
            className="form-control"
            onChange={(e)=>{setProductPhoto(e.target.files[0])}}
          />
          <br />
          <button className="bg-success btn" type='submit'>Add</button>
        </form>
      </div>
    </div>
  );
}

export default AddEquipment