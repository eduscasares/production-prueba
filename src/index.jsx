import React from 'react';
import ReactDOM from 'react-dom';

// Importaciones de Redux
import { Provider } from 'react-redux';

import App from './components/App';

import './styles/css/index.scss';
// import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
)
