import React from 'react';
import './Display.css';
import { Calorie } from './CalcDisplay/CalcDisplay';
import Util from './../../helpers/util';

export class CalorieDisplay extends React.Component {
    render() {
      return (
        <div>
            <Calorie value={
                Util.calculateTdee(this.props.stateArray.gender, this.props.stateArray.activityLevel, this.props.stateArray.weight, this.props.stateArray.height, this.props.stateArray.age)
            } />
        </div>
      );
    }
  }
export default CalorieDisplay;