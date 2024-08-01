import { useState } from "preact/hooks";
import preactLogo from "./assets/preact.svg";
import viteLogo from "/vite.svg";
import "./app.css";

import Navbar from "./components/header/Navbar";
import Footer from "./components/footer/Footer";
import LandingPage from "./components/LandingPage";

import { BrowserRouter, Route, Link, Navigate, Routes } from "react-router-dom";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
      <Footer />
    </>
  );
}
