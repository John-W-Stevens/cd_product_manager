import React, { useState } from 'react';

import { Router } from "@reach/router"

import "./bootstrap.css"

import DisplayProduct from "./views/DisplayProduct"

import CreateView from "./views/CreateView"

function App() {
  const [counter, setCounter] = useState({count: 0})

  return (
    <div className="App">
    
      <Router>
        <CreateView counter={counter} setCounter={setCounter} path="/"/>
        <DisplayProduct path="/products/:id"/>
      </Router>      
    </div>
  );
}

export default App;
