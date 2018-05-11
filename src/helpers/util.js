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
}


export default Util;