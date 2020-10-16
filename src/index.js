import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware, compose} from 'redux'
import { Provider } from 'react-redux'
import rootReducer  from './reducers/rootReducer'
import thunk from 'redux-thunk'



//https://stackoverflow.com/questions/56215220/react-redux-error-passing-several-store-enhancers-to-createstore

const composeEnheancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store= createStore(
  rootReducer,
  composeEnheancer(applyMiddleware(thunk))
  );
  



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
