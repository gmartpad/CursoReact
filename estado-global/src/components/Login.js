import React from 'react';
import { connect } from 'react-redux';

function Login(props){

    const handleFelipe = () => {
        
    };

    return(
        <>
            <h3>PÁGINA LOGIN</h3>
            O nome é: {props.name}

            <br/><br/>
            <button onClick={() => props.setName('Felipe')}>Trocar nome para Felipe</button>
        </>
    );

}

const mapStateToProps = (state) => {
    return ({
        name: state.usuario.name
    });
}

const mapDispatchToProps = (dispatch) => {
    return ({
        setName: (newName) => dispatch({
            type: 'SET_NAME',
            payload: { name: newName }
        }),
    });
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);