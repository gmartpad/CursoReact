import React from 'react';
import { useParams } from 'react-router-dom';

function Produto(){

    let { id } = useParams();

    return(
        <>
            <h4>Página PRODUTO</h4>
            Id do produto: { id }
        </>
    );
}

export default Produto;