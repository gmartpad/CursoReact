import React from 'react';
//import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function useQuery() {
    return new URLSearchParams( useLocation().search );
}

function Categoria(){

    //let { cat } = useParams();

    console.log(useLocation());

    let query = useQuery();

    let cat = query.get('tipo');

    return(
        <>
            <h4>Página CATEGORIA - {cat} </h4>
        </>
    );
}

export default Categoria;