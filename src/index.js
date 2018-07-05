import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './components/App/App.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

ReactDOM.render(
    <Router>
        <App />
    </Router>, document.getElementById('root')
);
