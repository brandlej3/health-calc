import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import './index.css';
import { Provider } from 'react-redux';
import { App } from './components/App/App.js';
import reducer from './reducers';

const store = createStore(reducer);

ReactDOM.render(
        <Provider store={store}>
                <App />
        </Provider>, document.getElementById('root')
);
export default store;