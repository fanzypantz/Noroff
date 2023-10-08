import React from "react";
import logo from "./logo.svg";
import Layout from "./components/layouts/Layout";
import "./App.css";

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <Layout />
    </div>
  );
}

export default App;
