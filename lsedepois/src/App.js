import React, { useState, useEffect } from 'react';
import Modal from './components/Modal'
//import logo from './logo.svg';
//import './App.css';

function App() {

  // const [nome, setNome] = useState( localStorage.getItem('name') );
  const [buttonBool, setButtonBool] = useState(false);

  // function handleKeyUp(e) {
  //   if(e.keyCode == 13){
  //     localStorage.setItem('name', nome);
  //   }
  // }

  // useEffect({}, [

  // ])

  function modalAction(bool) {
    const newBool = bool;
    setButtonBool(!newBool);
  }

  return (
    <>

      <button onClick={() => modalAction(buttonBool)}>Abrir Modal</button>
      
      <Modal modalVisibility={modalAction} visible={buttonBool}>
        <h1>Testando</h1>
      </Modal>

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

    </>
  );
}

export default App;
