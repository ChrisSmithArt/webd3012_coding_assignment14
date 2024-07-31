// src/App.js

import React from "react";
import BasicInfo from "./pages/BasicInformation";
import DevSetup from "./pages/DeveloperSetup";
import Work from "./pages/Work";
import Resources from "./pages/Resources";
import Skills from "./pages/Skills";
import Navbar from "./components/NavBar";
import Header from "./components/Header";
import {BrowserRouter as Router, Routes, Route,} from "react-router-dom";

export default function App() {
  return (
    <main>
      <Header title="Chris's Portfolio"></Header>
      <Router>
          <Navbar />
          <Routes>
              <Route exact path="/" element={<BasicInfo />} />
              <Route path="/Work" element={<Work />} />
              <Route path="/Skills" element={<Skills />} />
              <Route path="/Resources" element={<Resources />} />
              <Route path="/DeveloperSetup" element={<DevSetup />} />
          </Routes>
      </Router>
    </main>
  );
}
