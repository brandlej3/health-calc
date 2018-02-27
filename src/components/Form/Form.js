import React, { Component } from 'react';
import './Form.css';
import { Button, Grid, Row, Col, Jumbotron } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { CalorieDisplay } from './../Display/Display.js';
import { ActivityModal } from './ActivityModal/ActivityModal.js';

export class Form extends Component {
state = {
    showToggle: false,
    theContent: "",
    clicked: false,
    gender: null,
    weight: null,
    height: null,
    age: 0,
    activityLevel: null
    }
    static propTypes = {
    clicked: PropTypes.bool,
    gender: PropTypes.string,
    weight: PropTypes.number,
    height: PropTypes.number,
    age: PropTypes.number,
    activityLevel: PropTypes.string
    }
    static defaultProps = {
    clicked: false,
    gender: "",
    weight: 0,
    height: 0,
    age: 0,
    activityLevel: ""
    }
    //end initial doc
    handleCalculate = (e) => {
    e.preventDefault();
    this.setState({
        clicked: true,
        weight: parseInt(e.target.weight.value, 10),
        height: parseInt(e.target.height.value, 10),
        age: parseInt(e.target.age.value, 10)
    });
    }
    handleGender = (e) => {
        e.target.id === "male" ? this.setState({ gender : "male" }) : this.setState({ gender : "female" });
    }
    handleActivityLevel = (e) => {
        this.setState({ activityLevel : e.target.id });
    }
    renderCalorieDisplay() {
        return < CalorieDisplay stateArray={this.state} />;
    }
    handleMouseOut = () => {
        this.setState({
            showToggle : false
        });
    }
    handleHover = (e) => {
        var modalContent = "";

        switch(e.target.id){
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
        return (
            <form onSubmit={ this.handleCalculate }>
                <Grid bsClass="formgrid">
                    <Row>
                        <Col xs={12} md={12}>
                            <Jumbotron bsClass="jumbotron">
                                <h1 className="header-text">Calorie Calculator</h1>
                            </Jumbotron>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={12}>
                            <h2 className="subheader-text">Calculator to see how much you should eat everyday</h2>
                            <p className="sub-subheader-text">Consult a doctor before making any extreme changes</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="gender" xs={12} md={12}>
                            <h3 className="gender-group">Gender</h3>
                            <div onClick={this.handleGender} className="gender-group">
                                <div className={this.state.gender === "male" ? 'selected' : ''} id="male"></div>
                                <div className={this.state.gender === "female" ? 'selected' : ''} id="female"></div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="weightGrouping" xs={12} md={12}>
                            <h3 className="input-labels">Weight</h3>
                            <input name="weight" type="number"></input>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="heightGrouping" xs={12} md={12}>
                            <h3 className="input-labels">Height</h3>
                            <input name="height" type="number"></input>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="ageGrouping" xs={12} md={12}>
                            <h3 className="input-labels">Age</h3>
                            <input name="age" type="number"></input>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="activityGrouping" xs={12} md={12}>
                            <h4>Activity Level</h4>
                            <div onClick= {this.handleActivityLevel}>
                            <div onClick={this.handleHover} className={this.state.activityLevel === "sedentary" ? 'activity-grid selected' : 'activity-grid'} id="sedentary"></div>
                            <div onClick={this.handleHover} className={this.state.activityLevel === "light" ? 'activity-grid selected' : 'activity-grid'} id="light"></div>
                            <div onClick={this.handleHover} className={this.state.activityLevel === "moderate" ? 'activity-grid selected' : 'activity-grid'} id="moderate"></div>
                            <div onClick={this.handleHover} className={this.state.activityLevel === "very" ? 'activity-grid selected' : 'activity-grid'} id="very"></div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={12}>
                            <Button bsStyle="primary submit" type="submit">Calculate</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={12}>
                            {this.state.clicked ? this.renderCalorieDisplay() : ""}
                        </Col>
                    </Row>
                </Grid>
                
                <ActivityModal toggleActive={this.state.showToggle} activeLvl={this.state.activityLevel} coreContent={this.state.theContent} onMouseOut={()=> this.handleMouseOut()} />

            </form>
        );
    }
}
export default Form;