import React from 'react';
import './MacroDisplay.css';

export const MacroDisplay = props =>
    (
        <div className="block">
            { props.unitQuantity }<span>g</span>
            <br/>
            { props.unitName }
        </div>
    );