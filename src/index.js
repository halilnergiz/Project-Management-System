require('file-loader?name?=[name].[ext]!../public/index.html')
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import App from './App';
import { GlobalStyle, Wrapper } from './style-components/Wrapper';


ReactDOM.render(
    <HashRouter>
        <GlobalStyle />
        <App />
    </HashRouter>,
    document.getElementById('root')
)