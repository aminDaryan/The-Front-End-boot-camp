import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './fonts/Shabnam.woff2'
import App from './App';
import { Provider } from 'react-redux';
import { CookiesProvider } from 'react-cookie';
import store from './Redux/store/Store'

ReactDOM.render(
    <CookiesProvider>
        <Provider store={store}>
            <App />
        </Provider>
    </CookiesProvider>
    , document.getElementById('root'));
