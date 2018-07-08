import React from 'react';
import './Macro.css';
import store from './../../index';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'; //connect to react store
import { addMacroObj } from './../../actions';
import { MacroDisplay } from './MacroDisplay/MacroDisplay';
import { MacroPreset } from './MacroPreset/MacroPreset';
import  Util from './../../helpers/util.js';

export class Macro extends React.Component{
    state = {
        gramsOfCarb: 0,
        gramsOfProtein: 0,
        gramsOfFat: 0
    }
    handleInputSlide = (e) => {
        switch(e.target.name){
            case "carbs":
                this.setState({gramsOfCarb : e.target.value})
                break;
            case "protein":
                this.setState({gramsOfProtein : e.target.value})
                break;
            case "fat":
                this.setState({gramsOfFat : e.target.value})
                break;
            default:
                break;
        }
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
                <MacroDisplay handleChange={(e)=>this.handleInputSlide(e)} unitName="carbs" unitQuantity = {this.state.gramsOfCarb} />
                <MacroDisplay handleChange={(e)=>this.handleInputSlide(e)} unitName="protein" unitQuantity = {this.state.gramsOfProtein} />
                <MacroDisplay handleChange={(e)=>this.handleInputSlide(e)} unitName="fat" unitQuantity = {this.state.gramsOfFat} />
                <MacroPreset />
            </div>
        )
    }
}
function mapDispatchToProps (dispatch)  {
    return { actions: bindActionCreators(addMacroObj, dispatch) }
  }
export default connect(mapDispatchToProps)(Macro);