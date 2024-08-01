import { Routes, Route } from "react-router-dom";

import Footer from "./components/footer/Footer";
import Navbar from "./components/header/Navbar";
import Register from "./components/register/Register";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Banner from "./components/Banner";


function App() {
  return (
    <>
      <Navbar />
      <div className="banner_section layout_padding">
      <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/home" element={<Home />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
      </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
