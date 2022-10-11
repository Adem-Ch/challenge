import logo from "./logo.svg";
import "./App.css";
import React from "react";

import data from "./Data";

function App() {
  let inputRef = React.createRef();
  const [rezValue, setRezValue] = React.useState("");

  function searchWord() {
    let searchResult = "";

    data.forEach((elem) => {
      //      if (elem[1] === inputRef.current.value) searchResult = elem[0];
      if (elem[1] === inputRef.current.value) setRezValue(elem[0]);
    });

    console.log(rezValue);
  }

  // state examples

  return (
    <div className="App">
      <header className="App-header">
        Learn React
        <input type="text" ref={inputRef}></input>
        <button onClick={searchWord}>Search</button>
        <h1>Результат поиска - {rezValue}</h1>
      </header>
    </div>
  );
}

export default App;
