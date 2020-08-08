import React from 'react';
import { useHistory } from 'react-router-dom';

function Home(){

    let history = useHistory();

    const handleButton = () => {
        console.log("saiu do home pra sobre");
        console.log("history: ", history);
        setTimeout(() => {
            history.replace("/sobre");
        },2000);
        console.log("post history: ", history);
    }

    return(
        <>
            <h4>Página HOME</h4>
            <button onClick={handleButton}>IR PARA SOBRE</button>
        </>
    );
}

export default Home;