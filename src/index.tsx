import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import { BrowserRouter } from 'react-router-dom';
import TimeAgo from 'javascript-time-ago';

import ru from 'javascript-time-ago/locale/ru.json';

TimeAgo.addDefaultLocale(ru);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <BrowserRouter basename='/be-in-touch-frontend'>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </BrowserRouter>,
);
