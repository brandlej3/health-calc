import { Component } from 'react';

class Util extends Component {
    static calculateTdee(gender, activityLevel, weight, height, age)  {
        var genderMultiplier = 0;
        var weightMultiplier = 0;
        var heightMultiplier = 0;
        var ageMultiplier = 0;
        var calculatedValue = 0;
        var activityMultiplier = 0;
        if(gender === "male")
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
        switch(activityLevel){
            case "sedentary":
                activityMultiplier = 1.2;
                break;
            case "light":
                activityMultiplier = 1.375;
                break;
            case "moderate":
                activityMultiplier = 1.55;
                break;
            case "very":
                activityMultiplier = 1.725;
                break;
            default:
                activityMultiplier = 0;
        }
        calculatedValue = (genderMultiplier + (weightMultiplier * weight) + (heightMultiplier * height) - (ageMultiplier * age)) * activityMultiplier;
        return Math.round(calculatedValue);
    }
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