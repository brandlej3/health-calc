import React, { Component } from 'react';
import './App.css';
import { Form } from './../Form/Form';
import Header from './../Header/Header';
import { Macro } from './../Macro/Macro';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import HamburgerButton from './../HamburgerButton/HamburgerButton';
import { Menu } from './../Menu/Menu';

export class App extends Component {
  state = {
    switchClass: false,
    class: "container",
    visible: false
  }

  constructor(props, context) {
    super(props, context);
 
    this.state = {
      visible: false
    };
  }
  handleClick = (e) => {
    this.setState({switchClass: !this.state.switchClass});
    if(this.state.switchClass == true){
        this.setState({class: "container"});
    } else {
        this.setState({class: "change"});
    }

    this.toggleMenu();
    
       console.log("clicked");
       e.stopPropagation();
  }
  toggleMenu() {
    this.setState(
      {
        visible: !this.state.visible
      }
    );
  }

  render() {
    return (
        <div>
            < HamburgerButton burgerClass={this.state.class} handleMouseDown={(e)=>this.handleClick(e)} />
            < Header />
            < Menu handleMouseDown={(e)=>this.handleClick(e)} menuVisibility={this.state.visible} />
            <Tabs>
              <TabList className="tabholder">
                <Tab className="tabs">Calories</Tab>
                <Tab className="tabs">Macros</Tab>
              </TabList>
              <TabPanel>
                  < Form />
              </TabPanel>
              <TabPanel>
                  < Macro />
              </TabPanel>
            </Tabs>
        </div>
    );
  }
}