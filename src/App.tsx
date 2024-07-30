// src/App.js

import React from "react";
import BasicInfo from "./components/BasicInformation";
import DevSetup from "./components/DeveloperSetup";
import Work from "./components/Work";
import Resources from "./components/Resources";
import Skills from "./components/Skills";
import { Header } from "./components";

export default function App() {
  return (
    <main>
      <Header title="Chris's Portfolio"></Header>
      <BasicInfo />
      <Work />
      <Skills />
      <Resources />
      <DevSetup />
    </main>
  );
}
