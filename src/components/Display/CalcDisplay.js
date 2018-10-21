import React from 'react';
import './CalcDisplay.css';
import Util from './../../helpers/util';

export const Calorie = props => 
    (
        <div>
            <p className="display">{Util.calculateTdee(props.stateArray.gender, props.stateArray.activityLevel, props.stateArray.weight, props.stateArray.height, props.stateArray.age)}</p>
        </div>
    );