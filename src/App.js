import logo from "./logo.svg";
import "./App.css";
import React from "react";

import data from "./Data";

function App() {
  let inputRef = React.createRef();
  function searchWord() {
    let searchResult = "";

    data.forEach((elem) => {
      if (elem[1] === inputRef.current.value) searchResult = elem[0];
    });

    console.log(searchResult);
  }
  return (
    <div className="App">
      <header className="App-header">
        Learn React
        <input type="text" ref={inputRef}></input>
        <button onClick={searchWord}>Search</button>
      </header>
    </div>
  );
}

export default App;
