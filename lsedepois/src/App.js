import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Categoria from './pages/Categoria';
import Produto from './pages/Produto';
//import Modal from './components/Modal'
//import logo from './logo.svg';
//import './App.css';

function App() {

  // const [nome, setNome] = useState( localStorage.getItem('name') );
  //const [buttonBool, setButtonBool] = useState(false);

  // function handleKeyUp(e) {
  //   if(e.keyCode == 13){
  //     localStorage.setItem('name', nome);
  //   }
  // }

  // useEffect({}, [

  // ])

  // function modalAction(bool) {
  //   const newBool = bool;
  //   setButtonBool(!newBool);
  // }

  return (
    <BrowserRouter>

      <header>
        <h1>Meu site super divertido</h1>
        <nav>
          <ul>
          <li>
            <Link to="/" >Home</Link>
          </li>
          <li>
            <Link to="/sobre">Sobre</Link>
          </li>
          <li>
            <Link to="/categoria/noticias">Notícias</Link>
          </li>
          <li>
            <Link to="/categoria/esportes">Esportes</Link>
          </li>
          <li>
            <Link to="/categoria/viagem">Viagem</Link>
          </li>
          <li>
            <Link to="/produto/123">Produto</Link>
          </li>
          </ul>
        </nav>
      </header>
      <hr/>

      <Switch>
        <Route exact path="/"> {/**se a url for exact o que tá no path, ele renderezina o elemento */}
          <Home />
        </Route>
        <Route path="/sobre">
          <Sobre />
        </Route>
        <Route path="/categoria/:cat">
          <Categoria />
        </Route>
        <Route path="/produto/:id">
          <Produto />
        </Route>
      </Switch>

      <hr/>
      <footer>
        Todos os Direitos Reservados
      </footer>
      {/* <button onClick={() => modalAction(buttonBool)}>Abrir Modal</button>
      
      <Modal modalVisibility={modalAction} visible={buttonBool}>
        <h1>Testando</h1>
      </Modal> */}

      {/* Nome: {nome}
      <br/>
      localStorage.nome: {localStorage.getItem('name')}
      <br/>
      <input 
        type="text" 
        value={nome} 
        onChange={(e) => setNome(e.target.value)}
        onKeyUp={handleKeyUp}
      /> */}

    </BrowserRouter>

  );
}

export default App;
