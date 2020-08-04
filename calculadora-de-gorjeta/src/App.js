import React, {useState} from 'react';
import styled from 'styled-components';
//import logo from './logo.svg';
//import './App.css';

function real(number){
  return "R$"+parseFloat(number).toFixed(2);
}

function App() {

  const [subtotalConta, setSubtotalConta] = useState('');
  const [porcentagemGorjeta, setPorcentagemGorjeta] = useState('');

  return (
    <>
      <h1>Calculadora de Gorjeta</h1>
      <div>
        <h3>Quanto deu a conta?</h3>
        <input type="number" id="subtotalConta" value={subtotalConta} onChange={(e) => {setSubtotalConta(e.target.value)}}/>
        <br/>
        <h3>Qual a porcentagem de gorjeta?</h3>
        <input type="number" id="porcentagemGorjeta" value={porcentagemGorjeta} onChange={(e) => {setPorcentagemGorjeta(e.target.value)}}/>
        <hr/>
        {subtotalConta != 0 && subtotalConta > 0 &&
        
          <h3>Sub-total: {real(subtotalConta)}</h3>
        }

        {porcentagemGorjeta != 0 && porcentagemGorjeta > 0 &&
        
          <h3>Gorjeta({porcentagemGorjeta}%): {real((subtotalConta/100)*porcentagemGorjeta)}</h3>
        }

        {subtotalConta != 0 && subtotalConta > 0 && porcentagemGorjeta != 0 && porcentagemGorjeta > 0 &&

          <strong>Total: {real(parseFloat(subtotalConta) + parseFloat((subtotalConta/100)*porcentagemGorjeta))}</strong>
        }
      </div>
    </>
  );
}

export default App;
