import React from "react";

import HomePage from "./components/HomePage/HomePage";
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";

import "./constants/styles/global.scss";

const App = () => {
  return (
    <div id="main-container">
      <div id="top-banner-container">
        <NavBar />
        <Header />
      </div>
      <HomePage />
    </div>
  );
};

export default App;
