import { useState } from "preact/hooks";
import preactLogo from "./assets/preact.svg";
import viteLogo from "/vite.svg";
import "./app.css";

import Navbar from "./components/header/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";

import { BrowserRouter, Route, Link, Navigate, Routes } from "react-router-dom";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}
