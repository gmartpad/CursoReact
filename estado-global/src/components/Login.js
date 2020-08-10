import React from 'react';
//import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';

function Login(){

    const dispatch = useDispatch();

    const name = useSelector( state => state.usuario.name );
    const contador = useSelector( state => state.usuario.contador );

    const setName = (newName) => dispatch({
        type: 'SET_NAME',
        payload: { name: newName },
    });

    const setContador = () => dispatch({
        type: 'SET_CONTADOR',
        payload: { contador: contador+1 },
    });

    return(

        <>
            <h3>PÁGINA LOGIN</h3>
            O nome é: {name}

            <br/><br/>
            <button onClick={() => setName('Felipe')}>Trocar nome para Felipe</button>
        </>
    );

}

// const mapStateToProps = (state) => {
//     return ({
//         name: state.usuario.name
//     });
// }

// const mapDispatchToProps = (dispatch) => {
//     return ({
//         setName: (newName) => dispatch({
//             type: 'SET_NAME',
//             payload: { name: newName }
//         }),
//     });
// }

//export default connect(mapStateToProps, mapDispatchToProps)(Login);

export default Login;