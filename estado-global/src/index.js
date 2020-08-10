import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './App';
import { PersistGate } from 'redux-persist/integration/react';
//import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';

//import { createStore } from 'redux';
//import Reducers from './reducers';
//const store = createStore(Reducers);

import { store, persistor } from './store';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);