import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { App } from './core/components/app/app';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { CharacterContextProvider } from './core/context/characters.provider';
// import from '../public/img/jaime.jpg'
const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
            <CharacterContextProvider>
                <Router>
                    <App />
                </Router>
            </CharacterContextProvider>
    </React.StrictMode>
);
reportWebVitals();
