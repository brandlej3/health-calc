import React, { Component } from "react";
import "./Menu.css";
 
export class Menu extends Component {
  render() {
    var vis = "hide";
 
    if (this.props.menuVisibility) {
      vis = "show";
    }
 
    return (
      <div id="flyoutMenu"
           onMouseDown={this.props.handleMouseDown} 
           className={vis}>
        <h2><a href="#">Home</a></h2>
        <h2><a href="#">Weight Analysis</a></h2>
        <h2><a href="#">Calculators</a></h2>
        <h2><a href="#">About</a></h2>
      </div>
    );
  }
}