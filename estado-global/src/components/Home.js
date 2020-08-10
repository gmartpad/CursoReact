import React from 'react';
//import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';

function Home() {

    const dispatch = useDispatch();

    const name = useSelector(state => state.usuario.name);
    const contador = useSelector(state => state.usuario.contador);

    const setName = (newName) => dispatch({
        type: 'SET_NAME',
        payload: { name: newName}
    });

    const setContador = () => dispatch({
        type: 'SET_CONTADOR',
        payload: { contador: contador+1 }
    });

    return(
        <>

            <h3>PÁGINA HOME</h3>

            Nome: {name}
            <br/>
            Contador: {contador}

            <button onClick={() => setName('jooj')} >Settar Nome</button>
            <button onClick={setContador} >Settar Contador (+1)</button>
            
            <br/><br/>

        </>
    )
};

// const mapStateToProps = (state) => {
//     return {
//         name: state.usuario.name,
//         contador: state.usuario.contador
//     };
// };

// const mapDispatchToProps = (dispatch) => {
//     return {
//         setName: (newName) => dispatch({
//             type: 'SET_NAME',
//             payload: { name: newName },
//         }),
//         setContador: (newValue) => dispatch({
//             type: 'SET_CONTADOR',
//             payload: { contador: newValue }
//         }),
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Home);

export default Home;