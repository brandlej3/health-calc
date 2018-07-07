import React, { Component } from 'react';
import './Form.css';
import { Button, Grid, Row, Col } from 'react-bootstrap';
import { CalorieDisplay } from './../Display/Display.js';
import { ActivityModal } from './ActivityModal/ActivityModal.js';
import  Util from './../../helpers/util.js';

export class Form extends Component {
state = {
    showToggle: false,
    theContent: "",
    clicked: false,
    gender: null,
    weight: null,
    height: null,
    age: 0,
    activityLevel: null,
    genderError: null,
    activityError: null
    }

    handleCalculate = (e) => {
        e.preventDefault();
        if(this.validateGenderNotEmpty() === true && this.validateActivityNotEmpty() === true)
        {
            this.setState({
                clicked: true,
                weight: parseInt(e.target.weight.value, 10),
                height: parseInt(e.target.height.value, 10),
                age: parseInt(e.target.age.value, 10)
            });
            window.scrollTo(0,0);
        }
    }
    validateActivityNotEmpty = () =>
    {
        if(this.state.activityLevel === null)
        {
            this.setState({activityError: true});
            return false;
        }
        this.setState({activityError: null});
        return true;
    }
    validateGenderNotEmpty = () =>
    {
        if(this.state.gender === null)
        {
            this.setState({genderError: true});
            return false;
        }
        this.setState({genderError: null});
        return true;
    }
    validateAge = (e) =>
    {
        if(Util.validateNumber(e) === true)
        {
            var inputValue = Number.parseInt(e.target.value, 10);
            if(inputValue > 96 || inputValue === 0 ) //limit age to 96
            {
                e.target.value = "";
            }
        }
    }
    validateHeight = (e) =>
    {
        if(Util.validateNumber(e) === true)
        {
            var inputValue = Number.parseInt(e.target.value, 10);
            if(inputValue > 96) //limit height to 98 in.
            {
                e.target.value = "";
            }
        }
    }
    handleGender = (e) => {
        e.target.id === "male" ? this.setState({ gender : "male" }) : this.setState({ gender : "female" });
    }
    handleActivityLevel = (e) => {
        this.setState({ activityLevel : e.target.id });
    }
    handleRefresh = () =>
    {
        this.setState({
            showToggle: false,
            theContent: "",
            clicked: false,
            gender: null,
            weight: null,
            height: null,
            age: 0,
            activityLevel: null,
            genderError: null,
            activityError: null
        });
    }
    renderCalorieDisplay() {
        return < CalorieDisplay onClick={this.handleRefresh} stateArray={this.state} />;
    }
    handleMouseOut = () => {
        this.setState({
            showToggle : false
        });
    }
    handleHover = (e) => {
        var modalContent = "";

        switch(e.target.className){
            case "sedentary":
            modalContent = "Choose this if day-to-day you are typically sitting, or not active.";
            break;
            case "light":
            modalContent = "Choose this if you go do light activity like the occasional walk / exercise.";
            break;
            case "moderate":
            modalContent = "Moderate activity would be exercise more than one to two times per week; consisting of an elevated heart rate and/or strenth training.";
            break;
            case "very":
            modalContent = "Your job is physically intensive and/or you work out almost everyday of the week.";
            break;
            default:
            modalContent = "n/a";
        }
        this.setState({
            showToggle : true,
            theContent : modalContent
        });
    }
    render() {
        if (this.state.clicked){
            
        return (
            <div>
                <img onClick={this.handleRefresh} title="Click to start over" alt="refreshicon" className="refresh" height="25em" width="25em" src={require("./../../assets/images/refresh.png")} /> <span className="startover">Start Over</span>
                < CalorieDisplay stateArray={this.state} />
            </div>);
        } else {
            return (
                <form onSubmit={ this.handleCalculate }>
                    <Grid bsClass="formgrid">
                        <Row>
                            <Col className="gender" xs={12} md={12}>
                                <h3 className="gender-group">Gender</h3>
                                <div onClick={this.handleGender} className="gender-group">
                                    <div title="male gender" className={this.state.gender === "male" ? 'selected' : ''} id="male"></div>
                                    <div title="female gender" className={this.state.gender === "female" ? 'selected' : ''} id="female"></div>
                                    {this.state.genderError ? <span>Please choose your gender!</span> : null}
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="weightGrouping" xs={12} md={12}>
                                <h3 className="input-labels">Weight</h3>
                                <input name="weight" type="number" onKeyUp={Util.validateNumber} required></input>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="heightGrouping" xs={12} md={12}>
                                <h3 className="input-labels">Height <span id="inches">(inches)</span></h3>
                                <input name="height" type="number" onKeyUp={this.validateHeight} required></input>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="ageGrouping" xs={12} md={12}>
                                <h3 className="input-labels">Age</h3>
                                <input name="age" type="number" onKeyUp={this.validateAge} required></input>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="activityGrouping" xs={12} md={12}>
                                <h4>Activity Level <span id="choose">(Choose One)</span></h4>
                                <div onClick= {this.handleActivityLevel}>
                                    <div title="sedentary activity" className={this.state.activityLevel === "sedentary" ? 'activity-grid selected' : 'activity-grid'} id="sedentary"><img className="sedentary" onClick={this.handleHover} alt="info" height="20em" width="20em" src={require("./../../assets/images/infoIcon.png")} /></div>
                                    <div title="light activity" className={this.state.activityLevel === "light" ? 'activity-grid selected' : 'activity-grid'} id="light"><img className="light" onClick={this.handleHover} alt="info" height="20em" width="20em" src={require("./../../assets/images/infoIcon.png")} /></div>
                                    <div title="moderate activity" className={this.state.activityLevel === "moderate" ? 'activity-grid selected' : 'activity-grid'} id="moderate"><img className="moderate" onClick={this.handleHover} alt="info" height="20em" width="20em" src={require("./../../assets/images/infoIcon.png")} /></div>
                                    <div title="very active" className={this.state.activityLevel === "very" ? 'activity-grid selected' : 'activity-grid'} id="very"><img className="very" onClick={this.handleHover} alt="info" height="20em" width="20em" src={require("./../../assets/images/infoIcon.png")} /></div>
                                </div>
                                {this.state.activityError ? <span>Please choose your activity level!</span> : null}
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} md={12}>
                                <Button bsStyle="primary submit" type="submit">Calculate</Button>
                            </Col>
                        </Row>
                    </Grid>
                    
                    <ActivityModal toggleActive={this.state.showToggle} activeLvl={this.state.activityLevel} coreContent={this.state.theContent} onMouseOut={()=> this.handleMouseOut()} />
    
                </form>
            );
        }
        
    }
}
export default Form;