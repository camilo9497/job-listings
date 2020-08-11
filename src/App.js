import React from "react";
import "./App.css";
import Header from "./header/index";
import Card from "./card/index";
import data from "./data.json";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container-cards">
        {data.map((job) => {
          return <Card {...job} key={job.id} />;
        })}
      </div>
    </div>
  );
}

export default App;
