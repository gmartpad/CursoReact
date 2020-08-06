import React, { useState, useEffect } from 'react';
//import logo from './logo.svg';
//import './App.css';

function App() {

  const [nome, setNome] = useState( localStorage.getItem('name') );

  function handleKeyUp(e) {
    if(e.keyCode == 13){
      localStorage.setItem('name', nome);
    }
  }

  // useEffect({}, [

  // ])

  return (
    <>

      Nome: {nome}
      <br/>
      localStorage.nome: {localStorage.getItem('name')}
      <br/>
      <input 
        type="text" 
        value={nome} 
        onChange={(e) => setNome(e.target.value)}
        onKeyUp={handleKeyUp}
      />

    </>
  );
}

export default App;
