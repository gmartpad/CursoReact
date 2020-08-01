import React from 'react';

// Componente por Função

function formataNome(usuario){
    return usuario.nome+" "+usuario.sobrenome;
}

function App(){

    let usuario = {
        nome: 'Gabriel',
        sobrenome: 'Martins Padoin'
    }

    let idade = 19;

    let imagem = 'https://www.google.com.br/google.jpg';

  return <>
    <h1>meu nome é {formataNome(usuario)} e eu tenho {idade} anos</h1>
    <img className="classe" style={{width:100, height:100}} alt="logo do google" src={imagem} />
  </>;
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