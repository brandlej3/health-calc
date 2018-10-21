import React, { Component } from "react";
import './HamburgerButton.css';
 
class HamburgerButton extends Component {
  render() {
    return (
        <div class={this.props.burgerClass} onClick={this.props.handleMouseDown}>
            <div class="bar1"></div>
            <div class="bar2"></div>
            <div class="bar3"></div>
        </div>
    );
  }
}
 
export default HamburgerButton;