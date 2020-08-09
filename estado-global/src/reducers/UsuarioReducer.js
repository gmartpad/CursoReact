const initialState = {
    name: 'Gabriel',
    contador: 0
};

const UsuarioReducer = (state = initialState, action) => {
    
    switch(action.type){
        case 'SET_NAME':
            return { ...state, name: action.payload.name }
            break;
        case 'SET_CONTADOR':
            return { ...state, contador: action.payload.contador }
            break;
    }       
    
    return state
};

export default UsuarioReducer;