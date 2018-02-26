import React from 'react';
import './CalcDisplay.css';

class Display extends React.Component {   
    render() {
        return (
            <div>
                <p className="display">{this.props.value}</p>
            </div>
        );
    }

}
export default Display;