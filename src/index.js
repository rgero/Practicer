import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';

import 'react-dates/initialize'; // We need this before we use react-dates
import 'react-dates/lib/css/_datepicker.css';

//Styles
import 'normalize.css/normalize.css';
import "./styles/style.scss"


//    Components
import AppRouter from './routers/AppRouter';
import reportWebVitals from './reportWebVitals';

const store = configureStore();

const jsx = (
  <React.StrictMode>
    <Provider store={store}>
        <AppRouter />
    </Provider>
  </React.StrictMode>
)

ReactDOM.render( jsx, document.getElementById('root') );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
