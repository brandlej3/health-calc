import { Component } from 'react';

class Util extends Component {
    static validateNumber = (e) =>
    {
        var inputValue = e.target.value.match(/^\d+$/);;
        if(inputValue == null)
        {
            e.target.value = "";
            return false
        }
        return true
    }
    static calculateMacros = (weight, calories) =>
    {
        const proteinMultiplier = 0.875
        const fatMultiplier = 0.2
        var macroObject = {
            pGrams : 0,
            cGrams: 0,
            fGrams: 0
        }
        macroObject.pGrams = Math.round(weight * proteinMultiplier)
        macroObject.fGrams = Math.round(weight * fatMultiplier)
        macroObject.cGrams = Math.round((calories - ((macroObject.pGrams * 4) + (macroObject.fGrams * 9)) ) / 4 )
        
        return macroObject
    }
}


export default Util;