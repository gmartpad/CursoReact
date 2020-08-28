const initialState = {
    loading: false,
};

const ChuckReducer = (state = initialState, action) => {

    switch(action.type) {
        case 'SET_CHUCK_LOADING':
            return {...state, loading: action.payload.loading}
            break;
        default:
            break;
    }

    return state;

}

export default ChuckReducer;