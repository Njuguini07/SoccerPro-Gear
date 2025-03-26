import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import AddEquipment from "./components/AddEquipment.jsx";
import Payment from "./components/Payment";
import GetEquipment from "./components/GetEquipment.jsx";
import Notfound from "./components/NotFound";
import MyCarousel from "./components/MyCarousel.jsx";
import Footer from "./components/Footer.jsx"; 
import About from "./components/about.jsx";
import Contact from "./components/ContactUs.jsx"

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <nav>
          
          <Link to="/sign-up" className="links">
            Sign Up
          </Link>
          <Link to="/sign-in" className="links">
            Sign In
          </Link>
          <Link to="/get-equipment" className="links">
            Get Equipment
          </Link>
        </nav>
        <header className="App-header d-flex justify-content-center p-3">
          <div>
            <h1 className="mb-0">SOCCERPRO GEAR ENTERPRISES</h1>
          </div>
        </header>
        {/* Add Carousel here */}
        <MyCarousel />

        <Routes>
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/sign-in" element={<Signin />} />
          <Route path="/add-equipment" element={<AddEquipment />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/get-equipment" element={<GetEquipment />} />
          <Route path="*" element={<Notfound />} />
          <Route path="/" element={<GetEquipment />} />
          
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {/* Footer component added below Routes */}
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
