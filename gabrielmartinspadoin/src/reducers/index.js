import { combineReducers } from 'redux';

import ApiReducer from './ApiReducer';
import ChuckReducer from './ChuckReducer';
import KanyeReducer from './KanyeReducer';

export default combineReducers({
    api: ApiReducer,
    chuck: ChuckReducer,
    kanye: KanyeReducer,
});