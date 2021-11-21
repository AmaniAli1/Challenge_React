import "./App.css";
import React from "react";
import Navbarr from "./components/Navbarr";
import Footer from "./components/Footer";
import Cars from "./components/Cars";

function App() {
  return (
    <div className="App">
      <Navbarr></Navbarr>
      <h1 style={{ color: "darkblue", textAlign: "center" }}>
        <i>Choisissez votre voiture préféré</i>
      </h1>
      <Cars> </Cars>
      <hr></hr>
      <Footer></Footer>
    </div>
  );
}

export default App;
