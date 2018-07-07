import React from 'react';
import './Macro.css';
import { MacroDisplay } from './MacroDisplay/MacroDisplay';
import  Util from './../../helpers/util.js';

export class Macro extends React.Component{
    state = {
        gramsOfCarb: 0,
        gramsOfProtein: 0,
        gramsOfFat: 0
    }
    componentDidMount(){
        var macroObject = Util.calculateMacros(170, 2600); //replace with input from form tdee calculation
        this.setState({
            gramsOfCarb: macroObject['cGrams'],
            gramsOfProtein: macroObject['pGrams'],
            gramsOfFat: macroObject['fGrams']
        });
    }
    render(){
        return (
            <div className="divWrap">
                <MacroDisplay unitName="carbs" unitQuantity = {this.state.gramsOfCarb} />
                <MacroDisplay unitName="protein" unitQuantity = {this.state.gramsOfProtein} />
                <MacroDisplay unitName="fat" unitQuantity = {this.state.gramsOfFat} />
            </div>
        )
    }
}
export default Macro;