import React from "react";
import {HashRouter, Route} from "react-router-dom";
import {JournalGrid} from "./components/journal-grid";

function App() {
  return (
    <div className="container">
      <JournalGrid/>
    </div>
  );
}

export default App;
