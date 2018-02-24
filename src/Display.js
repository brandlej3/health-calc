import React, { Component } from 'react';
import './Display.css';

export class CalorieDisplay extends React.Component {
    calculateTdee()  {
        var genderMultiplier = 0;
        var weightMultiplier = 0;
        var heightMultiplier = 0;
        var ageMultiplier = 0;
        var calculatedValue = 0;
        if(this.props.stateArray.gender === "male")
        {
            genderMultiplier = 66;
            weightMultiplier = 6.23;
            heightMultiplier = 12.7;
            ageMultiplier = 6.8;
        }
        else {
            genderMultiplier = 655;
            weightMultiplier = 4.35;
            heightMultiplier = 4.7;
            ageMultiplier = 4.7;
        }
        
        calculatedValue = genderMultiplier + (weightMultiplier * this.props.stateArray.weight) + (heightMultiplier * this.props.stateArray.height) - (ageMultiplier * this.props.stateArray.age);
        return calculatedValue;
    }
    render() {
      return (
        <div>
            <p>{this.calculateTdee()}</p>
        </div>
      );
    }
  }
export default CalorieDisplay;