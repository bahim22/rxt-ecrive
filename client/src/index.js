import React from "react";
import ReactDOM from 'react-dom';
import './index.css'
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
         <App />
    </React.StrictMode>
    );

/*  import ReactDOM from 'react-dom/client';
    import './index.css';
    // import AppRouter from 'components/AppRouter';

     ReactDOM.render(
        <React.StrictMode>
            <AppRouter />
        </React.StrictMode>,
        document.getElementById('root')
    )
*/
