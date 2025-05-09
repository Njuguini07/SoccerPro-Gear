import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import AddEquipment from "./components/AddEquipment.jsx";
import Payment from "./components/Payment";
import GetEquipment from "./components/GetEquipment.jsx";
import Notfound from "./components/NotFound";
import MyCarousel from "./components/MyCarousel.jsx";
import Footer from "./components/Footer.jsx";
import About from "./components/about.jsx";
import Contact from "./components/ContactUs.jsx";
import CartPage from "./components/CartPage";
import ChatBot from "./components/Chatbot.jsx";
import TopBar from "./components/TopBar"; // 🆕 TopBar for dark mode + voice search

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* Header */}
        <header className="App-header d-flex justify-content-center p-3">
          <h4 className="mb-0">SOCCERPRO GEAR ENTERPRISES</h4>
        </header>
        <TopBar />

        {/* Carousel / Landing */}
        <MyCarousel />

        {/* Routing */}
        <Routes>
          <Route path="/" element={<GetEquipment />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/sign-in" element={<Signin />} />
          <Route path="/add-equipment" element={<AddEquipment />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/get-equipment" element={<GetEquipment />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/chat" element={<ChatBot />} />
          <Route path="*" element={<Notfound />} />
        </Routes>

        {/* Footer */}
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
