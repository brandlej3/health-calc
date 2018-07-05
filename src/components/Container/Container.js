import React, { Component } from 'react';
import './Container.css';
import Form from './../Form/Form';
import Header from './../Header/Header';
export class Container extends Component {
    render() {
        return (
            <div>
                < Header />
                < Form />
            </div>
        );
    }
}

export default Container;