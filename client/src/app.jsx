import { useState } from "preact/hooks";
import preactLogo from "./assets/preact.svg";
import viteLogo from "/vite.svg";
// import './app.css'

import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import { BrowserRouter, Route, Link, Navigate, Routes } from "react-router-dom";

export function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={<Banner />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
