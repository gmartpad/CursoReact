import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import CaixaDePesquisa  from './components/CaixaDePesquisa';

function App(){

    const [ textoCaixa, setTextoCaixa ] = useState('')
    const [ lista, setLista ] = useState([]);

    function returnTextoCaixa(string) {
      setTextoCaixa(string);
    }

    useEffect(() => {

      setLista([
        {titulo:'Fazer as compras', done: false},
        {titulo:'Tomar banho', done: true},
        {titulo:'Dar banho na capivara', done: false},
      ]);

    }, [])

  return (
      <>

        <CaixaDePesquisa frasePadrao="Essa frase é o value inicial" onChangeText={returnTextoCaixa}/>

        <hr/>

        <ul>
          {lista.map( (item, index) => (
            <li key={index}>
              {item.done ? <del>{item.titulo}</del> : item.titulo}
            </li>) 
          )}
        </ul>
 
      </>
  );
}

export default App;