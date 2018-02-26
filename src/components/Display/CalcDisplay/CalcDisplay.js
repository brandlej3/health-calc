import React from 'react';
import './CalcDisplay.css';

export const Calorie = props => 
    (
        <div>
            <p className="display">{props.value}</p>
        </div>
    );