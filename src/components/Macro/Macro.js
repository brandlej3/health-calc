import React from 'react';
import './Macro.css';

export class MacroDisplay extends React.Component{
    render(){
        return (
            <div>
                <div class="divWrap">
                        <div class="left"></div>
                        <div class="center"></div>
                        <div class="right"></div>
                </div>
            </div>
        )
    }
}
export default MacroDisplay;