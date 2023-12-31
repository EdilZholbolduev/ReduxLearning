import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import {applyMiddleware, createStore} from 'redux'
import RootReducer from './redux/rootReducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';



const store = createStore(RootReducer, applyMiddleware(logger, thunk))
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store = {store}>  
    <App />
  </Provider>
);


























