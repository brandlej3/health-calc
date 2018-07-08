import React from 'react';
import './MacroDisplay.css';

export const MacroDisplay = props =>
    (
        <div className="block">
            { isNaN(props.unitQuantity) ? 0 : props.unitQuantity }<span>g</span>
            <br/>
            { props.unitName }
        </div>
    );