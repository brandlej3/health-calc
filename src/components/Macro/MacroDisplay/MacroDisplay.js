import React from 'react';
import './MacroDisplay.css';

export const MacroDisplay = props =>
    (
        <div className="block">
            { isNaN(props.unitQuantity) ? 0 : props.unitQuantity }<span>g</span>
            <br/>
            { props.unitName }
            <input name={props.unitName} type="range" min="0" max="600" value={isNaN(props.unitQuantity) ? 0 : props.unitQuantity} onChange={(e)=>props.handleChange(e)} step="1"/>
        </div>
    );