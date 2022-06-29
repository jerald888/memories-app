import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {legacy_createStore, applyMiddleware, compose}  from "redux" // 12.4
import {Provider} from "react-redux" // 12.4
import thunk from "redux-thunk" // 12.4
import reducers from "./reducers/combineReducer.js" // 12.4

const store = legacy_createStore(reducers, compose(applyMiddleware(thunk))) /* 12.4 */

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store = {store}>  {/* 12.4 */}
      
      <App />

    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
