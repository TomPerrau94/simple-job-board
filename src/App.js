import React from "react";
import "./App.css";
import Jobs from "./Jobs";
import Header from "./Header";

function App() {
  return (
    <div>
      <Header className="header" />
      <Jobs className="jobs" />
    </div>
  );
}

export default App;
