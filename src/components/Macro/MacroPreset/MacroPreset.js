import React from 'react';
import './MacroPreset.css';

export const MacroPreset = props =>
    (
        <div>
            <h3>Presets: </h3>
            <span className="dropdown">
                <select onClick={((e)=>props.handlePresetSelection(e))}>
                    <option value="Default">Default</option>
                    <option value="Keto">Keto</option>
                    <option value="Paleo">Paleo</option>
                    <option value="High-Carb">High-Carb</option>
                </select>
            </span>
        </div>
    );