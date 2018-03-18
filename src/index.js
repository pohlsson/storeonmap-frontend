import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore, applyMiddleware  } from 'redux'
import {Provider} from 'react-redux';
import {rootReducer} from './reducers/rootReducer'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/rootSaga.js'

const sagaMiddleware = createSagaMiddleware();
let store = createStore(rootReducer,
 applyMiddleware(sagaMiddleware))


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
    , document.getElementById('root')
);

sagaMiddleware.run(rootSaga);
registerServiceWorker();
