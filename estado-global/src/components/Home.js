import React from 'react';
import { connect } from 'react-redux';

function Home(props) {

    return(
        <>

            <h3>PÁGINA HOME</h3>

            Nome: {props.name}
            <br/>
            Contador: {props.contador}

            <button onClick={() => props.setName('jooj')} >Settar Nome</button>
            <button onClick={() => props.setContador(props.contador+1)} >Settar Contador (+1)</button>
            
            <br/><br/>

        </>
    )
};

const mapStateToProps = (state) => {
    return {
        name: state.usuario.name,
        contador: state.usuario.contador
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setName: (newName) => dispatch({
            type: 'SET_NAME',
            payload: { name: newName },
        }),
        setContador: (newValue) => dispatch({
            type: 'SET_CONTADOR',
            payload: { contador: newValue }
        }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);