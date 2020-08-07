import React from 'react';
import { useParams } from 'react-router-dom';

function Categoria(){

    let { cat } = useParams();

    return(
        <>
            <h4>Página CATEGORIA - {cat} </h4>
        </>
    );
}

export default Categoria;