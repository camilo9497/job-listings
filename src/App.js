import React from "react";
import "./App.css";
import Header from "./header/index";
import Card from "./card/index";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container-cards">
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default App;
