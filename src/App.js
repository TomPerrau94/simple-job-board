import React from "react";
import "./App.css";
import Jobs from "./Jobs";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <Header className="header" />
      <Jobs className="jobs" />
      <Footer
        className="footer"
        technoLink="https://fr.reactjs.org/"
        technoName="React"
        companyLink="https://www.lereacteur.io"
        companyName="le Reacteur"
        authorLink="https://github.com/TomPerrau94"
        authorName="Tom Perrau"
      />
    </div>
  );
}

export default App;
