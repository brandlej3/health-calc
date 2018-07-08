import React from 'react';
import './Macro.css';
import store from './../../index';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'; //connect to react store
import { addMacroObj } from './../../actions';
import { MacroDisplay } from './MacroDisplay/MacroDisplay';
import { MacroPreset } from './MacroPreset/MacroPreset';
import { ketoMultipliers, paleoMultipliers, highCarbMultipliers } from './../../constants/calculationConstants';
import  Util from './../../helpers/util.js';

export class Macro extends React.Component{
    state = {
        cals: 0,
        defaultGramsOfCarb: 0,
        defaultGramsOfProtein: 0,
        defaultGramsOfFat: 0,
        gramsOfCarb: 0,
        gramsOfProtein: 0,
        gramsOfFat: 0,
    }
    handleSelection = (e) => {
        switch(e.target.value){
            case "Default": //adjust macros to default const multipliers
                this.setState({
                    gramsOfCarb: this.state.defaultGramsOfCarb,
                    gramsOfProtein: this.state.defaultGramsOfProtein,
                    gramsOfFat: this.state.defaultGramsOfFat,
                });
                console.log("default");
                break;
            case "Keto": //adjust macros to keto const multipliers
                this.setState({
                    gramsOfCarb: Math.round((this.state.cals * ketoMultipliers['carbs'])/4),
                    gramsOfProtein: Math.round((this.state.cals * ketoMultipliers['protein'])/4),
                    gramsOfFat: Math.round((this.state.cals * ketoMultipliers['fat'])/9),
                });
                console.log("keto");
                break;
            case "Paleo": //adjust macros to paleo const multipliers
                this.setState({
                    gramsOfCarb: Math.round((this.state.cals * paleoMultipliers['carbs'])/4),
                    gramsOfProtein: Math.round((this.state.cals * paleoMultipliers['protein'])/4),
                    gramsOfFat: Math.round((this.state.cals * paleoMultipliers['fat'])/9),
                });
                console.log("paleo");
                break;
            case "High-Carb": //adjust macros to High-carbs const multipliers
                this.setState({
                    gramsOfCarb: Math.round((this.state.cals * highCarbMultipliers['carbs'])/4),
                    gramsOfProtein: Math.round((this.state.cals * highCarbMultipliers['protein'])/4),
                    gramsOfFat: Math.round((this.state.cals * highCarbMultipliers['fat'])/9),
                });
                console.log("high carb");
                break;
            default:
                break;
        }
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
            cals: calories,
            gramsOfCarb: macroObject['cGrams'],
            gramsOfProtein: macroObject['pGrams'],
            gramsOfFat: macroObject['fGrams'],
            defaultGramsOfCarb: macroObject['cGrams'],
            defaultGramsOfProtein: macroObject['pGrams'],
            defaultGramsOfFat: macroObject['fGrams']
        });
    }
    render(){
        return (
            <div className="divWrap">
                <MacroDisplay handleChange={(e)=>this.handleInputSlide(e)} unitName="carbs" unitQuantity = {this.state.gramsOfCarb} />
                <MacroDisplay handleChange={(e)=>this.handleInputSlide(e)} unitName="protein" unitQuantity = {this.state.gramsOfProtein} />
                <MacroDisplay handleChange={(e)=>this.handleInputSlide(e)} unitName="fat" unitQuantity = {this.state.gramsOfFat} />
                <MacroPreset handlePresetSelection={(e)=>this.handleSelection(e)} />
            </div>
        )
    }
}
function mapDispatchToProps (dispatch)  {
    return { actions: bindActionCreators(addMacroObj, dispatch) }
  }
export default connect(mapDispatchToProps)(Macro);