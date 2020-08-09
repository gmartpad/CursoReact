import React from 'react';
import { BrowserRouter, Route, Redirect, Switch, Link } from 'react-router-dom';
import Home from './components/Home';
import Sobre from './components/Sobre';


function App() {
  return (
    <BrowserRouter>
      <div className="header">
        <h1>TITULO</h1>
      </div>

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/sobre">Sobre</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/sobre">
          <Sobre/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
