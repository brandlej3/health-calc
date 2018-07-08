import React from 'react';
import './MacroDisplay.css';

export const MacroDisplay = props =>
    (
        <div className="block">
            { isNaN(props.unitQuantity) ? 0 : props.unitQuantity }<span>g</span>
            <br/>
            { props.unitName }
            <input type="range" min="0" max="500" defaultValue="3" step="1"/>
        </div>
    );