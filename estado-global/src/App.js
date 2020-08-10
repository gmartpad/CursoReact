import React from 'react';
import { BrowserRouter, Route, Redirect, Switch, Link } from 'react-router-dom';
import Home from './components/Home';
import Sobre from './components/Sobre';
import Login from './components/Login';


function App() {

  const isLogged = false;

  const PrivateRoute = ({ children, ...rest }) => {
    return (
      <Route {...rest} >
        { isLogged ? children : <Redirect to="/login"/> }
      </Route>
    );
  }

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
        <PrivateRoute path="/sobre">
          <Sobre/>
        </PrivateRoute>
        <Route>
          <Login/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
