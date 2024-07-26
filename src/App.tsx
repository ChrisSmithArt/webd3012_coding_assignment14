// src/App.js

import React from "react";
import BasicInfo from "./components/BasicInformation";
import DevSetup from "./components/DeveloperSetup";
import Work from "./components/Work";
import Resources from "./components/Resources";
import Skills from "./components/Skills";


export default function App() {
  return (
    <main>
      <BasicInfo />
      <Work />
      <Skills />
      <Resources />
      <DevSetup />
    </main>
  );
}