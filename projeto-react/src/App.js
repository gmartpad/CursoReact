import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import CaixaDePesquisa  from './components/CaixaDePesquisa';

// import './App.css';

// const TitleBox = styled.div`

//     padding: 20px;
//     border-radius: 5px;
//     border: 2px solid #00f;
//     display: flex;
//     justify-content: center;
// `;

// const Title = styled.h1`

//     font-size: 26px;
//     color: ${props => props.color || "#f0f0f0"};
//     font-weight: bold;
//     font-style: ${props => props.ativo === true ? "italic" : "normal"};

// `;

// const TitlePequeno = styled(Title)`

//     font-size: 16px;
//     border: 1px solid black;

// `;

// function formataNome(usuario){
//     return usuario.nome+" "+usuario.sobrenome;
// }

// function BemVinde(props) {
//     return <h1>Bem-vinde {props.nome}! Você tem {props.idade} anos, certo?</h1>
// }

// function Avatar(props) {
//     return (
//         <div className="avatarDiv" style={{backgroundColor: '#f00', padding: 10}}>
//             <img src={props.user.url} alt={props.user.name} />
//             <br/>
//             <strong>{props.user.name}</strong>
//         </div>
//     );
// }

function App(){

    // const [ contagem, setContagem ] = useState(0); // valor 0 no useState é o valor inicial de contagem
    
    // useEffect(() => {
    //   if(contagem == 0){
    //     document.title = "Vai começar a cachorrada!";
    //   }else{
    //     document.title = "Contagem: "+contagem;
    //   }

    //   return () => {
    //     console.log("contagem foi destruido");
    //   }
    // }, 
    // [contagem]
    // );

    // function aumentarAction() {
    //   setContagem(contagem + 1);
    // }
    
    // const [ modulo, setModulo ] = useState(0);
    /* variavel do state e set(nome da variavel do state)  */

    // const botaoAction = (sinal, modulo) => {
    //   setContagem(eval(`${contagem} ${sinal} ${modulo}`));
    // };


    // const moduloInputValue = () => {
    //   return parseInt(document.querySelector('#moduloInput').value);
    // };

    // let user = {
    //     url: "https://www.google.com.br/google.jpg",
    //     name: "logo do google"
    // }

    // let idade = 19;

    // let imagem = 'https://www.google.com.br/google.jpg';

  return (
      <>

        <CaixaDePesquisa frasePadrao="Essa frase é o value inicial"/>
        <CaixaDePesquisa />

            {/* <h1>Contagem: {contagem}</h1>
            <button onClick={aumentarAction}>Aumentar Número</button> */}

    {/* <div>{contagem}</div>
    <button onClick={() => botaoAction("+", modulo)}>aumentar</button>
    <input id="moduloInput" type="number" value={modulo} onChange={(e) => {setModulo(e.target.value)}}/>
    <button onClick={() => botaoAction("-", modulo)}>diminuir</button>
    <button onClick={() => botaoAction("*", modulo)}>mult</button> */}
    
    {/* Condicional de exibição */}
    
    {/* {modulo % 2 === 0 && // se o modulo for par exibe o botão
    
      <button onClick={() => botaoAction("/", modulo)}>div</button>
    
    }

    {modulo != 0 && //se o modulo for diferente de zero, mostra o parágrafo
    
      <>
        <br/>
        <p>Módulo a ser calculado: {modulo}</p>
      </>
    }
      <br/>
      <p>{modulo.length} algarismo{modulo.length !== 1 ? 's' : ''}</p> */}

    {/* <TitleBox>
      <Title color="#F00" ativo={true}>JAAJ</Title>
      <Title color="#0F0" ativo={true}>JEEJ</Title>
      <Title color="#00F" ativo={false}>JIIJ</Title>
      <Title ativo={false}>JOOJ</Title>
      <TitlePequeno>jooj</TitlePequeno>
    </TitleBox> */}
    {/* <Avatar user={user}/> */}
    {/* <BemVinde nome="Joana" idade="18"/>
    <BemVinde nome="Ana" idade="38"/>
    <BemVinde nome="Rafael" idade="27"/> */}
    {/* <h1>meu nome é {formataNome(usuario)} e eu tenho {idade} anos</h1>
    <img className="classe" style={{width:100, height:100}} alt="logo do google" src={imagem} /> */}
  
      </>
  );
}

//--------------------------------------------------

// Componente por Classe

// class App extends React.Component {

//   render() {
//     return <h1>Tomanokú</h1>
//   }

// }

//---------------------------------------------------

// Componente por Arrow Function

// let App = () => {
//   return <h1>Tomanokú</h1>
// }

//---------------------------------------------------

// Componente por Arrow Function encurtada

// let App = () => <h1>Tomanokú</h1>;



export default App;