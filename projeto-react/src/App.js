import React from 'react';

// function formataNome(usuario){
//     return usuario.nome+" "+usuario.sobrenome;
// }

// function BemVinde(props) {
//     return <h1>Bem-vinde {props.nome}! Você tem {props.idade} anos, certo?</h1>
// }

function Avatar(props) {
    return (
        <>
            <img src={props.user.url} alt={props.user.name} />
            <br/>
            <strong>{props.user.name}</strong>
        </>
    );
}

function App(){

    let user = {
        url: "https://www.google.com.br/google.jpg",
        name: "logo do google"
    }

    // let idade = 19;

    // let imagem = 'https://www.google.com.br/google.jpg';

  return <>
    <Avatar user={user}/>
    {/* <BemVinde nome="Joana" idade="18"/>
    <BemVinde nome="Ana" idade="38"/>
    <BemVinde nome="Rafael" idade="27"/> */}
    {/* <h1>meu nome é {formataNome(usuario)} e eu tenho {idade} anos</h1>
    <img className="classe" style={{width:100, height:100}} alt="logo do google" src={imagem} /> */}
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