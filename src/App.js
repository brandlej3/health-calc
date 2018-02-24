import React, { Component } from 'react';
import './App.css';
import { Button, Grid, Row, Col, Jumbotron } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { CalorieDisplay } from './Display.js';

class App extends Component {
  state = {
    gender: null,
    weight: null,
    height: null,
    age: 0,
    activityLevel: null
  }
  static propTypes = {
    gender: PropTypes.string,
    weight: PropTypes.number,
    height: PropTypes.number,
    age: PropTypes.number,
    activityLevel: PropTypes.string
  }
  static defaultProps = {
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
  render() {
    return (
      <form onSubmit={ this.handleCalculate }>
        <Grid bsClass="grid-body">
          <Row>
            <Col xs={12} md={12}>
              <Jumbotron bsClass="jumbotron">
                <h1 className="header-text">Calorie Calculator</h1>
              </Jumbotron>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12}>
                  <h3 className="gender-group">Gender</h3>
                  <div onClick={this.handleGender} className="gender-group">
                    <div id="male"></div>
                    <div id="female"></div>
                  </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12}>
              <h3 className="input-labels">Weight</h3>
              <input name="weight" type="number"></input>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12}>
              <h3 className="input-labels">Height</h3>
              <input name="height" type="number"></input>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12}>
              <h3 className="input-labels">Age</h3>
              <input name="age" type="number"></input>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12}>
              <h4>Activity Level</h4>
                <div onClick= {this.handleActivityLevel}>
                  <div className="activity-grid" id="sedentary">1</div>
                  <div className="activity-grid" id="light">2</div>
                  <div className="activity-grid" id="moderate">3</div>
                  <div className="activity-grid" id="very">4</div>
                </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12}>
              <Button type="submit">Calculate !</Button>
            </Col>
            {this.renderCalorieDisplay()}
          </Row>
        </Grid>
      </form>
    );
  }
}

export default App;
