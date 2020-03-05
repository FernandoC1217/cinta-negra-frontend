import React from "react";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

import "./App.css";
import Footer from "./Components/Footer/index";
import Header from "./Components/Header/index"


function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <h1>Hola mundo</h1>
      </div>
      <Footer />
    </div>
  );
}

export default App;
