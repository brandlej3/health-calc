import React from 'react';
import './Macro.css';
import store from './../../index';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'; //connect to react store
import { addMacroObj } from './../../actions';
import { MacroDisplay } from './MacroDisplay/MacroDisplay';
import  Util from './../../helpers/util.js';

export class Macro extends React.Component{
    state = {
        gramsOfCarb: 0,
        gramsOfProtein: 0,
        gramsOfFat: 0
    }

    componentDidMount(){
        var data = store.getState();
        var calories = Util.calculateTdee(data.gender, data.activityLevel, data.weight, data.height, data.age)
        var macroObject = Util.calculateMacros(data.weight, calories); //replace with input from form tdee calculation
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
function mapDispatchToProps (dispatch)  {
    return { actions: bindActionCreators(addMacroObj, dispatch) }
  }
export default connect(mapDispatchToProps)(Macro);