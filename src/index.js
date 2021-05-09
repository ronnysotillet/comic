import React from "react";
import {render} from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@babel/polyfill';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import App from "./components/app";
import './sass/index.scss';


const container = document.getElementById('root');

render(<React.StrictMode>
    <App />
</React.StrictMode>, container);