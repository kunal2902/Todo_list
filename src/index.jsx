import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {configureStore} from '@reduxjs/toolkit'
import todoReducer from './store/state'
import {Provider} from 'react-redux'

const store=configureStore({
  reducer:{
    todoSlice:todoReducer
  },
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode></Provider>
);


